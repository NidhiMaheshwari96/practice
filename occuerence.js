const str = "nidhi";
const letter = "i";

const findLetter = (str, letter) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
};

const result = findLetter(str, letter);
console.log(result);

// const result = str.includes(letter);
// console.log(result);
