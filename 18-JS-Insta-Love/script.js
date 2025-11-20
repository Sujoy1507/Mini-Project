// LEVEL 1 – 20 NOVEMBER 2025



console.log("Question - 01");
// Return the sum of all even numbers in the array.
const arr1 = [4, 7, 12, 9, 16, 25];
let Even = arr1.filter(val=>val%2===0)
let sumEven = 0;
Even.forEach(val => {
    sumEven+=val;
});

console.log(sumEven);



console.log("Question - 02");
// From the given object, return all keys whose values are booleans.
const obj2 = { a: true, b: 20, c: false, d: "hello", e: true };

let boolea = Object.values(obj2).filter(val=>typeof val === 'boolean');
console.log(boolea);




console.log("Question - 03");
// Count how many words in the array have length greater than 3.
const words3 = ["js", "code", "web", "ai", "learn"];
let length3 = words3.filter(val=>val.length>3)
console.log(length3);



console.log("Question - 04");
// Check if the number array contains the value 100.
// Return true or false.
const nums4 = [10, 25, 60, 100, 5];
let contain100 = nums4.filter(val=>val===100);
console.log(contain100);



console.log("Question - 05");
// From the array of objects, return a new array containing only ages.
const people5 = [
  { name: "ravi", age: 22 },
  { name: "neha", age: 27 },
  { name: "amit", age: 19 }
];
let ageNew = people5.map(val=>val.age)
console.log(ageNew);



// HINTS (commented)
//
// Q1:
// - Check even using n % 2 === 0.
// - Sum using loop or reduce.
// - Return total sum.
//
// Q2:
// - typeof value === "boolean".
// - Use Object.keys or Object.entries.
// - Push only keys with boolean values.
//
// Q3:
// - Use word.length > 3.
// - Filter or loop.
// - Return count only.
//
// Q4:
// - Use includes or manual loop.
// - Compare directly with 100.
// - Return true or false.
//
// Q5:
// - Use map to collect ages.
// - Or loop through objects and push age.
// - Return new age array.
