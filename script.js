// ===============================
// Old Town - Menu JavaScript
// ===============================

// ===============================
// Smooth Navigation
// ===============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll(".menu-section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Product Card Selection
// ===============================

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("selected");
  });
});

// ===============================
// Language
// ===============================

const currentLanguage = document.documentElement.lang;

if (currentLanguage === "ar") {
  console.log("Old Town - Arabic Menu");
} else {
  console.log("Old Town - English Menu");
}
