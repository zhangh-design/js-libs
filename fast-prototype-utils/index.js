if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/fast-prototype-utils.min.js')
} else {
  module.exports = require('./dist/fast-prototype-utils.js')
}
