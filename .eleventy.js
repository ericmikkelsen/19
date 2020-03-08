module.exports = function(eleventyConfig) {

    eleventyConfig.setLiquidOptions({
      dynamicPartials: true
    });
  };
  
//   module.exports = function(eleventyConfig) {
//     eleventyConfig.addPassthroughCopy("assets/fonts");
//     eleventyConfig.addPassthroughCopy("assets/css");
//   };