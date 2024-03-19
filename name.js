const name = "Nidhi maheshwari";

const countAlphabates = (name) => {
  const alphabetCount = {};
  let totalCharacters = 0;
  for (let i = 0; i < name.length; i++) {
    const character = name[i];
    if (/^[a-zA-Z]$/.test(character)) {
      if (!alphabetCount[character]) {
        alphabetCount[character] = 1;
      } else {
        alphabetCount[character]++;
      }
    }
    totalCharacters++;
  }
  return { alphabetCount, totalCharacters };
};

// const { result, totalCharacters } = countAlphabates(name);

// for (const alpha in result) {
//   console.log(`${alpha}: ${result[alpha]}`);
// }
// console.log("Total characters in the name:", totalCharacters);

const { alphabetCount, totalCharacters } = countAlphabates(name);

console.log("Alphabet occurrences in the name:");
for (const alpha in alphabetCount) {
  console.log(`${alpha}: ${alphabetCount[alpha]}`);
}

console.log("Total characters in the name:", totalCharacters);