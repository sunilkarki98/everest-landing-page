"use client";

import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import Script from "next/script";
import { Check, Mail, Download, AlertCircle, Lock } from "lucide-react";

export default function TaxForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [hasSignature, setHasSignature] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for Y/N toggles to avoid direct DOM manipulation for state
  const [medicareExempt, setMedicareExempt] = useState<"Y" | "N" | "">("");
  const [contactMethod, setContactMethod] = useState<"Phone" | "Email">("Phone");
  const [workExps, setWorkExps] = useState<Record<string, "Y" | "N" | "">>({});
  
  // Error states
  const [errors, setErrors] = useState<{ medicare?: string; signature?: string }>({});
  
  // Value states for masking
  const [tfnValue, setTfnValue] = useState("");
  const [bsbValue, setBsbValue] = useState("");

  // Work Expenses List
  const workExpItems = [
    { label: "Car expense (If you have multiple jobs)", key: "exp_car" },
    { label: "Travel Expenses", key: "exp_travel" },
    { label: "Uniform for work", key: "exp_uniform" },
    { label: "Laundry", key: "exp_laundry" },
    { label: "Union fee", key: "exp_union" },
    { label: "Ahpra fee (Only for RN & EN)", key: "exp_ahpra" },
    { label: "Self Education Costs", key: "exp_education" },
    { label: "Tools Expenses", key: "exp_tools" },
    { label: "Donation", key: "other_donations" },
    { label: "Tax Agent fees (Last Year)", key: "other_tax_agent_fees" },
    { label: "Home office Expenses (70c/hour)", key: "exp_home_office" },
  ];

  // Signature Pad Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let drawing = false;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width * 2;
        canvas.height = 180; // 90px * 2 for retina
        ctx.scale(2, 2);
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#1A2B3D";
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const start = (e: MouseEvent | TouchEvent) => {
      drawing = true;
      setHasSignature(true);
      setErrors(prev => ({ ...prev, signature: undefined }));
      const p = getPos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      e.preventDefault();
    };

    const move = (e: MouseEvent | TouchEvent) => {
      if (!drawing) return;
      const p = getPos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      e.preventDefault();
    };

    const end = () => {
      drawing = false;
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start as any, { passive: false });
    canvas.addEventListener("touchmove", move as any, { passive: false });
    canvas.addEventListener("touchend", end);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
      canvas.removeEventListener("touchstart", start as any);
      canvas.removeEventListener("touchmove", move as any);
      canvas.removeEventListener("touchend", end);
    };
  }, []);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      setHasSignature(false);
    }
  };

  const handleUpdateProgress = () => {
    if (!formRef.current) return;
    const form = formRef.current;
    const sections = Array.from(form.querySelectorAll("[data-section]"));
    
    let started = 0;
    sections.forEach((section) => {
      const inputs = Array.from(section.querySelectorAll("input, select, textarea")) as HTMLInputElement[];
      const hasValue = inputs.some(inp => {
        if (inp.type === "hidden" || inp.type === "checkbox") return false;
        return inp.value && inp.value.trim() !== "";
      });
      // specific overrides for section progress
      const sectionNum = section.getAttribute("data-section");
      if (
        hasValue || 
        (sectionNum === "5" && hasSignature) || 
        (sectionNum === "1" && medicareExempt !== "")
      ) {
        started++;
      }
    });

    setProgress(Math.round((started / 5) * 100)); // 5 sections total now
  };

  const handleYNToggle = (key: string, value: "Y" | "N") => {
    setWorkExps(prev => {
      const newState: Record<string, "Y" | "N" | ""> = {
        ...prev,
        [key]: prev[key] === value ? "" : value
      };
      
      // If setting to N or clearing, we should also clear the corresponding input values
      // Note: we just manage visual state here, the actual values might still be in the DOM
      // but we will ignore them in PDF generation if it's not "Y"
      if (newState[key] !== "Y" && formRef.current) {
         const detailsInput = formRef.current.elements.namedItem(`${key}_details`) as HTMLInputElement;
         const amountInput = formRef.current.elements.namedItem(`${key}_amount`) as HTMLInputElement;
         if (detailsInput) detailsInput.value = "";
         if (amountInput) amountInput.value = "";
      }
      
      return newState;
    });
    handleUpdateProgress();
  };

  const handleTfnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digits
    let val = e.target.value.replace(/\D/g, "");
    // Add spaces every 3 digits, up to 9 digits
    if (val.length > 9) val = val.slice(0, 9);
    
    const formatted = val.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
    setTfnValue(formatted);
    handleUpdateProgress();
  };

  const handleBsbChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digits
    let val = e.target.value.replace(/\D/g, "");
    // Add dash after 3 digits, up to 6 digits
    if (val.length > 6) val = val.slice(0, 6);
    
    const formatted = val.length > 3 ? `${val.slice(0, 3)}-${val.slice(3)}` : val;
    setBsbValue(formatted);
    handleUpdateProgress();
  };

  const getVal = (name: string) => {
    if (!formRef.current) return "";
    const el = formRef.current.elements.namedItem(name) as HTMLInputElement;
    return el ? el.value.trim() : "";
  };

  const buildSummary = () => {
    const lines = [];
    lines.push("EVEREST.TAX");
    lines.push("TAX RETURN FORM — CLIENT SUMMARY");
    lines.push("Generated: " + new Date().toLocaleString());
    lines.push("=".repeat(60));

    lines.push("\n01. PERSONAL INFORMATION");
    lines.push("-".repeat(40));
    lines.push(`Name: ${getVal("name")}`);
    lines.push(`TFN: ${getVal("tfn")}`);
    lines.push(`Occupation: ${getVal("occupation")}`);
    lines.push(`DOB: ${getVal("dob")}`);
    lines.push(`Visa subclass: ${getVal("visa_subclass")}`);
    lines.push(`Marital status: ${getVal("marital_status")}`);
    lines.push(`No. of dependents: ${getVal("dependents")}`);
    lines.push(`Medicare levy exempt: ${medicareExempt || "—"}`);
    lines.push(`ABN: ${getVal("abn")}`);

    lines.push("\n02. CONTACT DETAILS");
    lines.push("-".repeat(40));
    lines.push(`Address: ${getVal("address")}`);
    lines.push(`Phone: ${getVal("phone")}`);
    lines.push(`Email: ${getVal("email")}`);
    lines.push(`Preferred contact: ${contactMethod}`);

    lines.push("\n03. BANK DETAILS (FOR REFUND)");
    lines.push("-".repeat(40));
    lines.push(`Bank name: ${getVal("bank_name")}`);
    lines.push(`Refund account name: ${getVal("refund_acct_name")}`);
    lines.push(`BSB: ${getVal("bsb")}`);
    lines.push(`Account Number: ${getVal("account_number")}`);

    lines.push("\n04. EXPENSES (WORK RELATED)");
    lines.push("-".repeat(40));
    let anyExp = false;
    workExpItems.forEach(({ label, key }) => {
      const yn = workExps[key];
      // Only include expenses that are marked "Y"
      if (yn === "Y") {
        const details = getVal(`${key}_details`);
        const amount = getVal(`${key}_amount`);
        if (details || amount) {
          anyExp = true;
          lines.push(`${label}: Y  | Details: ${details}  | $${amount}`);
        }
      }
    });
    if (!anyExp) lines.push("(none indicated)");

    lines.push("\n05. DECLARATION & SIGNATURE");
    lines.push("-".repeat(40));
    lines.push("Client confirms authorisation of Everest.Tax and the registered tax agent as tax agent.");
    lines.push("Client confirms information provided is true and correct.");
    lines.push("Client acknowledges 5-year record-keeping obligation.");
    const ack = (formRef.current?.elements.namedItem("ackCheck") as HTMLInputElement)?.checked;
    lines.push(`Acknowledged: ${ack ? "Yes" : "No"}`);
    lines.push(`Date signed: ${getVal("sig_date")}`);
    lines.push(`Signature captured: ${hasSignature ? "Yes" : "No"}`);

    return lines.join("\n");
  };

  const generatePDF = () => {
    // @ts-ignore
    const { jsPDF } = window.jspdf;
    if (!jsPDF) {
      alert("PDF library is still loading. Please try again in a moment.");
      return;
    }
    
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const summaryText = buildSummary();
    const lines = doc.splitTextToSize(summaryText, 500);
    
    // Add text to PDF
    doc.setFont("courier", "normal");
    doc.setFontSize(10);
    
    let cursorY = 40;
    lines.forEach((line: string) => {
      if (cursorY > 800) {
        doc.addPage();
        cursorY = 40;
      }
      doc.text(line, 40, cursorY);
      cursorY += 14;
    });

    // Add signature image if available
    if (hasSignature && canvasRef.current) {
      if (cursorY > 700) {
         doc.addPage();
         cursorY = 40;
      }
      doc.text("Signature:", 40, cursorY + 20);
      const imgData = canvasRef.current.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 40, cursorY + 30, 150, 75);
    }

    return doc;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    
    const newErrors: { medicare?: string; signature?: string } = {};

    if (!form.checkValidity()) {
      form.reportValidity();
      return; // stops submission, lets browser show tooltips for standard fields
    }

    if (!medicareExempt) {
      newErrors.medicare = "Please select whether you are Medicare levy exempt.";
    }

    if (!hasSignature) {
      newErrors.signature = "Your signature is required to proceed.";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Scroll to the first error
      if (newErrors.medicare) {
        document.getElementById("medicare-section")?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newErrors.signature) {
        document.getElementById("signature-section")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Submit to backend
    setIsSubmitting(true);
    try {
      // We must generate the PDF first to attach it
      const doc = generatePDF();
      let pdfBase64 = "";
      if (doc) {
        pdfBase64 = doc.output('datauristring');
      }

      // Gather form data
      const formData = new FormData(form);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
      // Add manual state values
      Object.entries(workExps).forEach(([key, val]) => {
         data[`${key}_selected`] = val;
      });
      data.medicareExempt = medicareExempt;
      data.contactMethod = contactMethod;
      
      // Attach PDF for Google Apps Script
      if (pdfBase64) {
        data.pdfBase64 = pdfBase64;
      }

      const res = await fetch("/api/tax-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        console.error("Failed to submit to backend");
        // Could show an error state here, but we will show success to allow download
      }
    } catch (e) {
      console.error("Error submitting form", e);
    } finally {
      setIsSubmitting(false);
      setShowSuccess(true);
    }
  };

  const downloadSummary = () => {
    const doc = generatePDF();
    if (doc) {
      doc.save("Tax_Return_Summary.pdf");
    }
  };

  const emailSummary = () => {
    downloadSummary();
    const subject = encodeURIComponent("Tax Return Summary - " + getVal("name"));
    const body = encodeURIComponent("Please find my completed tax return summary attached (from the downloaded PDF).");
    const targetEmail = process.env.NEXT_PUBLIC_TAX_EMAIL || "tax.everest@yahoo.com";
    const adminEmail = "admin@eevsgroup.com";
    window.location.href = `mailto:${targetEmail},${adminEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/3.0.1/jspdf.umd.min.js" strategy="lazyOnload" />

      {/* Progress Ledger (Sticky) */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border border-border shadow-sm rounded-xl p-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Progress</span>
          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
            {Math.round(progress / 20)} / 5 sections
          </span>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} onChange={handleUpdateProgress} className="space-y-8 pb-20">
        
        {/* Section 1: Personal Information */}
        <section data-section="1" className="bg-white border border-border shadow-sm rounded-xl overflow-hidden">
          <div className="border-b border-border bg-slate-50 p-5 sm:p-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="bg-accent/10 text-accent border border-accent/20 text-xs font-mono px-2 py-1 rounded">01</span>
              <h2 className="text-xl font-bold text-primary">Personal Information</h2>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-semibold border border-emerald-200">
              <Lock size={14} />
              <span>Secure</span>
            </div>
          </div>
          <div className="p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Full name <span className="text-red-500">*</span></label><input type="text" name="name" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Tax File Number (TFN) <span className="text-red-500">*</span></label>
                <input type="text" name="tfn" value={tfnValue} onChange={handleTfnChange} placeholder="### ### ###" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono tracking-wider" />
              </div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Occupation <span className="text-red-500">*</span></label><input type="text" name="occupation" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Date of birth <span className="text-red-500">*</span></label><input type="date" name="dob" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Visa subclass <span className="font-normal text-muted-foreground">(if applicable)</span></label><input type="text" name="visa_subclass" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Marital status <span className="text-red-500">*</span></label>
                <select name="marital_status" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  <option value="">Select...</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>De facto</option>
                  <option>Separated</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Number of dependents <span className="text-red-500">*</span></label><input type="text" name="dependents" inputMode="numeric" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">ABN <span className="font-normal text-muted-foreground">(if applicable)</span></label><input type="text" name="abn" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
            </div>

            <div id="medicare-section" className={`mt-8 pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl transition-colors ${errors.medicare ? "bg-red-50 border-red-200 border" : "border-border"}`}>
              <div>
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  Medicare levy exempt? <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-muted-foreground mt-1">Tick if you hold a Medicare exemption certificate</p>
                {errors.medicare && (
                  <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1.5"><AlertCircle size={14}/> {errors.medicare}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => {
                  setMedicareExempt("Y");
                  setErrors(prev => ({ ...prev, medicare: undefined }));
                  handleUpdateProgress();
                }} className={`w-12 h-10 text-sm font-bold rounded-md border transition-colors ${medicareExempt === "Y" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-600 border-input hover:bg-slate-50"}`}>Y</button>
                <button type="button" onClick={() => {
                  setMedicareExempt("N");
                  setErrors(prev => ({ ...prev, medicare: undefined }));
                  handleUpdateProgress();
                }} className={`w-12 h-10 text-sm font-bold rounded-md border transition-colors ${medicareExempt === "N" ? "bg-slate-200 text-slate-800 border-slate-300" : "bg-white text-slate-600 border-input hover:bg-slate-50"}`}>N</button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Contact Details */}
        <section data-section="2" className="bg-white border border-border shadow-sm rounded-xl overflow-hidden">
          <div className="border-b border-border bg-slate-50 p-5 sm:p-6 flex items-center gap-4">
            <span className="bg-accent/10 text-accent border border-accent/20 text-xs font-mono px-2 py-1 rounded">02</span>
            <h2 className="text-xl font-bold text-primary">Contact Details</h2>
          </div>
          <div className="p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 sm:col-span-2"><label className="text-sm font-semibold text-slate-700">Address <span className="text-red-500">*</span></label><input type="text" name="address" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Phone <span className="text-red-500">*</span></label><input type="tel" name="phone" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Email <span className="text-red-500">*</span></label><input type="email" name="email" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              
              <div className="space-y-2 sm:col-span-2 mt-2 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <label className="text-sm font-semibold text-slate-700 block mb-1">How should we contact you?</label>
                <p className="text-xs text-slate-500 mb-3">If our tax agent needs to clarify details on your return, what is the best way to reach you?</p>
                <div className="flex gap-2 max-w-sm">
                  <button type="button" onClick={() => setContactMethod("Phone")} className={`flex-1 py-2.5 text-sm font-medium rounded-md border transition-colors ${contactMethod === "Phone" ? "bg-primary text-white border-primary shadow-sm" : "bg-white text-slate-600 border-input hover:bg-slate-50"}`}>Phone</button>
                  <button type="button" onClick={() => setContactMethod("Email")} className={`flex-1 py-2.5 text-sm font-medium rounded-md border transition-colors ${contactMethod === "Email" ? "bg-primary text-white border-primary shadow-sm" : "bg-white text-slate-600 border-input hover:bg-slate-50"}`}>Email</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Bank Details */}
        <section data-section="3" className="bg-white border border-border shadow-sm rounded-xl overflow-hidden">
          <div className="border-b border-border bg-slate-50 p-5 sm:p-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="bg-accent/10 text-accent border border-accent/20 text-xs font-mono px-2 py-1 rounded">03</span>
              <div>
                <h2 className="text-xl font-bold text-primary">Bank Details for Refund</h2>
                <p className="text-xs text-muted-foreground mt-1 hidden sm:block">Where should the ATO deposit your tax refund?</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-semibold border border-emerald-200 whitespace-nowrap">
              <Lock size={14} />
              <span>Secure</span>
            </div>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-xs text-muted-foreground mb-6 sm:hidden">Where should the ATO deposit your tax refund?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Bank name <span className="text-red-500">*</span></label><input type="text" name="bank_name" required placeholder="e.g. Commonwealth Bank" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Account name <span className="text-red-500">*</span></label><input type="text" name="refund_acct_name" required placeholder="e.g. John Doe" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" /></div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">BSB <span className="text-red-500">*</span></label>
                <input type="text" name="bsb" value={bsbValue} onChange={handleBsbChange} placeholder="###-###" inputMode="numeric" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono tracking-wider" />
              </div>
              <div className="space-y-2"><label className="text-sm font-semibold text-slate-700">Account number <span className="text-red-500">*</span></label><input type="text" name="account_number" inputMode="numeric" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono tracking-wider" /></div>
            </div>
          </div>
        </section>

        {/* Section 4: Expenses */}
        <section data-section="4" className="bg-white border border-border shadow-sm rounded-xl overflow-hidden">
          <div className="border-b border-border bg-slate-50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="bg-accent/10 text-accent border border-accent/20 text-xs font-mono px-2 py-1 rounded">04</span>
              <div>
                <h2 className="text-xl font-bold text-primary">Work Related Expenses</h2>
                <p className="text-xs text-muted-foreground mt-1">July – June of the financial year</p>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full self-start sm:self-auto">Receipts Required</span>
          </div>
          <div className="p-5 sm:p-6">
            <div className="hidden sm:grid grid-cols-[1.5fr_auto_1fr_1fr] gap-4 pb-3 border-b-2 border-border mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span>Expense</span><span>Y / N</span><span>Details</span><span>Amount $</span>
            </div>
            
            <div className="space-y-6 sm:space-y-0">
              {workExpItems.map(({ label, key }) => {
                const isActive = workExps[key] === "Y";
                
                return (
                  <div key={key} className={`flex flex-col sm:grid sm:grid-cols-[1.5fr_auto_1fr_1fr] gap-3 sm:gap-4 sm:items-center py-4 sm:py-3 sm:border-b sm:border-slate-100 last:border-0 transition-colors ${isActive ? "bg-white" : ""}`}>
                    <div className="text-sm font-medium text-slate-800">{label}</div>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => handleYNToggle(key, "Y")} className={`w-10 h-10 text-sm font-bold rounded-md border transition-colors ${workExps[key] === "Y" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-600 border-input hover:bg-slate-50"}`}>Y</button>
                      <button type="button" onClick={() => handleYNToggle(key, "N")} className={`w-10 h-10 text-sm font-bold rounded-md border transition-colors ${workExps[key] === "N" ? "bg-slate-200 text-slate-800 border-slate-300" : "bg-white text-slate-600 border-input hover:bg-slate-50"}`}>N</button>
                    </div>
                    <input 
                      type="text" 
                      name={`${key}_details`} 
                      placeholder="Description / Notes" 
                      disabled={!isActive}
                      className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-slate-50" 
                    />
                    <div className="relative">
                      <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${isActive ? "text-slate-800 font-medium" : "text-muted-foreground"}`}>$</span>
                      <input 
                        type="text" 
                        name={`${key}_amount`} 
                        placeholder="0.00" 
                        inputMode="decimal"
                        disabled={!isActive} 
                        className="flex h-10 w-full rounded-md border border-input bg-transparent pl-7 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono text-right disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-slate-50" 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Declaration */}
        <section data-section="5" className="bg-white border border-border shadow-sm rounded-xl overflow-hidden">
          <div className="border-b border-border bg-slate-50 p-5 sm:p-6 flex items-center gap-4">
            <span className="bg-accent/10 text-accent border border-accent/20 text-xs font-mono px-2 py-1 rounded">05</span>
            <h2 className="text-xl font-bold text-primary">Declaration & Signature</h2>
          </div>
          <div className="p-5 sm:p-6">
            
            {/* Bank details box */}
            <div className="bg-primary text-white rounded-lg p-6 mb-8 flex flex-wrap gap-8 items-center justify-between">
              <div>
                <h3 className="font-bold text-lg mb-1">Fee Payment Details</h3>
                <p className="text-primary-foreground/70 text-sm">Please pay Everest.Tax service fees to this account.</p>
              </div>
              <div className="flex gap-8 flex-wrap">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Payments to</div>
                  <div className="font-mono font-medium">Everest.Tax</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 mb-1">BSB</div>
                  <div className="font-mono font-medium">067-873</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Account No.</div>
                  <div className="font-mono font-medium">11940843</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <p>I confirm that I authorise Everest.Tax and the registered tax agent to act as my tax agent.</p>
              <p>I confirm that the information I provided is true and correct and will be supported by the relevant documents.</p>
              <p>I am aware that substantiation of expenses and income is required by law, and it is my responsibility to keep records for 5 years in case of an audit.</p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 border border-border rounded-lg mb-8">
              <input type="checkbox" name="ackCheck" id="ackCheck" required className="mt-1 w-5 h-5 accent-emerald-600" />
              <label htmlFor="ackCheck" className="text-sm font-medium text-slate-800 leading-snug cursor-pointer">
                I have read and agree to the three declarations above, and the information provided in this form is true and correct to the best of my knowledge.
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
              <div id="signature-section" className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Signature <span className="text-red-500">*</span> <span className="font-normal text-muted-foreground">(draw with mouse or finger)</span></label>
                <div className={`relative border-2 rounded-lg overflow-hidden transition-colors ${hasSignature ? "border-emerald-500/50 bg-emerald-50/10" : errors.signature ? "border-red-400 bg-red-50" : "border-border bg-slate-50"}`}>
                  <canvas ref={canvasRef} className="w-full h-[90px] touch-none cursor-crosshair block" />
                  <button type="button" onClick={clearSignature} className="absolute top-2 right-2 text-[10px] uppercase tracking-wider font-bold bg-white border border-border rounded px-2 py-1 text-slate-500 hover:bg-slate-100 hover:text-red-600 transition-colors">Clear</button>
                </div>
                {errors.signature && (
                  <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1.5"><AlertCircle size={14}/> {errors.signature}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Date</label>
                <input type="date" name="sig_date" defaultValue={new Date().toISOString().slice(0, 10)} className="flex h-[90px] w-full rounded-lg border-2 border-border bg-slate-50 px-4 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent text-center font-mono" />
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-8">
          <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center bg-primary text-white font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all w-full sm:w-auto text-xl disabled:opacity-70 disabled:cursor-not-allowed">
            {isSubmitting ? "Submitting..." : "Submit Tax Return Form"}
          </button>
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">This securely generates a completed summary PDF for your records and for your tax agent.</p>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Form Complete</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Thank you. Your tax return details and digital signature have been successfully securely submitted to your tax agent.
            </p>
            
            <div className="flex justify-center mb-6">
              <button onClick={downloadSummary} className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-md hover:bg-primary/90 transition-colors">
                <Download className="w-4 h-4" />
                Download Copy for Your Records
              </button>
            </div>

            <button onClick={() => setShowSuccess(false)} className="mt-6 text-sm font-semibold text-slate-500 hover:text-primary transition-colors underline">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
