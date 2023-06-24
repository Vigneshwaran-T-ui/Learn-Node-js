/////////////////////////////////////// Spread operator //////////////////////////////////////////
//// Copy Array
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// copiedArray.push(4);
// console.log(originalArray); // [1, 2, 3]
// console.log(copiedArray); // [1, 2, 3]

//// Concatenating arrays
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const concatArray = [...array1, ...array2];

// console.log(array1); // [1, 2, 3]
// console.log(array2); // [4, 5, 6]
// console.log(concatArray); // [ 1, 2, 3, 4, 5, 6 ]

//// Spreading elements in function arguments
// function sum(a, b, c) {
//     return a + b + c;
// }

// const array = [1, 2, 3];
// const arraySum = sum(...array);

// console.log(arraySum); //6

//// Creating a shallow copy of an object
// const originalObject = { name: 'John', age: 30 };
// const copiedObject = { ...originalObject };
// console.log(copiedObject); // { name: 'John', age: 30 }

//// Mergin Objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const mergedObject = { ...obj1, ...obj2 };
// console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }



/////////////////////////////////////// Rest operator ////////////////////////////////////////////

const arrayEle = (...args) => {
    return args;
}

console.log(arrayEle(1, 'One', 2, 'Two'));