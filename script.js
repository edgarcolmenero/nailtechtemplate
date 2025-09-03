// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const section = document.querySelector(targetID);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 60, // Offset for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Reveal animations on scroll
  const revealSections = document.querySelectorAll('section');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 100) {
        section.classList.add('revealed');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // ---- Square iframe fallback (optional) ----
(function () {
    const embed = document.querySelector('.booking-embed');
    if (!embed) return;
  
    const iframe = embed.querySelector('iframe');
    const fallbackBtn = embed.querySelector('.iframe-fallback');
  
    // If the iframe hasn't fired 'load' within 6s, show the fallback button
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      if (fallbackBtn) fallbackBtn.style.display = 'inline-block';
    }, 6000);
  
    iframe.addEventListener('load', () => {
      if (!timedOut) clearTimeout(timer);
    });
  })();
  
