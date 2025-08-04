// .eleventy.js
module.exports = function(eleventyConfig) {
  // Tell Eleventy to watch for CSS changes for hot-reloading
  eleventyConfig.addWatchTarget('./src/css/');

  // Copy static assets to the output directory
  eleventyConfig.addPassthroughCopy('./src/img/');

  return {
    dir: {
      input: 'src',       // Source files directory
      output: '_site',    // The built website will be in this folder
      includes: '_includes' // For layouts, partials, etc.
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
