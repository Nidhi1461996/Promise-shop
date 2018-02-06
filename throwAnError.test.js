const throwError = require('./throwAnError');

global.console = {
  log: jest.fn(),
};

describe('test try and catch', () => {
  test('verify by passing an invalid json', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('Unexpected token s in JSON at position 0');
      done();
    };

    throwError(callbackFn, 'sdbckj');
  });

  test('verify by passing an empty string', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('Unexpected end of JSON input');
      done();
    };

    throwError(callbackFn, '');
  });

  test('verify the resolve', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('SUCCESS');
      done();
    };
    const json = JSON.stringify({ hello: 'world' });

    throwError(callbackFn, json);
  });
});
