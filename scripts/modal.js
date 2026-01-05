const openBtn = document.getElementById('openModal');
const modal = document.getElementById('signupModal');
const closeOverlay = document.getElementById('closeModal');
const closeBtn = document.getElementById('modalCloseBtn');
const form = document.getElementById('signupForm');
const thankYou = document.getElementById('thankYouMessage');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
});

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');

  // Reset modal state
  form.hidden = false;
  thankYou.hidden = true;
  form.reset();
}

closeOverlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('is-hidden');
  thankYou.hidden = false;
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
