"use strict";

/*-----------------------------------*\
  #ADVANCED INTERACTIVE FEATURES
\*-----------------------------------*/

// Motivational Quotes Database
const motivationalQuotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote:
      "You learn more from failure than from success. Don't let it stop you.",
    author: "Unknown",
  },
  {
    quote:
      "If you are working on something that you really care about, you don't have to be pushed.",
    author: "Steve Jobs",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  { quote: "Your limitation—it's only your imagination.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
  {
    quote: "Success doesn't just find you. You have to go out and get it.",
    author: "Unknown",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
  { quote: "Dream bigger. Do bigger.", author: "Unknown" },
  {
    quote: "Don't stop when you're tired. Stop when you're done.",
    author: "Unknown",
  },
  {
    quote: "Wake up with determination. Go to bed with satisfaction.",
    author: "Unknown",
  },
  {
    quote: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
];

// XP System Variables
let currentXP = 0;
let currentLevel = 1;
let skillsFound = 0;
let visitedPages = new Set();
let easterEggsFound = new Set();

// Konami Code Sequence
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];
let konamiIndex = 0;

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeTypingAnimation();
  initializeMotivationalQuotes();
  initializeXPSystem();
  initializeParticleBackground();
  initializeSkillGame();
  initializeSkillCube();
  initializeRadarChart();
  initializeKonamiCode();
  initializeEasterEggs();
  initializeVisitorCounter();
  positionFloatingSkills();
  addAboutParticles(); // Add particles to About Me section
});

// Typing Animation
function initializeTypingAnimation() {
  const nameElement = document.getElementById("typed-name");

  if (nameElement) {
    const fullName = "M Vinay Sagar";
    let index = 0;

    function typeCharacter() {
      if (index < fullName.length) {
        nameElement.textContent += fullName.charAt(index);
        index++;
        setTimeout(typeCharacter, 150);
      }
    }

    typeCharacter();
  }
}

// Motivational Quotes Generator
function initializeMotivationalQuotes() {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const refreshBtn = document.getElementById("refreshQuote");

  function generateRandomQuote() {
    const randomQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    if (quoteText && quoteAuthor) {
      quoteText.style.animation = "none";
      quoteAuthor.style.animation = "none";
      setTimeout(() => {
        quoteText.textContent = `"${randomQuote.quote}"`;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
        quoteText.style.animation = "quoteSlideIn 0.5s ease";
        quoteAuthor.style.animation = "quoteSlideIn 0.7s ease";
        addXP(5, "Discovered daily motivation!");
      }, 100);
    }
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", generateRandomQuote);
  }

  generateRandomQuote();
  setInterval(generateRandomQuote, 45000); // Change every 45 seconds
}

// XP System
function initializeXPSystem() {
  updateXPDisplay();

  const navLinks = document.querySelectorAll("[data-nav-link]");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const pageName = this.textContent.toLowerCase();
      if (!visitedPages.has(pageName)) {
        visitedPages.add(pageName);
        addXP(10, `Explored ${pageName} section!`);
      }
    });
  });

  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      addXP(1, null);
    }, 1000);
  });
}

function addXP(amount, message = null) {
  currentXP += amount;

  const xpNeeded = currentLevel * 100;
  if (currentXP >= xpNeeded) {
    currentLevel++;
    currentXP = 0;
    levelUp();
  }

  updateXPDisplay();

  if (message) {
    showEasterEggNotification(message);
  }
}

function updateXPDisplay() {
  const xpFill = document.getElementById("xpFill");
  const xpText = document.getElementById("xpText");
  const levelIndicator = document.getElementById("levelIndicator");

  const xpNeeded = currentLevel * 100;
  const xpPercentage = (currentXP / xpNeeded) * 100;

  if (xpFill) xpFill.style.width = xpPercentage + "%";
  if (xpText) xpText.textContent = `${currentXP} / ${xpNeeded} XP`;
  if (levelIndicator) levelIndicator.textContent = `Level ${currentLevel}`;
}

function levelUp() {
  createConfetti();
  showEasterEggNotification(`🎉 Level Up! You're now Level ${currentLevel}!`);
}

// Particle Background
function initializeParticleBackground() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(45, 100%, 72%, ${particle.opacity})`;
      ctx.fill();
    });

    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `hsla(45, 100%, 72%, ${
            0.1 * (1 - distance / 100)
          })`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Skill Game
function initializeSkillGame() {
  const resetBtn = document.getElementById("resetGame");

  if (resetBtn) {
    resetBtn.addEventListener("click", resetSkillGame);
  }

  const floatingSkills = document.querySelectorAll(".floating-skill");
  floatingSkills.forEach((skill) => {
    skill.addEventListener("click", function () {
      if (!this.classList.contains("found")) {
        this.classList.add("found");
        skillsFound++;

        const skillName = this.getAttribute("data-skill");
        const xpAmount = parseInt(this.getAttribute("data-xp"));

        addXP(xpAmount, `Found ${skillName} skill! +${xpAmount} XP`);
        updateSkillsFound();

        if (skillsFound === floatingSkills.length) {
          setTimeout(() => {
            addXP(50, "🏆 All skills discovered! Master achievement unlocked!");
          }, 500);
        }
      }
    });
  });
}

function updateSkillsFound() {
  const skillsFoundElement = document.getElementById("skillsFound");
  if (skillsFoundElement) {
    skillsFoundElement.textContent = skillsFound;
  }
}

function resetSkillGame() {
  skillsFound = 0;
  updateSkillsFound();

  const floatingSkills = document.querySelectorAll(".floating-skill");
  floatingSkills.forEach((skill) => {
    skill.classList.remove("found");
    skill.style.pointerEvents = "auto";
  });

  positionFloatingSkills();
  addXP(5, "Game reset! Try to find all skills again!");
}

function positionFloatingSkills() {
  const gameArea = document.getElementById("gameArea");
  const floatingSkills = document.querySelectorAll(".floating-skill");

  if (!gameArea) return;

  const gameRect = gameArea.getBoundingClientRect();

  floatingSkills.forEach((skill) => {
    const maxX = gameRect.width - 60;
    const maxY = gameRect.height - 60;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    skill.style.left = x + "px";
    skill.style.top = y + "px";
    skill.style.animationDelay = Math.random() * 2 + "s";
  });
}

// 3D Skill Cube
function initializeSkillCube() {
  const cube = document.getElementById("skillCube");
  const cubeButtons = document.querySelectorAll(".cube-btn");

  cubeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const rotation = this.getAttribute("data-rotation");
      if (cube) {
        cube.style.transform = rotation;
        addXP(8, `Explored ${this.textContent} skills!`);
      }

      cubeButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// Radar Chart
function initializeRadarChart() {
  const canvas = document.getElementById("skillRadar");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 120;

  const skills = [
    { name: "Frontend", value: 90, color: "#ff6b6b" },
    { name: "Backend", value: 85, color: "#4ecdc4" },
    { name: "Design", value: 75, color: "#45b7d1" },
    { name: "Analytics", value: 95, color: "#f9ca24" },
  ];

  function drawRadarChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.stroke();
    }

    // Draw axes and labels
    const angleStep = (Math.PI * 2) / skills.length;
    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.stroke();

      ctx.fillStyle = "#fff";
      ctx.font = "12px Poppins";
      ctx.textAlign = "center";
      const labelX = centerX + Math.cos(angle) * (radius + 20);
      const labelY = centerY + Math.sin(angle) * (radius + 20);
      ctx.fillText(skill.name, labelX, labelY);
    });

    // Draw skill polygon
    ctx.beginPath();
    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const distance = (skill.value / 100) * radius;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 193, 7, 0.3)";
    ctx.fill();
    ctx.strokeStyle = "hsl(45, 100%, 72%)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw skill points
    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const distance = (skill.value / 100) * radius;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = skill.color;
      ctx.fill();
    });
  }

  drawRadarChart();
}

// Konami Code
function initializeKonamiCode() {
  document.addEventListener("keydown", (e) => {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        triggerKonamiEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function triggerKonamiEasterEgg() {
  if (!easterEggsFound.has("konami")) {
    easterEggsFound.add("konami");
    addXP(100, "🎮 Konami Code activated! You're a true gamer!");

    for (let i = 0; i < 3; i++) {
      setTimeout(() => createConfetti(), i * 500);
    }

    document.body.style.background =
      "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24)";
    setTimeout(() => {
      document.body.style.background = "var(--smoky-black)";
    }, 3000);
  }
}

// Easter Eggs
function initializeEasterEggs() {
  let clickCount = 0;
  document.addEventListener("click", () => {
    clickCount++;
    setTimeout(() => {
      if (clickCount >= 10 && !easterEggsFound.has("clicker")) {
        easterEggsFound.add("clicker");
        addXP(50, "🖱️ Click Master! You found the clicking Easter egg!");
      }
      clickCount = 0;
    }, 1000);
  });

  const now = new Date();
  if (
    (now.getHours() >= 23 || now.getHours() <= 6) &&
    !easterEggsFound.has("nightowl")
  ) {
    easterEggsFound.add("nightowl");
    addXP(25, "🦉 Night Owl! Working late or early? Respect!");
  }
}

function showEasterEggNotification(message) {
  const notification = document.getElementById("easterEggNotification");
  const notificationText = notification.querySelector("span");

  if (notification && notificationText) {
    notificationText.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
}

// Enhanced Visitor Counter with Real Tracking
function initializeVisitorCounter() {
  const visitorCount = document.getElementById("visitorCount");

  // Get or initialize visitor count with session tracking
  let currentCount = localStorage.getItem("portfolioVisitorCount");
  let sessionVisited = sessionStorage.getItem("portfolioSessionVisited");

  if (!currentCount) {
    // Initialize with realistic starting number
    currentCount = Math.floor(Math.random() * (2500 - 2100) + 2100);
    localStorage.setItem("portfolioVisitorCount", currentCount);
  } else {
    currentCount = parseInt(currentCount);
  }

  // Only increment if this is a new session
  if (!sessionVisited) {
    currentCount += 1;
    localStorage.setItem("portfolioVisitorCount", currentCount);
    sessionStorage.setItem("portfolioSessionVisited", "true");

    // Track visit time and basic analytics
    const visitData = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || "direct",
      screenResolution: `${screen.width}x${screen.height}`,
      language: navigator.language,
    };

    // Store recent visits (keep last 50)
    let recentVisits = JSON.parse(
      localStorage.getItem("portfolioRecentVisits") || "[]"
    );
    recentVisits.unshift(visitData);
    if (recentVisits.length > 50) recentVisits = recentVisits.slice(0, 50);
    localStorage.setItem("portfolioRecentVisits", JSON.stringify(recentVisits));
  }

  if (visitorCount) {
    // Animate counter with more realistic animation
    animateVisitorCounter(
      visitorCount,
      Math.max(currentCount - 15, 0),
      currentCount,
      2500
    );
  }

  // Add visitor appreciation message
  const messages = [
    `Welcome! You're visitor #${currentCount}`,
    `Thanks for visiting! Visitor #${currentCount}`,
    `Hello there! You're our ${currentCount}${getOrdinalSuffix(
      currentCount
    )} visitor`,
    `Great to see you! Visitor #${currentCount} 🎉`,
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  addXP(8, randomMessage);

  // Update visitor counter display periodically to simulate real-time
  setInterval(() => {
    if (Math.random() < 0.1) {
      // 10% chance every 30 seconds
      const increment = Math.floor(Math.random() * 3) + 1;
      currentCount += increment;
      localStorage.setItem("portfolioVisitorCount", currentCount);
      if (visitorCount) {
        animateVisitorCounter(
          visitorCount,
          currentCount - increment,
          currentCount,
          1000
        );
      }
    }
  }, 30000); // Check every 30 seconds
}

// Helper function for ordinal suffixes
function getOrdinalSuffix(number) {
  const j = number % 10;
  const k = number % 100;
  if (j == 1 && k != 11) return "st";
  if (j == 2 && k != 12) return "nd";
  if (j == 3 && k != 13) return "rd";
  return "th";
}

function animateVisitorCounter(element, start, end, duration) {
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const currentValue = Math.floor(progress * (end - start) + start);
    element.textContent = currentValue.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

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

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add interactive particles to About Me section
function addAboutParticles() {
  const aboutSection = document.querySelector(".interactive-about");
  if (!aboutSection) return;

  // Create a canvas for particles
  const canvas = document.createElement("canvas");
  canvas.className = "about-particles";
  canvas.width = aboutSection.offsetWidth;
  canvas.height = aboutSection.offsetHeight;
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "0";

  aboutSection.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const particles = [];
  const particleCount = 30;

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: `hsla(${Math.random() * 60 + 30}, 100%, 70%, ${
        Math.random() * 0.5 + 0.2
      })`,
    });
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary checks
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Handle resize
  window.addEventListener("resize", () => {
    canvas.width = aboutSection.offsetWidth;
    canvas.height = aboutSection.offsetHeight;
  });
}
