'use strict';

/*-----------------------------------*\
  #INTERACTIVE & DYNAMIC ELEMENTS
\*-----------------------------------*/

// Page Loading Progress Bar
window.addEventListener('load', function() {
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000);
  }
});

// Update progress during page load
window.addEventListener('DOMContentLoaded', function() {
  const loaderProgress = document.querySelector('.loader-progress');
  if (loaderProgress) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      loaderProgress.style.width = progress + '%';
    }, 100);
  }
});

// Scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      
      // Animate skill progress bars
      if (entry.target.classList.contains('skills-item')) {
        const progressBar = entry.target.querySelector('.skill-progress-fill');
        const counter = entry.target.querySelector('.counter');
        const targetWidth = progressBar.getAttribute('data-width');
        
        if (progressBar && targetWidth) {
          progressBar.style.setProperty('--target-width', targetWidth + '%');
          progressBar.classList.add('animated');
          progressBar.style.width = targetWidth + '%';
          
          // Animate counter
          if (counter) {
            animateCounter(counter, 0, parseInt(targetWidth), 2000);
          }
        }
      }
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
});

// Counter animation function
function animateCounter(element, start, end, duration) {
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const currentValue = Math.floor(progress * (end - start) + start);
    element.textContent = currentValue + '%';
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}

// 3D Tilt Effect for Cards
document.addEventListener('DOMContentLoaded', function() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
});

// Magnetic Button Effect
document.addEventListener('DOMContentLoaded', function() {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px) scale(1)';
    });
  });
});

// Confetti Effect
function createConfetti() {
  const confettiCount = 50;
  const colors = ['#ff6b35', '#f7931e', '#ffd23f', '#06ffa5', '#1fb3d3', '#5d4037'];
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Typing Animation Reset
function restartTypingAnimation() {
  const typingElement = document.querySelector('.typing-animation');
  if (typingElement) {
    typingElement.style.animation = 'none';
    setTimeout(() => {
      typingElement.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
    }, 100);
  }
}

// Restart typing animation when About section is visited
document.addEventListener('DOMContentLoaded', function() {
  const aboutNavLink = document.querySelector('[data-nav-link]');
  if (aboutNavLink) {
    aboutNavLink.addEventListener('click', function() {
      if (this.innerHTML.toLowerCase() === 'about') {
        setTimeout(restartTypingAnimation, 300);
      }
    });
  }
});

/*-----------------------------------*\
  #ORIGINAL FUNCTIONALITY
\*-----------------------------------*/



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Enhanced form submission with confetti
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success message
    const originalText = formBtn.querySelector('span').textContent;
    formBtn.querySelector('span').textContent = 'Message Sent!';
    formBtn.style.background = 'var(--bg-gradient-green-1)';
    
    // Trigger confetti
    createConfetti();
    
    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      formBtn.querySelector('span').textContent = originalText;
      formBtn.style.background = '';
      formBtn.setAttribute('disabled', '');
    }, 3000);
  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}