import { 
  BriefcaseBusiness, Heart, Scale, GraduationCap, 
  Landmark, BookOpen, UserCheck, ShieldCheck, HeartPulse, 
  Calculator, ClipboardCheck, Building2, FileText
} from "lucide-react";
import React from "react";

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  overview: string;
  keyBenefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const migrationServices: ServiceDetail[] = [
  {
    id: "student-visa",
    title: "Student Visa (Subclass 500)",
    description: "Expert assistance with applying for, renewing, or transitioning your Australian Student Visa.",
    icon: FileText,
    overview: "Navigating the Student Visa (Subclass 500) process requires meticulous attention to detail, particularly regarding the Genuine Temporary Entrant (GTE) or Genuine Student (GS) requirement. Our Registered Migration Agents ensure your application is decision-ready.",
    keyBenefits: [
      "Comprehensive GTE/GS statement drafting",
      "Assistance with CoE (Confirmation of Enrolment) processing",
      "Adding dependents/spouses to your visa",
      "Health cover (OSHC) arrangement"
    ],
    processSteps: [
      { title: "Consultation & Document Checklist", desc: "Review your specific situation and provide a tailored list of required documents." },
      { title: "GTE/GS Preparation", desc: "Draft and refine a compelling Genuine Student statement." },
      { title: "Lodgement", desc: "Submit the visa application and liaise with the Department of Home Affairs." }
    ],
    faqs: [
      { q: "Can I work on a Student Visa?", a: "Yes, currently student visa holders can work up to 48 hours per fortnight during the semester and unlimited hours during scheduled breaks." },
      { q: "What is a GS statement?", a: "The Genuine Student requirement is a written statement proving your intention to enter Australia temporarily for the purpose of study." }
    ]
  },
  {
    id: "skilled-migration",
    title: "Skilled Migration (PR)",
    description: "Pathways for skilled workers to live and work in Australia permanently (Subclass 189, 190, 491).",
    icon: BriefcaseBusiness,
    overview: "Australia's General Skilled Migration (GSM) program is highly competitive. We calculate your points, identify the optimal visa subclass (189, 190, or 491), and navigate the complex SkillSelect system to maximize your chances of securing Permanent Residency.",
    keyBenefits: [
      "Accurate Points Test calculation",
      "State Sponsorship (190/491) application support",
      "Expression of Interest (EOI) strategic lodgement",
      "Skills assessment coordination"
    ],
    processSteps: [
      { title: "Skills Assessment", desc: "Obtain a positive assessment from the relevant Australian authority." },
      { title: "EOI Lodgement", desc: "Submit your Expression of Interest via SkillSelect." },
      { title: "Visa Application", desc: "Apply for the visa within 60 days of receiving an Invitation to Apply (ITA)." }
    ],
    faqs: [
      { q: "How many points do I need?", a: "While the minimum is 65 points, the competitive threshold is often 80-90+ depending on your occupation." },
      { q: "What is state sponsorship?", a: "A Subclass 190 or 491 visa where an Australian state nominates you, providing extra points in exchange for your commitment to live there." }
    ]
  },
  {
    id: "partner-visa",
    title: "Family & Partner Visas",
    description: "Reunite with your family members or bring your spouse to Australia with expert guidance.",
    icon: Heart,
    overview: "Partner and family visas are among the most heavily scrutinized applications by the Department of Home Affairs. We help you build an undeniable portfolio of evidence to prove the genuine and continuing nature of your relationship.",
    keyBenefits: [
      "Subclass 820/801 and 309/100 applications",
      "Evidence compilation and formatting",
      "Parent and Child visa processing",
      "De facto relationship registration advice"
    ],
    processSteps: [
      { title: "Relationship Evidence Review", desc: "Audit your financial, social, and household evidence." },
      { title: "Statutory Declarations", desc: "Draft robust applicant and sponsor statements." },
      { title: "Two-Stage Lodgement", desc: "Lodge the temporary and permanent stages concurrently." }
    ],
    faqs: [
      { q: "Do we need to be married?", a: "No, de facto couples are eligible, but you generally need to prove 12 months of living together unless your relationship is registered." },
      { q: "How long does a Partner Visa take?", a: "Processing times can range from 12 to 24 months, but onshore applicants typically receive a Bridging Visa in the meantime." }
    ]
  },
  {
    id: "visa-extensions",
    title: "PSW/TR (485)",
    description: "Transition from a Student Visa to a Temporary Graduate Visa (Subclass 485).",
    icon: ShieldCheck,
    overview: "The Temporary Graduate visa (subclass 485) allows international students to live, study and work in Australia after finishing their studies. We ensure you meet the stringent application deadlines and requirements.",
    keyBenefits: [
      "Post-Study Work stream applications",
      "Graduate Work stream processing",
      "Subsequent entrant applications",
      "Migration pathway planning post-485"
    ],
    processSteps: [
      { title: "Eligibility Check", desc: "Ensure your course meets the Australian Study Requirement." },
      { title: "English & AFP Checks", desc: "Organize English test scores and Federal Police checks." },
      { title: "Lodgement", desc: "Apply within 6 months of course completion." }
    ],
    faqs: [
      { q: "When must I apply?", a: "You must apply within 6 months of the date of your course completion (not your graduation date)." },
      { q: "Do I need a skills assessment?", a: "The Post-Study Work stream does not require a skills assessment, but the Graduate Work stream does." }
    ]
  },
  {
    id: "appeals",
    title: "ART Appeals",
    description: "Professional representation for visa refusals and cancellations at the Tribunal.",
    icon: Scale,
    overview: "Has your visa been refused or cancelled? You may have the right to appeal to the Administrative Review Tribunal (ART). Our senior migration agents provide aggressive representation to overturn negative decisions.",
    keyBenefits: [
      "Immediate assessment of appeal prospects",
      "Preparation of comprehensive legal submissions",
      "Hearing representation",
      "Bridging visa reinstatement"
    ],
    processSteps: [
      { title: "Decision Review", desc: "Analyze the refusal letter and identify legal errors." },
      { title: "Tribunal Lodgement", desc: "Lodge the appeal within the strict 21-day timeframe." },
      { title: "Hearing Preparation", desc: "Conduct mock hearings and prepare evidence for the Member." }
    ],
    faqs: [
      { q: "How long do I have to appeal?", a: "Strictly 21 days for most onshore refusals. Miss this deadline, and you lose your right to appeal." },
      { q: "Can I stay in Australia during the appeal?", a: "Yes, you will generally be granted a Bridging Visa that allows you to remain lawfully in Australia until the ART makes a decision." }
    ]
  },
  {
    id: "citizenship",
    title: "Citizenship Applications",
    description: "Complete support for acquiring Australian Citizenship.",
    icon: Landmark,
    overview: "Becoming an Australian citizen is the final step in your migration journey. We assist eligible permanent residents with their citizenship applications, ensuring all residency and character requirements are perfectly documented.",
    keyBenefits: [
      "Residency calculator checks",
      "Character requirement review",
      "Application lodgement",
      "Interview preparation guidance"
    ],
    processSteps: [
      { title: "Eligibility Check", desc: "Confirm you meet the 4-year residency requirement." },
      { title: "Lodgement", desc: "Compile and submit identity and character documents." },
      { title: "Citizenship Test", desc: "Attend the interview and pass the citizenship test." }
    ],
    faqs: [
      { q: "Can I leave Australia while waiting?", a: "Yes, but you must have a valid travel facility on your permanent visa to return." }
    ]
  },
  {
    id: "gte-compliance",
    title: "GTE & Visa Compliance",
    description: "Expert guidance in preparing GTE statements and adhering to visa conditions.",
    icon: ShieldCheck,
    overview: "Maintaining your visa status is just as important as obtaining it. We provide standalone support for drafting Genuine Temporary Entrant (GTE) or Genuine Student (GS) statements and offer compliance advice to prevent cancellations.",
    keyBenefits: [
      "Custom GTE/GS statement drafting",
      "Response to s56 (Request for Information)",
      "Condition 8105 (Work limitation) advice",
      "Course change (Standard 7) compliance"
    ],
    processSteps: [
      { title: "Situation Analysis", desc: "Review your academic progression or compliance issue." },
      { title: "Document Drafting", desc: "Draft legally sound responses or statements." },
      { title: "Submission", desc: "Submit directly to the Department or your education provider." }
    ],
    faqs: [
      { q: "What happens if I breach a condition?", a: "Your visa may be subject to cancellation. It is critical to seek professional advice immediately." }
    ]
  },
  {
    id: "skill-assessment-migration",
    title: "Skill Assessment",
    description: "Assistance with obtaining positive skill assessments for migration purposes.",
    icon: ClipboardCheck,
    overview: "A positive skill assessment is the prerequisite for all skilled migration visas. We manage the entire complex documentation process for assessing bodies like VETASSESS, TRA, ACS, and Engineers Australia.",
    keyBenefits: [
      "Document auditing and formatting",
      "RPL (Recognition of Prior Learning) guidance",
      "Direct liaison with assessing bodies",
      "Fast-track processing requests"
    ],
    processSteps: [
      { title: "Authority Identification", desc: "Identify the correct assessing body for your ANZSCO code." },
      { title: "Evidence Compilation", desc: "Gather payslips, tax returns, and reference letters." },
      { title: "Submission", desc: "Lodge the assessment and handle any requests for further information (RFI)." }
    ],
    faqs: [
      { q: "How long does it take?", a: "It ranges from 4 weeks to 4 months, depending on the authority and whether you use fast-track options." }
    ]
  }
];

export const studyServices: ServiceDetail[] = [
  {
    id: "university-admissions",
    title: "University & College Admissions",
    description: "End-to-end support for applying to Australia's top universities and vocational colleges.",
    icon: Landmark,
    overview: "Choosing the right institution is the foundation of your Australian journey. We partner with hundreds of universities and colleges across Australia, offering you priority processing and waived application fees.",
    keyBenefits: [
      "Access to Group of Eight (Go8) universities",
      "Application fee waivers",
      "Offer letter expedition",
      "RPL (Recognition of Prior Learning) credits"
    ],
    processSteps: [
      { title: "Course Matching", desc: "Align your academic background with suitable institutions." },
      { title: "Document Certification", desc: "Verify and certify your academic transcripts." },
      { title: "Direct Lodgement", desc: "Submit applications directly through our university portals." }
    ],
    faqs: [
      { q: "Is there a fee for your admission services?", a: "No, our admission services are completely free for international students as we are funded by the universities." },
      { q: "How long does it take to get an Offer Letter?", a: "Typically 1-2 weeks, but our priority partnerships often result in 48-hour turnarounds." }
    ]
  },
  {
    id: "scholarship",
    title: "Scholarship Assistance",
    description: "Identify and apply for merit-based and regional scholarships to reduce your tuition fees.",
    icon: GraduationCap,
    overview: "Australian education is an investment. We help you access millions of dollars in available scholarships, grants, and bursaries specifically designed for international students.",
    keyBenefits: [
      "Up to 50% tuition fee reductions",
      "Destination Australia scholarships",
      "Vice-Chancellor merit scholarships",
      "Automated scholarship matching"
    ],
    processSteps: [
      { title: "Profile Analysis", desc: "Assess your GPA and extracurriculars for eligibility." },
      { title: "Statement of Purpose", desc: "Draft compelling scholarship essays and SOPs." },
      { title: "Application Lodgement", desc: "Submit concurrent applications to multiple university scholarship pools." }
    ],
    faqs: [
      { q: "Do I need top grades to get a scholarship?", a: "Not always. Many regional universities offer guaranteed 15-25% scholarships simply for applying." }
    ]
  },
  {
    id: "counselling",
    title: "Career & Study Counselling",
    description: "Unsure what to study? Let our expert counselors map your education to your career goals.",
    icon: UserCheck,
    overview: "Your choice of course dictates your PR eligibility down the line. Our counselors are uniquely trained in both education and migration pathways, ensuring your study plan aligns perfectly with Australia's skilled occupation lists.",
    keyBenefits: [
      "PR pathway mapping",
      "Course-to-career alignment",
      "Budget planning and cost analysis",
      "City and campus selection"
    ],
    processSteps: [
      { title: "Discovery Session", desc: "A 1-on-1 consultation to understand your long-term goals." },
      { title: "Pathway Mapping", desc: "Presentation of 3 tailored study-to-migration pathways." },
      { title: "Action Plan", desc: "A concrete timeline for tests, admissions, and visa lodgement." }
    ],
    faqs: [
      { q: "Can I change my course later?", a: "Yes, but there are strict visa rules (Standard 7) regarding changing providers within the first 6 months of your principal course." }
    ]
  },
  {
    id: "pte-preparation",
    title: "PTE Preparation",
    description: "Comprehensive coaching for Pearson Test of English (PTE) success.",
    icon: BookOpen,
    overview: "Our structured PTE preparation classes are designed to help you achieve your target score efficiently. We focus on test strategies, time management, and extensive practice.",
    keyBenefits: [
      "Small class sizes for personalized attention",
      "Mock tests with AI scoring feedback",
      "Flexible timetable (morning/evening)",
      "Targeted grammar and pronunciation coaching"
    ],
    processSteps: [
      { title: "Diagnostic Test", desc: "Assess your current English level to tailor the program." },
      { title: "Intensive Coaching", desc: "Focus on speaking, writing, reading, and listening modules." },
      { title: "Mock Exams", desc: "Simulate the real test environment to build confidence." }
    ],
    faqs: [
      { q: "How long does the course take?", a: "Most students achieve their goals within 4-6 weeks of intensive coaching." }
    ]
  },
  {
    id: "ielts-preparation",
    title: "IELTS Preparation",
    description: "Targeted training to achieve your desired IELTS band score.",
    icon: BookOpen,
    overview: "Whether you need IELTS for university admission or migration, our expert tutors provide the strategies needed to conquer all four test components.",
    keyBenefits: [
      "Experienced IELTS examiners as tutors",
      "Focus on Academic and General Training",
      "Weekly writing assessments with detailed feedback",
      "Extensive library of past papers"
    ],
    processSteps: [
      { title: "Initial Assessment", desc: "Identify your weak areas across the four bands." },
      { title: "Skill Development", desc: "Learn specific techniques for the IELTS format." },
      { title: "Final Review", desc: "Complete full-length practice tests under timed conditions." }
    ],
    faqs: [
      { q: "What band score do I need?", a: "It depends on your goal. Student visas usually require 5.5-6.0, while skilled migration often requires 7.0 or 8.0." }
    ]
  },
  {
    id: "professional-year",
    title: "Professional Year (PY)",
    description: "Enhance your employability and earn extra migration points with PY programs.",
    icon: BriefcaseBusiness,
    overview: "The Professional Year Program bridges the gap between full-time study and professional employment in Australia. It's specifically designed for IT, Engineering, and Accounting graduates.",
    keyBenefits: [
      "Earn 5 extra points for Skilled Migration",
      "Guaranteed internship placement in an Australian company",
      "Networking opportunities with industry professionals",
      "Resume and interview preparation"
    ],
    processSteps: [
      { title: "Eligibility Check", desc: "Ensure you have completed a relevant degree and hold a 485 visa." },
      { title: "Provider Selection", desc: "Choose from top PY providers (e.g., Navitas, Performance Education)." },
      { title: "Internship & Graduation", desc: "Complete the coursework and 12-week internship." }
    ],
    faqs: [
      { q: "Who is eligible for a PY?", a: "Graduates with degrees in Accounting, IT, or Engineering who hold a subclass 485 visa." }
    ]
  }
];

export const otherServices: ServiceDetail[] = [
  {
    id: "oshc",
    title: "Health Insurance (OSHC & OVHC)",
    description: "Mandatory health cover secured at competitive rates from major Australian providers.",
    icon: HeartPulse,
    overview: "Overseas Student Health Cover (OSHC) is a mandatory requirement for your Student Visa. We partner with Bupa, Medibank, NIB, and Allianz to instantly generate your policy certificate at no extra cost.",
    keyBenefits: [
      "Instant policy generation for visa lodgement",
      "Couples and Family cover options",
      "Easy upgrades and extensions",
      "Claims assistance"
    ],
    processSteps: [
      { title: "Quote Generation", desc: "Compare prices across all major Australian health funds." },
      { title: "Purchase & Issuance", desc: "Securely pay and receive your certificate instantly." },
      { title: "Visa Integration", desc: "Attach the policy directly to your visa application." }
    ],
    faqs: [
      { q: "Is it cheaper to buy through you?", a: "We offer the exact same retail price as the providers, but we save you the administrative hassle." }
    ]
  },
  {
    id: "taxation",
    title: "Taxation & Accounting",
    description: "Tax File Number (TFN), ABN setup, and annual tax return filing for international students.",
    icon: Calculator,
    overview: "Working in Australia means dealing with the Australian Taxation Office (ATO). Our partnered accountants ensure you are compliant while maximizing your legal tax refunds.",
    keyBenefits: [
      "Free TFN Registration",
      "ABN setup for freelancers/contractors",
      "Annual tax return filing",
      "Superannuation (DASP) claims"
    ],
    processSteps: [
      { title: "TFN/ABN Setup", desc: "Apply for your tax identifiers immediately upon arrival." },
      { title: "Record Keeping", desc: "Provide guidance on what work-related expenses you can claim." },
      { title: "Filing", desc: "Lodge your return between July and October every year." }
    ],
    faqs: [
      { q: "Do international students pay tax?", a: "Yes, if you stay for more than 6 months you are generally considered an Australian resident for tax purposes." }
    ]
  },
  {
    id: "skill-assessment",
    title: "Professional Skill Assessments",
    description: "Guidance through the rigorous documentation process for VETASSESS, TRA, ACS, etc.",
    icon: ClipboardCheck,
    overview: "Before applying for skilled migration, you must prove your qualifications meet Australian standards. This is often the hardest part of the migration journey. We manage the entire process.",
    keyBenefits: [
      "RPL (Recognition of Prior Learning) guidance",
      "Document auditing and formatting",
      "Direct liaison with assessing bodies",
      "Fast-track processing requests"
    ],
    processSteps: [
      { title: "Authority Identification", desc: "Identify the correct assessing body for your ANZSCO code." },
      { title: "Evidence Compilation", desc: "Gather payslips, tax returns, and reference letters." },
      { title: "Submission", desc: "Lodge the assessment and handle any requests for further information (RFI)." }
    ],
    faqs: [
      { q: "How long does a skill assessment take?", a: "It ranges from 4 weeks to 4 months, depending on the authority and whether you use fast-track options." }
    ]
  },
  {
    id: "business-setup",
    title: "Business Setup & Advisory",
    description: "Strategic guidance on corporate structures and ASIC compliance for entrepreneurial migrants.",
    icon: Building2,
    overview: "Looking to start your own business or invest in Australia? Our business advisory team provides end-to-end setup for international entrepreneurs, ensuring full legal and visa compliance.",
    keyBenefits: [
      "Company registration (ASIC)",
      "Business plan drafting for visa purposes",
      "Market research and feasibility",
      "Business visa pathway planning"
    ],
    processSteps: [
      { title: "Consultation", desc: "Discuss your business model and visa implications." },
      { title: "Registration", desc: "Register your Pty Ltd company, ABN, and TFN." },
      { title: "Ongoing Support", desc: "Provide quarterly BAS (Business Activity Statement) support." }
    ],
    faqs: [
      { q: "Can I start a business on a student visa?", a: "Yes, you can register an ABN and run a business, but you are still subject to the 48-hour per fortnight work limitation." }
    ]
  }
];
