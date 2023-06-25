///// Synchronous (Sync) Approach: /////

// const syncOperation = () => {
//     console.log('Synchronous Operation 1');
//     console.log('Synchronous Operation 2');
//     console.log('Synchronous Operation 3');
// }

// syncOperation();

// Synchronous Operation 1
// Synchronous Operation 2
// Synchronous Operation 3

///// Asynchronous (Sync) Approach: /////

// const asynchronousOperation = (callback) => {
//     setTimeout(() => {
//         console.log('Asynchronous Operation 1')
//     }, 2000);
//     callback();
// }

// const asyncOperation = () => {
//     console.log('Asynchronous Operation 2')
// }

// asynchronousOperation(asyncOperation);
// // Asynchronous Operation 2
// // Asynchronous Operation 1


///// Promise: /////

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let isTransaction = false;
//         if(isTransaction) {
//             resolve('Your Transaction is Successful!');
//         } else {
//             reject('Your Transaction is Failed!')
//         }
//     }, 1000);
// })

// myPromise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// // Your Transaction is Failed!