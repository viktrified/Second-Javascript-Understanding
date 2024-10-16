// checking if obj.lastName will affect state variable lastName
const lastName = "Ezeokafor";
let obj = {
  lastName: "eifd",
  age: 32,
};
let name = "Victory";
// console.log(obj);

// Valid Email
let email = "victoryezeokaforgmail.com";
let validEmail = email.includes("@"); // boolean method
// console.log(validEmail);

// toUpperCase is not a `destructuctive method` cos it only affect that line of code
let myName = "Victory";
// console.log(myName);
myName.toUpperCase();
// console.log(myName); // myName remains lowercase
let HEIS = "Victory is him";
x = HEIS.replace("i", "a");
// console.log(x);

// string concatenation
let firstName = "Victory";
let surName = "Ezeokafor";
let age = 21;
let sentence = `my name is ${firstName} ${surName}, and I am ${age} years old.`;
console.log(sentence);
