const arr = ["cat", "dog", "elephant", "ok", "tac", "god"];

const wordGroup = {};

const Sorted = (word) => {
  return word.split("").sort().join("");
};

arr.forEach((word) => {
  const sortedWord = Sorted(word);

  if (wordGroup[sortedWord]) {
    wordGroup[sortedWord].push(word);
  } else {
    wordGroup[sortedWord] = [word];
  }
});

const oppositeWord = [];

for (let key in wordGroup) {
  let group = wordGroup[key];
  if (group.length > 1) {
    oppositeWord.push(group);
  }
}

console.log(oppositeWord);
