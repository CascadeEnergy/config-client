import got from 'got-promise';

function pluckValue(response) {
  return response.body[0].Value;
}

function decodeBase64(value) {
  return new Buffer(value, 'base64').toString();
}

function factory(host) {
  return {
    get(key) {
      console.log(`http://${host}/v1/kv/${key}`);
      return got(`http://${host}/v1/kv/${key}`, {json: true})
        .then(pluckValue)
        .then(decodeBase64);
    }
  };
}

export default factory;
