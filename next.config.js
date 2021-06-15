const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withTM = require("next-transpile-modules")([
  "@jesus-film/ark.elements.donate",
  "@jesus-film/ark.elements.footer",
  "@jesus-film/ark.elements.jesus-film-symbol",
  "@jesus-film/ark.elements.navigation",
]);

module.exports = withPlugins([withImages, withTM], {
  future: {
    webpack5: false,
  },
});
