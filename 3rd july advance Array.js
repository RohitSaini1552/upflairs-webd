


// How would you flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]) to a single array using recursion or a built-in method?

function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2, [3, [4]], 5]])); 


// Given an array of numbers, how do you remove all duplicate values without using Set?

function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 1])); 


// 3. Array reference behavior

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); 


// How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?

function secondLargest(arr) {
  let max = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}
console.log(secondLargest([10, 5, 8, 1, 9])); 



// How do you count the number of occurrences of each element in an array?
// Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}

function countOccurrences(arr) {
  let count = {};
  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 2, 3, 1, 1])); 


// Write a custom implementation of the .map() method (polyfill).

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
const nums = [1, 2, 3];
console.log(nums.myMap(x => x * 2)); 



// How do you sort an array of objects by multiple properties?
// Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]

let people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];
people.sort(function(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return a.age - b.age;
});
console.log(people);


// 8. Filter prime numbers

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function filterPrimes(arr) {
  return arr.filter(isPrime);
}
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7])); 

// 9. Array length = 0

const arr = [1, 2, 3];
arr.length = 0;
console.log(arr[0]); 

// 10. forEach vs map

let a1 = [1, 2, 3];
a1.forEach((num) => console.log(num * 2)); 
let a2 = a1.map((num) => num * 2);
console.log(a2); 


// 11. slice vs original array

const a3 = [1, 2, 3];
const b3 = a3.slice(0, 2);
b3[0] = 100;
console.log(a3); 



// 12. Find all pairs with sum = target

function findPairs(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
console.log(findPairs([1, 2, 3, 4, 5], 6));



// 13. Chunk array into groups of N

function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); 


// 14. Explain reduce expression

let sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// 15. Time complexity of splice()
// Worst case: O(n)
// Reason: elements after the index may need to shift positions