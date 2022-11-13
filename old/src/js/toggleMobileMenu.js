const menuButton = document.querySelector("#mobileMenuToggle");
const mainNav = document.querySelector("#mainNav");

let state = "CLOSED";

function handleMobileMenuToggleClick() {
  if (state === "CLOSED") {
    state = "OPEN";
    mainNav.classList.add("menu-open");
    mainNav.classList.remove("menu-closed");
  } else {
    state = "CLOSED";
    mainNav.classList.remove("menu-open");
    mainNav.classList.add("menu-closed");
  }
}

menuButton.addEventListener("click", handleMobileMenuToggleClick);
