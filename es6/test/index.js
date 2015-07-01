import configFactory from '../index';
import assert from 'assert';
import nock from 'nock';

describe('Config Client', () => {
  it('should retrieve value', (done) => {
    const host = 'key.value.service';
    const url = `http://${host}`;
    const key = 'key';
    const endPoint = `/v1/kv/${key}`;

    const expectedValue = 'value';
    const encodedValue = new Buffer(expectedValue);
    let configClient = configFactory(host);

    nock(url)
      .get(endPoint)
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
        done();
      });
  });
});
