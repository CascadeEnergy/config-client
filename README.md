# Consul KV
Utility client for fetching configuration options for the Consul key/value 
store.

## Example

```javascript
'use strict';

var consulKvFactory = require('consul-kv');

var consulHost = 'my.consul.com'; // e.g 172.x.x.x:8500
var consulKv = consulKvFactory(consulHost);

// GETs a key from storage, decodes it, and returns it
consulKv('test/key')
  .then(console.log) // log successes
  .catch(console.log); // catch and log all errors
```

