if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/loader-api.min.js')
} else {
  module.exports = require('./dist/loader-api.js')
}
