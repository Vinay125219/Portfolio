"use strict";

/*-----------------------------------*\
  #INTERACTIVE & DYNAMIC ELEMENTS
\*-----------------------------------*/

// Page Loading Progress Bar
window.addEventListener("load", function () {
  const loader = document.querySelector(".page-loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }
});

// Update progress during page load
window.addEventListener("DOMContentLoaded", function () {
  const loaderProgress = document.querySelector(".loader-progress");
  if (loaderProgress) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      loaderProgress.style.width = progress + "%";
    }, 100);
  }
});

// Scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");

      // Animate skill progress bars
      if (entry.target.classList.contains("skills-item")) {
        const progressBar = entry.target.querySelector(".skill-progress-fill");
        const counter = entry.target.querySelector(".counter");
        const targetWidth = progressBar.getAttribute("data-width");

        if (progressBar && targetWidth) {
          progressBar.style.setProperty("--target-width", targetWidth + "%");
          progressBar.classList.add("animated");
          progressBar.style.width = targetWidth + "%";

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
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));
});

// Counter animation function
function animateCounter(element, start, end, duration) {
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const currentValue = Math.floor(progress * (end - start) + start);
    element.textContent = currentValue + "%";

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// 3D Tilt Effect for Cards
document.addEventListener("DOMContentLoaded", function () {
  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
});

// Magnetic Button Effect
document.addEventListener("DOMContentLoaded", function () {
  const magneticBtns = document.querySelectorAll(".magnetic-btn");

  magneticBtns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px) scale(1)";
    });
  });
});

// Confetti Effect
function createConfetti() {
  const confettiCount = 50;
  const colors = [
    "#ff6b35",
    "#f7931e",
    "#ffd23f",
    "#06ffa5",
    "#1fb3d3",
    "#5d4037",
  ];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti confetti-piece";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 2 + "s";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Typing Animation Reset
function restartTypingAnimation() {
  const typingElement = document.querySelector(".typing-animation");
  if (typingElement) {
    typingElement.style.animation = "none";
    setTimeout(() => {
      typingElement.style.animation =
        "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite";
    }, 100);
  }
}

// Restart typing animation when About section is visited
document.addEventListener("DOMContentLoaded", function () {
  const aboutNavLink = document.querySelector("[data-nav-link]");
  if (aboutNavLink) {
    aboutNavLink.addEventListener("click", function () {
      if (this.innerHTML.toLowerCase() === "about") {
        setTimeout(restartTypingAnimation, 300);
      }
    });
  }
});

/*-----------------------------------*\
  #ORIGINAL FUNCTIONALITY
\*-----------------------------------*/

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

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
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

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

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

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
};

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

// Initialize EmailJS when the DOM is fully loaded
function initializeEmailJS() {
  // Check if EmailJS is loaded
  if (typeof emailjs !== "undefined") {
    // Initialize EmailJS with your public key
    emailjs.init("J5UvByUZnfxuRMFBl"); // Replace with your actual EmailJS public key
    console.log("EmailJS initialized successfully");
    return true;
  } else {
    console.error("EmailJS library not loaded");
    return false;
  }
}

// Try to initialize immediately if DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeEmailJS);
} else {
  // DOM is already loaded
  initializeEmailJS();
}

// Also try after a short delay to ensure EmailJS script is loaded
setTimeout(initializeEmailJS, 1000);

// Debug function to test EmailJS setup - You can call this in browser console
window.testEmailJS = function () {
  console.log("Testing EmailJS setup...");
  console.log("EmailJS available:", typeof emailjs !== "undefined");

  if (typeof emailjs !== "undefined") {
    console.log("✅ EmailJS is loaded successfully");
    console.log("Current configuration:");
    console.log("- Service ID: service_qwmzkkr");
    console.log("- Template ID: template_fnqxw49");
    console.log("- Public Key: J5UvByUZnfxuRMFBl");
    console.log("\nTo test, fill out the contact form and submit it.");
  } else {
    console.log("❌ EmailJS is not loaded. Check your internet connection.");
  }
};

// Enhanced form submission with real email functionality
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if EmailJS is available
    if (typeof emailjs === "undefined") {
      console.error(
        "EmailJS is not loaded. Please check your internet connection."
      );
      showFormErrorNotification({
        message: "Email service not available. Please try again later.",
      });
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Add submission metadata
    formObject.submissionTime = new Date().toISOString();
    formObject.userAgent = navigator.userAgent;
    formObject.referrer = document.referrer || "direct";
    formObject.submissionId =
      "form_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);

    // Store submission in localStorage (for backup/analytics)
    let submissions = JSON.parse(
      localStorage.getItem("portfolioSubmissions") || "[]"
    );
    submissions.unshift(formObject);
    if (submissions.length > 100) submissions = submissions.slice(0, 100);
    localStorage.setItem("portfolioSubmissions", JSON.stringify(submissions));

    // Show loading state
    const submitBtn = formBtn;
    const originalText = submitBtn.querySelector("span").textContent;
    const originalIcon = submitBtn.querySelector("ion-icon").name;

    submitBtn.querySelector("span").textContent = "Sending Email...";
    submitBtn.querySelector("ion-icon").name = "hourglass-outline";
    submitBtn.style.background = "var(--orange-yellow-crayola)";
    submitBtn.disabled = true;

    // Prepare email template parameters
    const templateParams = {
      from_name: formObject.fullname || "Anonymous",
      from_email: formObject.email || "No email provided",
      phone: formObject.phone || "Not provided",
      project_type: formObject["project-type"] || "Not specified",
      budget: formObject.budget || "Not specified",
      timeline: formObject.timeline || "Not specified",
      message: formObject.message || "No message provided",
      submission_id: formObject.submissionId,
      submission_time: new Date(formObject.submissionTime).toLocaleString(),
      user_agent: formObject.userAgent,
      referrer_source: formObject.referrer,
      newsletter_signup: formObject.newsletter ? "Yes" : "No",
    };

    // Send email using EmailJS
    emailjs.send("service_qwmzkkr", "template_fnqxw49", templateParams).then(
      function (response) {
        console.log("Email sent successfully!", response.status, response.text);

        // Show success state
        submitBtn.querySelector("span").textContent =
          "Email Sent Successfully!";
        submitBtn.querySelector("ion-icon").name = "checkmark-circle-outline";
        submitBtn.style.background =
          "linear-gradient(135deg, #10b981, #059669)";

        // Trigger confetti
        if (typeof createConfetti === "function") {
          createConfetti();
        }

        // Show success notification
        showFormSuccessNotification(
          formObject,
          "Email sent to vinay.sagar.btech@gmail.com!"
        );

        // Add XP for successful email submission
        if (typeof addXP === "function") {
          addXP(
            30,
            `Email sent successfully! Thanks ${
              formObject.fullname || "for reaching out"
            }! 📧`
          );
        }

        // Reset form after 4 seconds
        setTimeout(() => {
          form.reset();
          submitBtn.querySelector("span").textContent = originalText;
          submitBtn.querySelector("ion-icon").name = originalIcon;
          submitBtn.style.background = "";
          submitBtn.disabled = true;

          if (typeof showThankYouMessage === "function") {
            showThankYouMessage();
          }
        }, 4000);
      },
      function (error) {
        console.error("Email sending failed:", error);

        // Show error state
        submitBtn.querySelector("span").textContent =
          "Email Failed - Try Again";
        submitBtn.querySelector("ion-icon").name = "warning-outline";
        submitBtn.style.background =
          "linear-gradient(135deg, #ef4444, #dc2626)";

        // Show error notification
        showFormErrorNotification(error);

        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.querySelector("span").textContent = originalText;
          submitBtn.querySelector("ion-icon").name = originalIcon;
          submitBtn.style.background = "";
          submitBtn.disabled = false; // Re-enable for retry
        }, 3000);
      }
    );
  });
}

// Enhanced success notification function
function showFormSuccessNotification(formData, customMessage) {
  const notification = document.createElement("div");
  notification.className = "form-success-notification";
  notification.innerHTML = `
    <div class="success-content">
      <ion-icon name="checkmark-circle"></ion-icon>
      <div class="success-text">
        <h4>Email Sent Successfully!</h4>
        <p>${
          customMessage ||
          `Thanks ${
            formData.fullname || "for reaching out"
          }! I'll respond within 24 hours.`
        }</p>
        <small>Submission ID: ${formData.submissionId}</small>
      </div>
    </div>
  `;

  document.body.appendChild(notification);

  // Add styles if not already present
  if (!document.querySelector("#form-success-styles")) {
    const styles = document.createElement("style");
    styles.id = "form-success-styles";
    styles.textContent = `
      .form-success-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-gradient-jet);
        border: 2px solid #10b981;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
      }
      
      .form-success-notification.show {
        transform: translateX(0);
      }
      
      .form-error-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-gradient-jet);
        border: 2px solid #ef4444;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
      }
      
      .form-error-notification.show {
        transform: translateX(0);
      }
      
      .success-content, .error-content {
        display: flex;
        align-items: flex-start;
        gap: 15px;
        color: var(--white-2);
      }
      
      .success-content ion-icon {
        color: #10b981;
        font-size: 24px;
        flex-shrink: 0;
        margin-top: 2px;
      }
      
      .error-content ion-icon {
        color: #ef4444;
        font-size: 24px;
        flex-shrink: 0;
        margin-top: 2px;
      }
      
      .success-text h4, .error-text h4 {
        margin: 0 0 8px 0;
        font-size: 16px;
      }
      
      .success-text h4 {
        color: #10b981;
      }
      
      .error-text h4 {
        color: #ef4444;
      }
      
      .success-text p, .error-text p {
        margin: 0 0 8px 0;
        font-size: 14px;
        line-height: 1.4;
      }
      
      .success-text small, .error-text small {
        color: var(--light-gray-70);
        font-size: 11px;
      }
      
      @media (max-width: 580px) {
        .form-success-notification, .form-error-notification {
          top: 10px;
          left: 10px;
          right: 10px;
          max-width: none;
          transform: translateY(-100px);
        }
        
        .form-success-notification.show, .form-error-notification.show {
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(styles);
  }

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Remove notification after 6 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 6000);
}

// Error notification function
function showFormErrorNotification(error) {
  const notification = document.createElement("div");
  notification.className = "form-error-notification";
  notification.innerHTML = `
    <div class="error-content">
      <ion-icon name="warning-outline"></ion-icon>
      <div class="error-text">
        <h4>Email Sending Failed</h4>
        <p>There was an issue sending your message. Please try again or contact me directly.</p>
        <small>Error: ${error.text || "Network error"}</small>
      </div>
    </div>
  `;

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Thank you message function
function showThankYouMessage() {
  const messages = [
    "Looking forward to working together! 🚀",
    "Your message means a lot. Thank you! 🙏",
    "Excited about your project idea! 💡",
    "Thanks for considering me for your project! ✨",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  if (typeof addXP === "function") {
    addXP(10, randomMessage);
  }
}

// Function to scroll to contact section
function scrollToContact() {
  // Find the contact navigation link and click it
  const contactNavLink = document.querySelector('[data-nav-link="Contact"]') || 
                        Array.from(document.querySelectorAll('[data-nav-link]')).find(el => el.textContent.trim() === 'Contact');
  if (contactNavLink) {
    contactNavLink.click();

    // Add a highlight effect to the contact form
    setTimeout(() => {
      const contactForm = document.querySelector(".enhanced-form");
      if (contactForm) {
        contactForm.style.animation = "highlightForm 2s ease";

        // Add the animation to the CSS if not already present
        if (!document.querySelector("#contact-form-animation")) {
          const style = document.createElement("style");
          style.id = "contact-form-animation";
          style.textContent = `
            @keyframes highlightForm {
              0% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4); }
              50% { box-shadow: 0 0 0 10px rgba(255, 193, 7, 0.1); }
              100% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0); }
            }
          `;
          document.head.appendChild(style);
        }
      }

      // Scroll to the form
      contactForm.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  }
}

// Parallax effect for About Me section
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".interactive-about");
  if (aboutSection) {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.pageYOffset;
      const sectionTop = aboutSection.offsetTop;
      const sectionHeight = aboutSection.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (
        scrollPosition > sectionTop - windowHeight &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const parallaxValue = (scrollPosition - sectionTop) * 0.2;
        aboutSection.style.backgroundPosition = `center ${-parallaxValue}px`;
      }
    });
  }
});

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
