require('es6-promise');

const promise = new Promise(((fulfill, reject) => {
  // Your solution here
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
}));

promise.then(console.log);
// Your solution here
