const userComponent = require('./components/user');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (config) => {
  
  config.addPlugin(eleventyNavigationPlugin);
  config.setTemplateFormats([
    "css", // css is not yet a recognized template extension in Eleventy
    "md",
    "njk"
  ]);

  config.addPairedNunjucksShortcode("user", userComponent);

  return {
    dir: {
      output: "dist",
      input: "content",
      includes: "templates"
    }    
  }
}