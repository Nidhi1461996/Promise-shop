function parsedPromised(json) {
  return new Promise(((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      reject(error.message);
    }
  }));
}

const testCallBack = (callbackFn, json) => {
  parsedPromised(json).then((value) => {
    console.log('SUCCESS');
    return callbackFn();
  })
    .catch((value) => {
      console.log(value);
      return callbackFn();
    });
};

module.exports = testCallBack;
