module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "content",  // HTML pages yahan se uthenge
      output: "_site",   // Final build yahan generate hoga
      includes: "../templates" // Templates ka path
    }
  };
};

