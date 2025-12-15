// Toggle Mobile Menu
const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form Submission
const form = document.getElementById('joinForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for joining us! We will contact you soon.');
  form.reset();
});