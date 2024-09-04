// Add twinkling stars
for (let i = 0; i < 100; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  document.body.appendChild(star);
}

// Handle navigation
const homeLink = document.getElementById("home-link");
const coursesLink = document.getElementById("courses-link");
const aboutLink = document.getElementById("about-link");
const calculatorLink = document.getElementById("calculator-link");
const contactLink = document.getElementById("contact-link");
const heroSection = document.getElementById("hero-section");
const coursesSection = document.getElementById("courses-section");
const aboutSection = document.getElementById("about-section");
const calculatorSection = document.getElementById("calculator-section");
const contactSection = document.getElementById("contact-section");

let calculator;

function hideAllSections() {
  heroSection.style.display = "none";
  coursesSection.style.display = "none";
  aboutSection.style.display = "none";
  calculatorSection.style.display = "none";
  contactSection.style.display = "none";
}

homeLink.addEventListener("click", function (e) {
  e.preventDefault();
  hideAllSections();
  heroSection.style.display = "block";
});

coursesLink.addEventListener("click", function (e) {
  e.preventDefault();
  hideAllSections();
  coursesSection.style.display = "block";
});

aboutLink.addEventListener("click", function (e) {
  e.preventDefault();
  hideAllSections();
  aboutSection.style.display = "block";
});

calculatorLink.addEventListener("click", function (e) {
  e.preventDefault();
  hideAllSections();
  calculatorSection.style.display = "block";
  if (!calculator) {
    initializeCalculator();
  }
});

contactLink.addEventListener("click", function (e) {
  e.preventDefault();
  hideAllSections();
  contactSection.style.display = "block";
});

function initializeCalculator() {
  try {
    var elt = document.getElementById("calculator");
    calculator = Desmos.GraphingCalculator(elt, {
      keypad: false,
      settingsMenu: false,
      zoomButtons: false,
      expressions: false,
      branding: false,
      backgroundColor: "#1a1a1a",
      textColor: "#ffffff",
      gridColor: "#333333",
      axisColor: "#666666",
    });

    // Set up initial equations or graphs
    calculator.setExpression({
      id: "graph1",
      latex: "y=x^2",
      color: "#3498db",
    });
    console.log("Calculator initialized successfully");
  } catch (error) {
    console.error("Error initializing calculator:", error);
    document.getElementById("calculator").innerHTML =
      "Error loading calculator. Please try refreshing the page.";
  }
}

// Initialize calculator when the page loads
window.addEventListener("load", function () {
  if (document.getElementById("calculator")) {
    initializeCalculator();
  }
});
