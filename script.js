// Mobile Navigation Menu Toggle
const menuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function() {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("open");
    });
  });
}

// Smooth scrolling for anchor links (prevents Safari overflow-x:hidden click freeze bug)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return; // Skip if placeholder
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      try {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } catch (err) {
        // Fallback for older browsers
        targetElement.scrollIntoView(true);
      }
    }
  });
});

// Form Submit Handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting My Five Group. We will get back to you shortly.");
    this.reset();
  });
}