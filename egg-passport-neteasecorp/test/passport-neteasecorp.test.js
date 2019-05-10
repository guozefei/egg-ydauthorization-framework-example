'use strict';

const mock = require('egg-mock');

describe('test/passport-neteasecorp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/passport-neteasecorp-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, passportNeteasecorp')
      .expect(200);
  });
});
