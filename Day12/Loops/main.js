//while loop
//Sum of numbers from 1 to 5

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }
// alert("Sum of numbers from 1 to 5 is = " + sum);

// //Sum of ODD numbers from 1 and 5

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   if (i % 2 != 0) {
//     sum = sum + i;
//   }
//   i++;
// }
// alert("Sum of odd numbers from 1 to 5 is = " + sum);

//Take input from user and add numbers upto

// let sum = 0;
// let i = 1;
// let n = parseInt(prompt("Enter a Integer Value"));
// if (isNaN(n)) {
//   n = 1;
// }

// while (i <= n) {
//   sum = sum + i;
//   i++;
// }

// alert("Sum of numbers from 1 to " + n + " is  " + sum);

//user need to enter exactly 3 numbers and add those

let sum = 0;
let i = 1;

while (i <= 3) {
  {
    let n = parseInt(prompt("Enter  Number"));
    if (!isNaN(n) && n >= 1 && n <= 10) {
      sum = sum + n;
      i++;
    }
  }
}
alert("Sum of numbers you entered is = " + sum);
