//get a number from user and check wethaer its palindrome or not

let input = prompt("Enter a value to check if it is palindrome ?");

let reversedInput = input.split("").reverse().join("");

if (input == reversedInput) {
  alert(input + ` is a palindrome.`);
} else {
  alert(input + ` is not a palindrome`);
}
