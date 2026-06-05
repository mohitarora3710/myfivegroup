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

// Active page navigation highlighting
const currentPath = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPath || (currentPath === "index.html" && href === "./")) {
    link.style.color = "#00D4FF";
    link.style.fontWeight = "600";
    link.classList.add("active-nav");
  }
});

// Universal Contact Form Submit Handler
const contactForms = document.querySelectorAll("form[id^='contactForm']");
contactForms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameInput = this.querySelector("[name='name']");
    const name = nameInput ? nameInput.value : "there";
    alert(`Thank you, ${name}! Your message has been received. Our team at My Five Group will get back to you shortly.`);
    this.reset();
  });
});

// Careers Form Handler
const careerForm = document.getElementById("careerForm");
if (careerForm) {
  careerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.querySelector("[name='name']").value;
    const role = this.querySelector("[name='role']").value;
    alert(`Thank you, ${name}! Your application for the ${role} position has been successfully submitted. We will review your profile and contact you soon.`);
    this.reset();
  });
}