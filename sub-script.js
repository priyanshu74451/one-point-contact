const subcategories = {
  "Quality": ["ISO 9001","IATE 16949","AS900/AS9120/AS9110","ISO22163(IRSI)","ISO13485","TL9000","VDA6.3","Coustomer specific"],
  "Sustainability": ["ISO 14001", "ISO 14064", "ISO 14020","ISO 14067","ISO 45001","ISO 50001","Fire Audits","Safety Audits","Electrical Saftey Audits","Sustainability Reporting"],
  "Lab": ["ISO 17025"],
  "Product Certification": ["CE","UL","S","Ecocert","ISI","Ecomark"],
  "Social Compliances":["BSCI","SEDEX","CTPAT","Technical Audits","Buyer Specific Compliances(Walmart,Puma,Decathlon etc)"],
  "Food Safety/GMP":["ISO 22000","FSSC 22000","BRC Food","BRC Packaging"],
  "Software and ITES":["ISO 27001","ISO 20000","SOC", 
"GDPR","HIPPA"] };

const name = localStorage.getItem('clientName');
const mainService = localStorage.getItem('mainService');

document.getElementById('selectedService').textContent = `Service: ${mainService}`;
const select = document.getElementById('subcategory');
subcategories[mainService].forEach(sub => {
  const opt = document.createElement('option');
  opt.value = sub;
  opt.textContent = sub;
  select.appendChild(opt);
});

document.getElementById('step2Form').addEventListener('submit', function(e) {
  e.preventDefault();

  const subcategory = document.getElementById('subcategory').value;
  const message = document.getElementById('message').value.trim();
  const phoneNumber = "917007293169"; // Replace with your WhatsApp number

  const finalMsg = `Hello, I'm ${name}. I’m interested in:\nMain Service: ${mainService}\nSubcategory: ${subcategory}\n\nMessage: ${message}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMsg)}`;

  window.open(whatsappURL, '_blank');
});
