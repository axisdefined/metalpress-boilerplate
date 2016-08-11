var metalpress = require('metalpress');
var config = require('./metalpress.config');

metalpress.default(config, function (err, files) {
  console.log('Site build completed: ', new Date());
});