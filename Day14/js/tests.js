var str = "Students corrrect. the errors. in each daily paragraph.";

const sentences = str.split(".");

for (let i = 0; i < sentences.length; i++) {
  sentences[i] = sentences[i].trim();
  const words = sentences[i].split(" ");

  for (let j = 0; j < words.length; j++) {
    alert(words[j]);
  }
}
