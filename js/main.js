

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
    
    // Scrolling Animation
    document.addEventListener('DOMContentLoaded', function() {
      // Header scroll effect
      const header = document.getElementById('header');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
      
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Close mobile menu if open
          navLinks.classList.remove('active');
          menuToggle.querySelector('i').classList.add('fa-bars');
          menuToggle.querySelector('i').classList.remove('fa-times');
          
          // Scroll to target
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Animation on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.animate-slideUp').forEach(el => {
        observer.observe(el);
      });
      
      // Add floating icons randomly
      const heroSection = document.querySelector('.hero');
      const icons = ['fas fa-code', 'fas fa-camera', 'fas fa-database', 'fas fa-mobile-alt', 'fas fa-lightbulb', 'fas fa-cogs'];
      
      for (let i = 0; i < 8; i++) {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        const iconClass = icons[Math.floor(Math.random() * icons.length)];
        icon.innerHTML = `<i class="${iconClass}"></i>`;
        
        // Random position and animation delay
        icon.style.top = `${Math.random() * 80 + 10}%`;
        icon.style.left = `${Math.random() * 80 + 10}%`;
        icon.style.animationDelay = `${Math.random() * 5}s`;
        icon.style.fontSize = `${Math.random() * 1 + 1}rem`;
        
        heroSection.appendChild(icon);
      }
      
      // Contact form handling
      const contactForm = document.getElementById('contactForm');
      
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Basic form validation
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
          if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
          }
          
          // Form submission would go here
          alert('Thank you for your message! I will get back to you soon.');
          contactForm.reset();
        });
      }
      
      // Create extra floating elements for animated background effect
      const bodyElement = document.body;
      
      for (let i = 0; i < 20; i++) {
        const floatingDot = document.createElement('div');
        floatingDot.className = 'floating-icon';
        floatingDot.style.position = 'fixed';
        floatingDot.style.width = `${Math.random() * a + 3}px`;
        floatingDot.style.height = floatingDot.style.width;
        floatingDot.style.background = 'var(--neon-purple)';
        floatingDot.style.borderRadius = '50%';
        floatingDot.style.opacity = `${Math.random() * 0.2}`;
        floatingDot.style.top = `${Math.random() * 100}%`;
        floatingDot.style.left = `${Math.random() * 100}%`;
        floatingDot.style.filter = 'blur(1px)';
        floatingDot.style.animationDuration = `${Math.random() * 10 + 10}s`;
        floatingDot.style.animationDelay = `${Math.random() * 5}s`;
        floatingDot.style.zIndex = '-1';
        
        bodyElement.appendChild(floatingDot);
      }
    });
