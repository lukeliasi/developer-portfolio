/**
 * This file is the Webpack entry point
 * Webpack handles bundling the CSS and JS files to the public directory.
 * It also handles all the good stuff such as minifying, prefixing and transpiling
 */

// CSS files to be bundled into "public/main.css"
import "./css/tailwind.css";
import "./css/fonts.css";
import "./css/global.css";
import "./css/menu.css";
import "./css/home.css";
import "./css/about.css";

// JS files to be bundled into "public/bundle.js"
import "./js/index.js";
