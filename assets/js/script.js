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
