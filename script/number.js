// data conversion
let num1 = 50;
// let twoDecimalfigures = num1.toFixed(2)
let convertedNumberToString = String(num1);
// console.log(typeof convertedNumberToString);

let num2 = 40; // number
let fixed = num2.toFixed(2); // string
console.log(fixed); // string
console.log(typeof fixed); // string

console.log(fixed.charCodeAt()); // number

console.log(typeof fixed.charCodeAt()); // number

console.log(typeof fixed); // string

console.log(fixed.charCodeAt().toFixed(8).charCodeAt()); // number
