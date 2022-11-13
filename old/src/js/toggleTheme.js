const themeToggleButton =  document.querySelector(".toggleThemeButton");

let theme = window.theme; // This is set in an inline <script> in the <head> of the document (runs before HTML render).

function playSwitchSound() {
  const sound = document.querySelector("#switch-sound");
  sound.currentTime = 0;
  sound.volume = 0.1;
  sound.play();
}

function handleThemeToggle() {
  playSwitchSound();

  if (theme === "dark") {
    theme = "light";
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    theme = "dark";
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

themeToggleButton.addEventListener("click", handleThemeToggle);

