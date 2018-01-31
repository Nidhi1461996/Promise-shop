let str = '';
const testCallBack = (callbackFn) => {
  const testAsync = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE');
  }).then((resolved) => {
    str += 'hello';
    console.log(str);
    return callbackFn();
  });


  str += 'world';
};

module.exports = testCallBack;
