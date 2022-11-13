const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const { menuItem } = require("./src/includes/menuItem.11ty");
const { themeToggleButton } = require("./src/includes/themeToggleButton.11ty");
const { socialIcon } = require("./src/includes/socialIcon.11ty");
const { mobileMenuToggleButton } = require("./src/includes/mobileMenuToggleButton.11ty");
const { mainPageHeading } = require ("./src/includes/mainPageHeading.11ty");
const { formInput } = require ("./src/includes/formInput.11ty");
const { formTextarea } = require ("./src/includes/formTextarea.11ty");
const { yearsOfExperience } = require("./src/util/yearsOfExperience");
const { greeter } = require ("./src/util/greeter");

module.exports = function(eleventyConfig) {
  // Copy `src/public` files to `dist`
  eleventyConfig.addPassthroughCopy({ "src/public": "public" });

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Shortcodes
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("greeter", greeter);
  eleventyConfig.addShortcode("yearsOfExperience", yearsOfExperience);
  eleventyConfig.addShortcode("menuItem", menuItem);
  eleventyConfig.addShortcode("themeToggleButton", themeToggleButton);
  eleventyConfig.addShortcode("socialIcon", socialIcon);
  eleventyConfig.addShortcode("mobileMenuToggleButton", mobileMenuToggleButton);
  eleventyConfig.addShortcode("mainPageHeading", mainPageHeading);
  eleventyConfig.addShortcode("formInput", formInput);
  eleventyConfig.addShortcode("formTextarea", formTextarea);

  return {
    dir: {
      input: "src/pages",
      includes: "../includes",
      layouts: "../layouts",
      data: "../data",
      output: "dist"
    },
  }
};
