'use strict';

function checkStatusCode(response, data) {
  if (response.statusCode !== 200) {
    throw new Error('Unexpected Reply: ' + response.statusCode);
  }
  return data;
}

function pluckValue(data) {
  return data[0].Value;
}

function decodeBase64(value) {
  return new Buffer(value, 'base64').toString();
}

module.exports = function(url, getAsync) {
  return {
    get: function(key) {
      return getAsync({
          url: url + '/' + key,
          json: true
        })
        .spread(checkStatusCode)
        .then(pluckValue)
        .then(decodeBase64);
    }
  };
};
