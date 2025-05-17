// Direct implementation fix for Bootstrap accordion
window.addEventListener('load', function() {
  console.log("Direct accordion fix initializing...");
  
  // Add direct click handlers to buttons
  document.querySelectorAll('.accordion-button').forEach(button => {
    // Remove existing listeners by cloning
    const clone = button.cloneNode(true);
    button.parentNode.replaceChild(clone, button);
    
    // Add direct handler
    clone.onclick = function(e) {
      // Cancel events
      e.preventDefault();
      e.stopPropagation();
      
      // Get the target collapse element
      const targetId = this.getAttribute('data-bs-target');
      const target = document.querySelector(targetId);
      
      if (target) {
        // Check if this item is currently open
        const isCurrentlyOpen = target.classList.contains('show');
        
        // Simply toggle the item's state
        if (isCurrentlyOpen) {
          // If open, close it
          target.classList.remove('show');
          target.style.display = 'none';
          this.classList.add('collapsed');
          this.setAttribute('aria-expanded', 'false');
        } else {
          // If closed, open it
          target.classList.add('show');
          target.style.display = 'block';
          target.style.height = 'auto';
          target.style.opacity = '1';
          this.classList.remove('collapsed');
          this.setAttribute('aria-expanded', 'true');
        }
      }
      
      return false;
    };
  });
  
  // Make sure all accordions have proper ARIA attributes
  document.querySelectorAll('.accordion-collapse').forEach(collapse => {
    // Make sure it correctly reflects its visibility
    if (collapse.classList.contains('show')) {
      const buttonId = collapse.getAttribute('aria-labelledby');
      if (buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
          button.classList.remove('collapsed');
          button.setAttribute('aria-expanded', 'true');
        }
      }
    }
  });
  
  console.log("Direct accordion fix applied!");
}); 