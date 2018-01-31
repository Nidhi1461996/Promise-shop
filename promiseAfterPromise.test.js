const chain = require('./promiseAfterPromise');

global.console = {
  log: jest.fn(),
};

describe('test to check if promise is asynchronous', () => {
  test('verify the resolve', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('secret');
      done();
    };

    chain(callbackFn);
  });
});
