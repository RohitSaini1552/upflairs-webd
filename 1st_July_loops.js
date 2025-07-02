// Print numbers from 1 to 10 using a for loop


// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Print numbers from 10 down to 1 using a while loop


// let j = 10;
// while (j >= 1) {
//   console.log(j);
//   j--;
// }

// Print numbers from 1 to 5 using a do...while loop


// let k = 1;
// do {
//   console.log(k);
//   k++;
// } while (k <= 5);


// Even numbers from 1 to 50
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// // Odd numbers between 20 and 50
// for (let i = 21; i < 50; i += 2) {
//   console.log(i);
// }

// // // Numbers divisible by 3 from 1 to 30
// for (let i = 3; i <= 30; i+=3) {
//   // if (i % 3 === 0)
//      console.log(i);
// }


// Sum of numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) sum += i;
// console.log("Sum from 1 to 100:", sum);

// // Product of numbers from 1 to 10
// let product = 1;
// for (let i = 1; i <= 10; i++) product *= i;
// console.log("Product from 1 to 10:", product);

// // Sum of all even numbers between 1 and 50
// let Sum = 0;
// for (let i = 2; i <= 50; i += 2) Sum += i;
// console.log("Sum of even numbers:", Sum);

// // Sum of squares from 1 to 10
// let squareSum = 0;
// for (let i = 1; i <= 10; i++) squareSum += i * i;
// console.log("Sum of squares 1² to 10²:", squareSum);



// Print numbers from 1 to 20, skip multiples of 4
// for (let i = 1; i <= 20; i++) {
//   if (i % 4 === 0) continue;
//   console.log(i);
// }

// Print numbers from 1 to 10, stop at 7
// for (let i = 1; i <= 10; i++) {
//   if (i === 7) break;
//   console.log(i);
// }

// Count numbers divisible by both 3 and 5 from 1 to 100
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) count++;
// }
// console.log("Count divisible by both 3 and 5:", count);



// All pairs (i, j) from 1 to 3
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log('(' ,i, j ,')');
//   }
// }

// // Combinations (a, b) such that a + b = 5 and 1 <= a,b <= 4
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5) {
      console.log('(',a, b,')');
    }
  }
}