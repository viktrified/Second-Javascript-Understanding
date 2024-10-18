// data conversion
let num1 = 50;
// let twoDecimalfigures = num1.toFixed(2)
let convertedNumberToString = String(num1);
// console.log(typeof convertedNumberToString);

let num2 = 40; // number
let fixed = num2.toFixed(2); // string
// console.log(fixed); // string
// console.log(typeof fixed); // string
// console.log(fixed.charCodeAt()); // number
// console.log(typeof fixed.charCodeAt()); // number
// console.log(typeof fixed); // string
// console.log(fixed.charCodeAt().toFixed(8).charCodeAt()); // number

let randomList = ["blue", false, "come"];
let wowList = ["blue", false, "come"];
let weeList = wowList;
let anotherRandomList = randomList;
// console.log(randomList, anotherRandomList);
// console.log(wowList, weeList);
wowList.push(null);
weeList.unshift("wahala");

randomList.push(null);
// console.log(randomList);
randomList.unshift("pink");
// console.log(anotherRandomList);
anotherRandomList.shift();
// console.log(randomList);

let arr = [1, 2, 3, 4, [2, 3, [2, 3, [3, 4]], 7], 6];
// console.log(arr[4][2][2][2]);

let colors = ["blue", "red", "yellow", "Green"];

// console.log(colors.splice(2, 1));

// console.log(colors);
