const testCallBack = (callbackFn) => {
  setTimeout(() => {
    console.log('TIMED OUT!'); callbackFn();
  }, 300);
};

module.exports = testCallBack;
