let a = 2;
let b = a;

console.log(b);
b = 4;

console.log(b);

let arr = [1, 2, 3, 4];
let arrSame = arr;
console.log(arr);
console.log(arrSame);
arr.push(true);
arrSame.pop();
arrSame.unshift(undefined);
arr.shift();
console.log(arr);

let randomList = ["blue", false, "come"];
let anotherRandomList = randomList;
console.log(randomList, anotherRandomList);
randomList.push(null);
console.log(randomList);
randomList.unshift("pink");
console.log(anotherRandomList);
anotherRandomList.shift();
console.log(randomList);

let arr2 = [1, 2, 3, 4, [2, 3, [2, 3, [3, 4]], 7], 6];
console.log(arr[4][2][2][2]);

let colors = ["blue", "red", "yellow", "Green"];

console.log(colors.splice(2, 1));
console.log(colors);
