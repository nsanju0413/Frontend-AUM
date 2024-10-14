let str = "   Hello, World!   ";

alert("Original String : " + str);
// 1. toUpperCase()
let upperStr = str.toUpperCase();
console.log(upperStr); // "   HELLO, WORLD!   "

// 2. toLowerCase()
let lowerStr = str.toLowerCase();
console.log(lowerStr); // "   hello, world!   "

// 3. replace()
let replacedStr = str.replace("World", "JavaScript");
console.log(replacedStr); // "   Hello, JavaScript!   "

// 4. trim()
let trimmedStr = str.trim();
console.log(trimmedStr); // "Hello, World!"

// 5. split()
let arr = trimmedStr.split(", ");
console.log(arr); // ["Hello", "World!"]

// 6. concat()
let concatStr = "Greetings! ".concat(trimmedStr);
console.log(concatStr); // "Greetings! Hello, World!"

// 7. substring()
let subStr = trimmedStr.substring(0, 5);
console.log(subStr); // "Hello"

// 8. slice()
let slicedStr = trimmedStr.slice(7, 12);
console.log(slicedStr); // "World"

// 9. padStart()
let paddedStartStr = "5".padStart(3, "0");
console.log(paddedStartStr); // "05"

// 10. padEnd()
let paddedEndStr = "5".padEnd(3, "0");
console.log(paddedEndStr); // "500"

// 11. repeat()
let repeatedStr = "abc".repeat(3);
console.log(repeatedStr); // "abcabcabc"

// 12. replaceAll()
let strWithBanana = "Banana, Banana, Banana";
let replacedAllStr = strWithBanana.replaceAll("Banana", "Apple");
console.log(replacedAllStr); // "Apple, Apple, Apple"

// 13. charAt()
let char = trimmedStr.charAt(1);
console.log(char); // "e"

// 14. charCodeAt()
let charCode = trimmedStr.charCodeAt(0);
console.log(charCode); // 72 (Unicode value for 'H')

// 15. replace() with regex
let regexReplacedStr = "The rain in Spain stays mainly in the plain".replace(
  /ain/g,
  "123"
);
console.log(regexReplacedStr); // "The r123 in Sp123 stays m123ly in the pl123"

// Combining methods
let combinedStr = str
  .trim()
  .toUpperCase()
  .replace("WORLD", "UNIVERSE")
  .concat("!!!");
console.log(combinedStr); // "HELLO, UNIVERSE!!!"
