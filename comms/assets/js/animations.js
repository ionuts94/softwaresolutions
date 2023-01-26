const sectionButtons = document.querySelectorAll('.section-button');

document.addEventListener('scroll', function animationsObserver() {
  sectionButtons.forEach((btn, index) => {
    const bounding = btn.getBoundingClientRect();
    if (bounding.bottom < window.innerHeight) {
      btn.style.animation = 'custom-fade-up 1s ease forwards';
      if (index === sectionButtons.length - 1) {
        document.removeEventListener('scroll', animationsObserver);
      }
    }
  })
})