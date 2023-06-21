// var name = "Vigneshwaran T";
// var age = 23;
// var isSingle = true;

// // function userDetails(userName, userAge, userMaritalStatus) {
// //   return (
// //     "Name is " +
// //     userName +
// //     " and Age is " +
// //     userAge +
// //     " and the user is Single: " +
// //     (userMaritalStatus ? 'Yes' : 'No')
// //   );
// // }

// // or

// // const userDetails = function userDetails(userName, userAge, userMaritalStatus) {
// //   return (
// //     "Name is " +
// //     userName +
// //     " and Age is " +
// //     userAge +
// //     " and the user is Single: " +
// //     (userMaritalStatus ? "Yes" : "No")
// //   );
// // };
// // console.log(userDetails(name, age, isSingle));

// // Example for var
//   function example1() {
//     var x = 10;
//     if (true) {
//       var x = 20;
//       console.log(x); // Output: 20
//     }
//     console.log(x); // Output: 20
//   }

// // Example for let
//   function example2() {
//     let x = 10;
//     if (true) {
//       let x = 20;
//       console.log(x); // Output: 20
//     }
//     console.log(x); // Output: 10
//   }

// // Example for const
//   function example3() {
//       const x = 10;
//       if (true) {
//         const x = 20;
//         console.log(x); // Output: 20
//       }
//       console.log(x); // Output: 10
//     }



// console.log(example2());

// const functionName = (parameter1, parameter2, ...) => {
//   // Function body
//   // Code to be executed
//   // Return statement (if any)
// };

// const addName = (firstName, LastName) => {
//      return firstName + ' ' + LastName
// }
// console.log(addName('Vigneshwaran', 'T'));
// //Output: Vigneshwaran T

// //or

// const mergeName = (firstName, LastName) => firstName + ' ' + LastName;
// console.log(mergeName('Vigneshwaran', 'Thiruselvam'));
// //Output: Vigneshwaran Thiruselvam

// const person1 = {
//   name: 'Vigneshwaran T',
//   age : 23,
//   myDetails: function() {
//     setTimeout(() => {
//       console.log('My Name is ' + this.name + ' and my age is ' + this.age + '.');
//       console.log(`My Name is ${this.name} and my age is ${this.age}.`);
//     }, 1000);
//   }
// }
// person1.myDetails();
// //Output: My Name is Vigneshwaran T and my age is 23.
// //        My Name is Vigneshwaran T and my age is 23.