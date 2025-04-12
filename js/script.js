// Page flip navigation functionality

document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');
  let currentPage = 0;

  function showPage(index) {
    if (index < 0 || index >= pages.length) return;
    pages[currentPage].classList.remove('active');
    currentPage = index;
    pages[currentPage].classList.add('active');
  }

  prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
      showPage(currentPage - 1);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      showPage(currentPage + 1);
    }
  });

  // Swipe gesture support for mobile devices
  let touchStartX = null;
  let touchEndX = null;

  function handleGesture() {
    if (touchStartX === null || touchEndX === null) return;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 50) { // swipe threshold
      if (diffX > 0 && currentPage < pages.length - 1) {
        showPage(currentPage + 1);
      } else if (diffX < 0 && currentPage > 0) {
        showPage(currentPage - 1);
      }
    }
    touchStartX = null;
    touchEndX = null;
  }

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });
});
