//Random Number btw 1 to 10
let randomNumber = Math.ceil(Math.random() * 10);

let guess = prompt("Enter your number between 1 to 10 : ");

if (randomNumber == guess) {
  alert("You Won!!  its " + randomNumber);
} else {
  alert("You Lost! the correct number is  " + randomNumber);
}
