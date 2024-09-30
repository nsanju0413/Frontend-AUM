const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 100);
let sum = prompt(`Enter the sum of ${num1} + ${num2}: `);

if (sum == num1 + num2) {
  alert("True");
} else {
  alert("False");
}
