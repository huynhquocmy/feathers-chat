const assert = require('assert');
const app = require('../../src/app');

describe('\'dialog\' service', () => {
  it('registered the service', () => {
    const service = app.service('dialog');

    assert.ok(service, 'Registered the service');
  });
});
