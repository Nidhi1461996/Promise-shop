const testCallBack = (callbackFn, callbackFn2) => {
  const promise1 = Promise.resolve('fulfill');
  promise1.then((value) => {
    console.log(value);
    callbackFn();
  });
  const promise2 = Promise.reject(new Error('error found'));
  promise2.catch((value) => {
    console.log(value.message);
    callbackFn2();
  });
};
// testCallBack();
module.exports = testCallBack;
