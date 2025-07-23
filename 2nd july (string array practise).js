
// 🧠 STRING QUESTIONS (5)

// 1. **Reverse a String**  
//    Write a function `reverseString(str)` that takes a string and returns it reversed.  
//    Example: `"hello" → "olleh"`

// Ans1
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


// 2. **Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`

// Ans2
function isPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let reversed = reverseString(lowerStr);
  return lowerStr === reversed;
}


// 3. **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`

// Ans3
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}



// 4. **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`

// Ans4
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      let capitalized = word[0].toUpperCase() + word.slice(1);
      result.push(capitalized);
    } else {
      result.push(word);
    }
  }

  return result.join(" ");
}


// 5. **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`

// Ans5
function charFrequency(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}




// 🧠 ARRAY QUESTIONS (5)

// 1. **Remove Duplicates**  
//    Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
//    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`


// Ans1
function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let found = false;

    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === value) {
        found = true;
        break;
      }
    }

    if (!found) {
      unique.push(value);
    }
  }

  return unique;
}


// 2. **Flatten an Array**  
//    Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`

// Ans2
function flattenArray(arr) {
  let flat = [];

  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i];

    for (let j = 0; j < subArray.length; j++) {
      flat.push(subArray[j]);
    }
  }

  return flat;
}


// 3. **Find Max and Min**  
//    Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }`


// Ans3
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max: max, min: min };
}


// 4. **Sum of Even Numbers**  
//    Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.  
//    Example: `[1, 2, 3, 4, 5, 6] → 12`


// Ans4
function sumEven(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}


// 5. **Group by Type**  
//    Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`

// Ans5
function groupByType(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let type = typeof item;

    if (result[type]) {
      result[type].push(item);
    } else {
      result[type] = [item];
    }
  }

  return result;
}







