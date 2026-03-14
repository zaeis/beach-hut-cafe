// src/scripts/modal.js
document.body.style.overflow = 'hidden';
// Using a function to keep the code safe and clean
export function initModal() {
  const modal = document.getElementById('announcement-modal');
  const closeX = document.getElementById('close-modal');
  const closeBtn = document.getElementById('close-btn-main');
  const root = document.documentElement;

  // LOCK: Add the nuclear class if modal is showing
  if (modal && !modal.classList.contains('modal-hidden')) {
    root.classList.add('no-scroll');
  }

  function closeModal() {
    modal.classList.add('modal-hidden');
    sessionStorage.setItem('modalSeen', 'true');
    
    // UNLOCK: Remove the class to bring the scrollbar back
    root.classList.remove('no-scroll');
  }

  if (closeX) closeX.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
}

initModal();

// Function for Fade-in Effect
function initFadeIn() {
  const images = document.querySelectorAll('.responsive-img');
  
  const observerOptions = {
    threshold: 0.1 // Triggers when 10% of the image is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target); // Stop watching once it has faded in
      }
    });
  }, observerOptions);

  images.forEach(img => {
    img.classList.add('fade-in'); // Add the starting class
    observer.observe(img); // Start watching the image
  });
}

// Run the fade-in logic
initFadeIn();