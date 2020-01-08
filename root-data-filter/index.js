if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/root-data-filters.min.js')
} else {
  module.exports = require('./dist/root-data-filters.js')
}
