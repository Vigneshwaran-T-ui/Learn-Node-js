// splice()
// array.splice(start, deleteCount, item1, item2);
// splice() examples
const animals = ['Lion', 'Tiger', 'Black Panther'];
// const modAnimals = animals.splice(1,1); // Delete
animals.splice(4,0,'Leapord'); // Insert Elements
animals.splice(1,1,'Cat'); // Replace Elements
console.log(animals); // Output: [ 'Lion', 'Black Panther' ]
// console.log(modAnimals); // Output: [ 'Tiger' ]
