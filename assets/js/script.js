// mobile menu functions

const mobilemenu = document.querySelector(".mobile-menu");
const mobileMenuContent = document.querySelector(".mobile-menu-container");
const closeButton = document.querySelector(".close-button");
const hambergerMenu = document.querySelector(".hamberger-menu");
const navLinks = document.querySelectorAll(".mobile-nav-links a, .mobile-logo");

hambergerMenu.addEventListener("click", () => {
  mobilemenu.style.display = "flex";
  mobileMenuContent.style.transform = "translateX(0)";
});

closeButton.addEventListener("click", () => {
  closeMobileMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

function closeMobileMenu() {
  mobileMenuContent.style.transform = "translateX(100%)";
  setTimeout(() => {
    mobilemenu.style.display = "none";
  }, 300);
}

// carousel functions

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");

let currentIndex = 0;

const moveToSlide = (index) => {
  track.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
};

const nextSlide = () => {
  const newIndex = (currentIndex + 1) % slides.length;
  moveToSlide(newIndex);
};

const prevSlide = () => {
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveToSlide(newIndex);
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
