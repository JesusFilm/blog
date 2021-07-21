const requireContext = require('require-context')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')(
  requireContext('../@jesus-film', true, /^.*\/package.json$/)
    .keys()
    .map((path) => `@jesus-film/${path.replace('/package.json', '')}`)
)

module.exports = withPlugins([withImages, withTM], {
  future: {
    webpack5: false
  }
})
