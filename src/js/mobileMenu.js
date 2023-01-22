const toggleButton = document.querySelector("#mobile-toggle-menu");
const menu = document.querySelector(".menu");
const menuBurgerIcon = document.querySelector(".menu-burger-icon");
const menuCloseIcon = document.querySelector(".menu-close-icon");

if (toggleButton) {
  toggleButton.addEventListener("click", function() {
    if (menu.classList.contains("menu-open")) {
      // Close menu
      document.body.classList.remove("menu-open");
      menu.classList.remove("menu-open");
      menuBurgerIcon.style.display = "block";
      menuCloseIcon.style.display = "none";
    } else {
      // Open menu
      document.body.classList.add("menu-open");
      menu.classList.add("menu-open");
      menuCloseIcon.style.display = "block";
      menuBurgerIcon.style.display = "none";
    }
  });
}