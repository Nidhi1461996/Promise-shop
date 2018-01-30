const printToConsole = require('./warmup');

global.console = {
  log: jest.fn(),
};

describe('Tests for checking the string logged to the console', () => {
  test('verify the string printed', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('TIMED OUT!');
      done();
    };

    printToConsole(callbackFn);
  });
});
