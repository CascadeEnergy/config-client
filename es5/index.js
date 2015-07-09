'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _gotPromise = require('got-promise');

var _gotPromise2 = _interopRequireDefault(_gotPromise);

function pluckValue(response) {
  return response.body[0].Value;
}

function decodeBase64(value) {
  return new Buffer(value, 'base64').toString();
}

function factory(host) {
  return {
    get: function get(key) {
      console.log('http://' + host + '/v1/kv/' + key);
      return (0, _gotPromise2['default'])('http://' + host + '/v1/kv/' + key, { json: true }).then(pluckValue).then(decodeBase64);
    }
  };
}

exports['default'] = factory;
module.exports = exports['default'];