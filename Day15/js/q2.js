//2.Generate 10 random numbers that are divisible by 3 between 15 and 97
let randomNumbers = [];
while(randomNumbers.length < 10) {
  let rNum = Math.floor(Math.random() * (97 - 15 + 1)) + 15;
  if (rNum % 3 === 0) {
    randomNumbers.push(rNum);
  }
}
console.log(randomNumbers);