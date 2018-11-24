

 let Promise = require('./promise3');
let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('xx')
  }, 0);
})
// promise 中 每次调用then 都应该返回一个新的promise 
// promise的实例只能成功或者失败  不能既成功又失败

// 如果then方法返回了一个promise ，
// 当前返回的这个promise2 应该等待这个promise执行结果再继续
let promise2 = p.then(function () {
  throw new Error()
}).then(function (data) {
  console.log('success',data);
},function (err) {
  console.log(err);
})
