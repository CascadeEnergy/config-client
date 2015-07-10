var consulKvFactory = require('../es5');

var consulHost = process.argv[2];
var key = process.argv[3];
var consulKv;

if (!key || !consulHost) {
  throw Error('key and consulHost arguments are required');
}

consulKv = consulKvFactory(consulHost + ':8500');

consulKv.get(key)
  .then(function(response) {
    console.log(response);
  }).catch(function(err) {
    console.error(err);
  });
