import configFactory from '../index';

import assert from 'assert';
import nock from 'nock';

describe('Config Client', () => {
  const host = 'key.value.service';
  const url = 'http://' + host + '/v1/kv/';
  const key = 'key';
  const expectedValue = 'value';
  const encodedValue = new Buffer(expectedValue).toString();
  console.log(encodedValue);
  let configClient;

  beforeEach(() => {
    configClient = configFactory(host);
  });

  it('should retrieve value', () => {
    nock(url)
      .get()
      .reply(200, [{
        CreateIndex: 97,
        ModifyIndex: 97,
        Key: key,
        Flags: 0,
        Value: encodedValue
      }]);

    configClient.get(key)
      .then(function(actualValue) {
        assert.equal(actualValue, expectedValue);
      });
  });
});
