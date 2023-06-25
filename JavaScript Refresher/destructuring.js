///// Destructuring an array:
// const numbers = [ 1, 2, 3, 4, 5, 6 ];

// Extracting values from the array
    // const [ a, b, c ] = numbers;
    // console.log(a,b); // 1,2
    // console.log(b);   // 2
    // console.log(c);   // 3

// Skipping values in the array
    // const [, , ,d, e, f] = numbers;
    // console.log(d); // 4
    // console.log(e); // 5
    // console.log(f); // 6

///// Destructuring an Object:

// const employee = {
//     eName: 'Vigneshwaran',
//     age: 23,
//     salary: 27000,
//     designation: 'Software Engineer'
// };

// // Extracting values from the object
// const {eName, age} = employee;
// console.log(eName); // Vigneshwaran
// console.log(age); // 23

// // Assigning to new variable names
// const { eName: employeeName, age: employeeAge } = employee;
// console.log(employeeName); // Vigneshwaran
// console.log(employeeAge); // 23

// // Providing default values
// const {eName: empName, profession = 'UnKnown'} = employee;
// console.log(empName); // Vigneshwaran
// console.log(profession); // UnKnown


///// Destructuring function Parameters:
// const employeeDetails = ({ name, age, salary, designation }) => {
//   console.log(
//     `Employee name is ${name} and his age is ${age}. He bought ${salary} rupees salary and his designation is ${designation}. `
//   );
// };

// const empDetails = {
//     name: 'Vigneshwaran',
//     age: 23,
//     salary: 27000,
//     designation: 'Software Developer'
// };

// employeeDetails(empDetails); //Employee name is Vigneshwaran and his age is 23. He bought 27000 rupees salary and his designation is Software Developer.

///// Destructuring nested objects:
const studentDetails = {
    name: 'Arun Karthik',
    age: 16,
    class: '12th standard',
    address: {
        city: 'Virudhunagar',
        state: 'Tamilnadu',
        country: 'India',
        zipCode: 626001
    }
}

const {
  name: studentName,
  age: studentAge,
  address: { city: studentCity, zipCode: studentZipCode },
} = studentDetails;

console.log(studentName); // Arun Karthik
console.log(studentAge); // 16
console.log(studentCity); // Virudhunagar
console.log(studentZipCode); // 626001