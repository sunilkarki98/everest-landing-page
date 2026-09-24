const http = require('http');

const samplePdfBase64 = "JVBERi0xLjEKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvTWVkaWFCb3hbMCAwIDYxMiA3OTJdL1BhcmVudCAyIDAgUj4+CmVuZG9iagp4cmVmCjAgNAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCnRyYWlsZXIKPDwvU2l6ZSA0L1Jvb3QgMSAwIFI+PgpzdGFydHhyZWYKMTkwCiUlRU9GCg==";

const sampleData = {
  name: "Final Integration Test",
  tfn: "999 888 777",
  occupation: "Software Engineer",
  dob: "1990-01-15",
  visa_subclass: "482",
  marital_status: "Married",
  dependents: "2",
  medicareExempt: "N",
  address: "100 Collins St, Melbourne VIC 3000",
  phone: "0412345678",
  email: "test@example.com",
  contactMethod: "Email",
  bank_name: "CommBank",
  refund_acct_name: "Final Test",
  bsb: "062-000",
  account_number: "12345678",
  exp_car_details: "Between worksites",
  exp_car_amount: "1200",
  exp_uniform_details: "Hi-vis gear",
  exp_uniform_amount: "350",
  ackCheck: "on",
  sig_date: new Date().toISOString().slice(0, 10),
  pdfBase64: samplePdfBase64
};

const payload = JSON.stringify(sampleData);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/tax-submit',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
  },
};

console.log("🚀 Final integration test → POST /api/tax-submit");
console.log("   Testing: Drive + Sheets + Email (all independent)\n");

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(`📡 Status: ${res.statusCode}`);
    console.log(`📦 Response: ${data}`);
    if (res.statusCode === 200) {
      console.log("\n✅ SUCCESS — Check:");
      console.log("   1. Google Sheet for new row with PDF_Link");
      console.log("   2. Google Drive for uploaded PDF");
      console.log("   3. admin@eevsgroup.com inbox for email");
      console.log("   4. tax.everest@yahoo.com inbox for email");
    } else {
      console.log("\n❌ FAILED — check server logs");
    }
  });
});

req.on('error', (err) => console.error("Network error:", err.message));
req.write(payload);
req.end();
