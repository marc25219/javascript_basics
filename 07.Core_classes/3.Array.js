/*
 * Author: Marc Ciruelos Santos
 * Date: 19-02-2024
 * Description: Array class => Examples of the Declaration, functions (length, sort, pop, push, add, 
 */


// Declarartion
let myArray = [7, 1, 2, 3, 4];
console.log(myArray);

let myColors = new Array("Red", "Green", "Blue");
console.log(myColors);

let myObjectArray = [
  { brand: "Tesla", model: "X" },
  { brand: "Mercedes", model: "CLK" },
];
console.log(myObjectArray);

let myMatrix = [
  [1, 4],
  [3, 6],
];
console.log(myMatrix[0][0]); // 1

// Array functions
// length => 5
console.log(myArray.length);

// sort the array => [1, 2, 3, 4, 7]
console.log(myArray.sort());

// pop (remove) => 7 (last number of [1, 2, 3, 4, 7])
console.log("Element removed: " + myArray.pop());
console.log(myArray);

// push (add) => (last position [1, 2, 3, 4, 2])
console.log("Element 2 added in position: " + myArray.push(2));
console.log(myArray);

// reverse => [2, 4, 3, 2, 1]
console.log(myArray.reverse());

// Join to template
let value = 5;
const template = ["<li>", value, "</li>"].join("");

console.log("Array joined:" + template);

// Map
// Usual function
let mySQRTArray = myArray.map(function (item) {
  return Math.sqrt(item);
});
console.log(mySQRTArray);

// Arrow function
mySQRTArray = myArray.map((item) => Math.sqrt(item));
console.log(mySQRTArray);

// Arrow function reduced because use item as parameter
mySQRTArray = myArray.map(Math.sqrt);
console.log(mySQRTArray);

// Filter
let result = myArray.filter((item) => item % 3 === 0);
console.log("Multiple of 3: " + result);

// Slice (cut from - to)
console.log(myArray.slice(1, 3));
console.log(myArray.slice(2, -1));
console.log("Immutable myArray => original: " + myArray);
