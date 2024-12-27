module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "content",
      output: "_my-website",
      includes: "../templates"
    }
  };
};
