if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/observer-manager.min.js')
} else {
  module.exports = require('./dist/observer-manager.js')
}
