// Create a function that takes two strings and decides if one is anagram of the other

'use strict';

let isAnagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  else {
    let one = [],
    two = [],
    counter = 0;

    for (let i=0; i < str1.length; i++) {
      one.push(str1[i]);
    }
    for (let i=0; i < str2.length; i++) {
      two.push(str2[i]);
    }

    for (let letter of one) {
      if (two.includes(letter)) {
        counter++;
      }
    }

    if (str1.length === counter) {
      return true;
    }
    else {
      return false;
    }
  }

}

console.log(isAnagram('dog', 'god')); // true
console.log(isAnagram('dog', 'godo')); // false
console.log(isAnagram('doom', 'mood')); // true
console.log(isAnagram('doom', 'moon')); // false
console.log(isAnagram('doom', 'moody')); // false
