const subcategories = {
  "ISO Certification": ["ISO 9001 – Quality Management", "ISO 14001 – Environmental Management", "ISO 27001 – Information Security"],
  "Audit Services": ["Internal Audit", "Financial Audit", "Compliance Audit"],
  "Training & Workshops": ["Employee Skill Training", "ISO Awareness Training", "Audit Training"]
};

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
