const buttonStylesBase = "sm:hidden inline-flex items-center rounded-md justify-center px-3 py-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white space-x-2";
const buttonStylesText = "dark:text-mint dark:hover:text-mint-300 text-blue hover:text-blue-300";
const buttonStylesBackground = "";

// Additional styles in menu.css

const mobileMenuToggleButton = () => {
  return (`
    <button id="mobileMenuToggle" type="button" class="${buttonStylesBase} ${buttonStylesText} ${buttonStylesBackground}" aria-controls="mobile-menu" aria-expanded="false">
      <span class="font-ibm-plex-mono text-lg">Menu</span>
      
      <!-- OPEN icon -->
      <svg class="menu-closed-icon h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      
      <!-- CLOSE icon -->
      <svg class="menu-open-icon h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  `);
}

module.exports = { mobileMenuToggleButton };
