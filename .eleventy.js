const fs = require("fs");
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("assets/style.css");
  eleventyConfig.addPassthroughCopy("admin/index.html");
  eleventyConfig.addPassthroughCopy("admin/config.yml");
  eleventyConfig.addPassthroughCopy("uploads");

  // 
  eleventyConfig.addFilter("phoneFormat", function( phoneNumber ) {
    const countryCode = phoneNumber.toString().slice(0,1);
    const areaCode = phoneNumber.toString().slice(1,4);
    const prefix = phoneNumber.toString().slice(4,7);
    const suffix = phoneNumber.toString().slice(7,11);
    return `${countryCode}-${areaCode}-${prefix}-${suffix}`;
  });


  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = fs.readFileSync("_site/404.html");

        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      }
    }
  });
};
