const printToConsole = require('./alwaysAsync');

global.console = {
  log: jest.fn(),
};

describe('test to check if promise is asynchronous', () => {
  test('verify the string printed', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('worldhello');
      done();
    };

    printToConsole(callbackFn);
  });
});
