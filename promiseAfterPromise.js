// const firstPromise = first();
//
// const secondPromise = firstPromise.then(val => second(val));
//
// secondPromise.then(console.log);
const testCallBack = (callbackFn) => {
  const promise1 = Promise.resolve('secret');
  const promise2 = promise1.then(val => Promise.resolve(val));
  promise2.then((value) => {
    console.log(value);
    return callbackFn();
  });
};

module.exports = testCallBack;
