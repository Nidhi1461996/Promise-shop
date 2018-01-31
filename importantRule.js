
const testCallBack = (callbackFn) => {
  let str = '';
  function iterate(num) {
    str += num;
    return num + 1;
  }

  function alwaysThrows() {
    throw new Error('OH NOES');
  }

  function onReject(error) {
    str += error.message;
    console.log(str);
    callbackFn();
  // console.log(error.message);
  }

  Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((value) => {
      onReject(value);
    });
};

module.exports = testCallBack;
