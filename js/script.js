// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all sections in the main content to animate
  const animatedSections = document.querySelectorAll('main section');

  // Define observer options: using the viewport and a threshold of 10%
  const options = {
    root: null,
    threshold: 0.1
  };

  // Create an IntersectionObserver to detect when sections come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When the section enters the viewport, add the 'in-view' class to trigger CSS animations
        entry.target.classList.add('in-view');
      } else {
        // When the section leaves the viewport, remove the 'in-view' class
        entry.target.classList.remove('in-view');
      }
    });
  }, options);

  // Observe each section for visibility changes
  animatedSections.forEach(section => observer.observe(section));
});
