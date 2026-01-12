const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.style.display = 'block';
  contactForm.reset();

  setTimeout(() => {
    formMessage.style.display = 'none';
  }, 3000);
});