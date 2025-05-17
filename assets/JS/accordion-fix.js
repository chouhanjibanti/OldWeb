// Direct accordion fix script for FAQ sections
document.addEventListener('DOMContentLoaded', function() {
  // Longer delay to ensure all Bootstrap components are fully initialized
  setTimeout(function() {
    console.log("Accordion fix running");
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      // Instead of replacing buttons (which might lose event listeners),
      // add our event listener directly with capturing phase
      button.addEventListener('click', function(e) {
        console.log("Button clicked:", this, e);
        
        // Get the target collapse element
        const targetId = this.getAttribute('data-bs-target');
        const target = document.querySelector(targetId);
        
        if (target) {
          console.log("Target found:", target);
          // Manually toggle the target's classes
          if (target.classList.contains('show')) {
            console.log("Closing accordion item");
            target.classList.remove('show');
            this.classList.add('collapsed');
            this.setAttribute('aria-expanded', 'false');
          } else {
            console.log("Opening accordion item");
            // Close other open items first
            const parent = this.closest('.accordion');
            if (parent) {
              parent.querySelectorAll('.accordion-collapse.show').forEach(item => {
                item.classList.remove('show');
              });
              parent.querySelectorAll('.accordion-button:not(.collapsed)').forEach(btn => {
                btn.classList.add('collapsed');
                btn.setAttribute('aria-expanded', 'false');
              });
            }
            
            // Open this item
            target.classList.add('show');
            this.classList.remove('collapsed');
            this.setAttribute('aria-expanded', 'true');
          }
          
          // Prevent default Bootstrap behavior
          e.preventDefault();
          e.stopPropagation();
          
          // Return false to prevent other handlers
          return false;
        }
      }, true); // Use capture phase to run before Bootstrap's handlers
    });
    
    // Also handle any direct clicks on the accordion headers (in case buttons aren't catching events)
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', function(e) {
        // Find the button inside this header
        const button = this.querySelector('.accordion-button');
        if (button) {
          // Trigger a click on the button
          setTimeout(() => {
            button.click();
          }, 0);
          
          // Prevent default behavior
          e.preventDefault();
          e.stopPropagation();
        }
      }, true);
    });
  }, 500); // Longer delay to ensure Bootstrap is fully initialized
}); 