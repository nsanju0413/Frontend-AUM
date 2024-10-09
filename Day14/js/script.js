const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
let names = [];

for (let i = 0; i < 10; i++) {
  let randomLength = Math.floor(Math.random() * 5) + 3;
  let randomName = "";
  for (let j = 0; j < randomLength; j++) {
    randomName += letters[Math.floor(Math.random() * letters.length)];
  }
  names.push(randomName.charAt(0).toUpperCase() + randomName.slice(1));
}

console.log(names);
