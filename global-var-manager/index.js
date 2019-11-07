if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/global-var-manager.min.js')
} else {
  module.exports = require('./dist/global-var-manager.js')
}
