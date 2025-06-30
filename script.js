document.getElementById('step1Form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const category = document.getElementById('category').value;

  // Store data in local storage
  localStorage.setItem('clientName', name);
  localStorage.setItem('mainService', category);

  // Move to next page
  window.location.href = "subcategory.html";
});
