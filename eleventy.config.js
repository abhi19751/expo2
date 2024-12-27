module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "content",    // Input directory
      output: "_site",     // Output directory
      includes: "../templates" // Templates directory
    }
  };
};

