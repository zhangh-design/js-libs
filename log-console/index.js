if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/log-console.min.js')
} else {
  module.exports = require('./dist/log-console.js')
}
