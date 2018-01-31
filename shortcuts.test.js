const shortcut = require('./shortcuts');

global.console = {
  log: jest.fn(),
};

describe('test to check if promise is asynchronous', () => {
  test('verify the resolve', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('fulfill');
      done();
    };

    shortcut(callbackFn, null);
  });

  test('verify the reject', (done) => {
    const callbackFn2 = () => {
      expect(global.console.log).toHaveBeenCalledWith('error found');
      done();
    };

    shortcut(null, callbackFn2);
  });
});
