const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.right = "0";
  overlay.classList.remove("hidden");

  document.body.style.overflow = "hidden";
});

function closeMenu() {
  mobileMenu.style.right = "-100%";
  overlay.classList.add("hidden");

  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);