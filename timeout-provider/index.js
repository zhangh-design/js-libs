if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/timeout-provider.min.js')
} else {
  module.exports = require('./dist/timeout-provider.js')
}
