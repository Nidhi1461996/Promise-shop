const importantRule = require('./importantRule');

global.console = {
  log: jest.fn(),
};

describe('basic test cases', () => {
  test('check if the right string is printed', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('12345OH NOES');
      done();
    };

    importantRule(callbackFn);
  });
});
