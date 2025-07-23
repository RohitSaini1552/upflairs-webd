var prompt=require('prompt-sync')();


// // 1. Even or Odd

let num = prompt("Enter a number:");
console.log(num % 2 === 0 ? "Even" : "Odd");


// // 2. Positive, Negative, or Zero

num = prompt("Enter a number:");
num = parseInt(num);
console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");


// // 3. Greater of Two Numbers

let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
console.log("Greater: " + (a > b ? a : b));


// // 4. Divisible by 3

num = parseInt(prompt("Enter a number:"));
console.log(num % 3 === 0 ? "Divisible by 3" : "Not divisible by 3");


// // 5. Multiple of 7

num = parseInt(prompt("Enter a number:"));
console.log(num % 7 === 0 ? "Multiple of 7" : "Not a multiple of 7");


// // 6. Vowel or Consonant (lowercase only)

let ch = prompt("Enter a lowercase character:");
console.log("aeiou".includes(ch) ? "Vowel" : "Consonant");


// // 7. Between 10 and 50

num = parseInt(prompt("Enter a number:"));
console.log(num > 10 && num < 50 ? "Between 10 and 50" : "Not in range");


// // 8. 3-digit number

num = parseInt(prompt("Enter a number:"));
console.log(num >= 100 && num <= 999 ? "3-digit number" : "Not a 3-digit number");


// // 9. Voting Eligibility

let age = parseInt(prompt("Enter your age:"));
console.log(age >= 18 ? "Eligible for voting" : "Not eligible");


// // 10. Temperature Condition

let temp = parseInt(prompt("Enter temperature:"));
if (temp > 30) console.log("Hot");
else if (temp >= 15) console.log("Moderate");
else console.log("Cold");


// // 11. Greatest of Three Numbers

let x = parseInt(prompt("Enter first number:"));
let y = parseInt(prompt("Enter second number:"));
let z = parseInt(prompt("Enter third number:"));
if(x>y && x>z) console.log(x, "is greatest")
else if(y>x && y>z) console.log(y, "is greatest")
else 
 console.log(z, "is greatest")


// // 12. Leap Year Check

let year = parseInt(prompt("Enter a year:"));

console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap year" : "Not a leap year");


// // 13. Character Type

let char = prompt("Enter a character:");
if (char >= 'A' && char <= 'Z') console.log("Uppercase");
else if (char >= 'a' && char <= 'z') console.log("Lowercase");
else if (!isNaN(char)) console.log("Digit");
else console.log("Special character");


// // 14. Student Grade

let marks = parseInt(prompt("Enter marks out of 100:"));
if (marks >= 90) console.log("Grade A");
else if (marks >= 75) console.log("Grade B");
else if (marks >= 60) console.log("Grade C");
else if (marks >= 40) console.log("Grade D");
else console.log("Grade F");


// // 15. Day Number to Weekday

let day = parseInt(prompt("Enter day number (1-7):"));
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[day - 1] || "Invalid");


// // 16. Divisible by Both 5 and 11

num = parseInt(prompt("Enter a number:"));
console.log(num % 5 === 0 && num % 11 === 0 ? "Divisible by both" : "Not divisible by both");


// // 17. Prime Number (basic logic)

num = parseInt(prompt("Enter a number:"));
let isPrime = true;
if (num < 2) isPrime = false;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Prime" : "Not Prime");


// // 18. Driving License Eligibility

let person = prompt("Enter name:");
age = parseInt(prompt("Enter age:"));
console.log(age >= 18 ? " eligible for a driving license" : " not eligible");


// // 19. Equality or Greater

a = parseInt(prompt("Enter first number:"));
b = parseInt(prompt("Enter second number:"));
if (a === b) console.log("Both numbers are equal");
else console.log("Greater: " + (a > b ? a : b));


// // 20. Even/Odd and Positive/Negative

num = parseInt(prompt("Enter a number:"));
let evenOdd = (num % 2 === 0) ? "Even" : "Odd";
let posNeg = (num > 0) ? "Positive" : (num < 0 ? "Negative" : "Zero");
console.log(evenOdd, posNeg);


// // 21. Average & Grade (5 subjects)

let total = 0;
for (let i = 1; i <= 5; i++) {
    total += parseInt(prompt('Enter marks for subject', i));
}
let avg = total / 5;
if (avg >= 90) console.log("Grade A");
else if (avg >= 75) console.log("Grade B");
else if (avg >= 60) console.log("Grade C");
else if (avg >= 40) console.log("Grade D");
else console.log("Grade F");


// // 22. Divisible by 3 or 5 but not both

num = parseInt(prompt("Enter a number:"));
console.log((num % 3 === 0) ^ (num % 5 === 0) ? "Valid" : "Invalid");


// // 23. Palindrome Number

num = prompt("Enter a number:");
let reversed = num.split('').reverse().join('');
console.log(num === reversed ? "Palindrome" : "Not a palindrome");


// // 24. Sum of Digits Even/Odd

num = prompt("Enter a number:");
let sum = 0;
for (let ch of num) sum += parseInt(ch);
console.log(sum % 2 === 0 ? "Sum of digits is Even" : "Odd");


// // 25. Overtime Pay

let hours = parseInt(prompt("Enter hours worked:"));
let overtime = hours > 40 ? (hours - 40) * 12 : 0;
console.log("Overtime pay: Rs. " + overtime);


// // 26. Net Salary Calculation

let basic = parseInt(prompt("Enter basic salary:"));
let hra, da;
if (basic < 10000) {
    hra = basic * 0.2;
    da = basic * 0.5;
} else {
    hra = basic * 0.3;
    da = basic * 0.8;
}
let net = basic + hra + da;
console.log("Net Salary: Rs. " +net);


// // 27. Month Days

let month = parseInt(prompt("Enter month number (1-12):"));
if (month === 2) console.log("28 or 29 days");
else if ([4, 6, 9, 11].includes(month)) console.log("30 days");
else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) console.log("31 days");
else console.log("Invalid month");




// // 29. Triangle Type

let s1 = parseInt(prompt("Enter side 1:"));
let s2 = parseInt(prompt("Enter side 2:"));
let s3 = parseInt(prompt("Enter side 3:"));
if (s1 + s2 > s3 && s2 + s3 > s1 && s1 + s3 > s2) {
    if (s1 === s2 && s2 === s3) console.log("Equilateral triangle");
    else if (s1 === s2 || s2 === s3 || s1 === s3) console.log("Isosceles triangle");
    else console.log("Scalene triangle");
} else {
    console.log("Invalid triangle");
}


// // 30. Mini Login System

const storedUsername = "master";
const storedPassword = "0000";
let username = prompt("Enter username:");
let password = prompt("Enter password:");
console.log(username === storedUsername && password === storedPassword ? "Login successful" : "Invalid credentials");