const areAnagrams = (arg1, arg2) => {
  if (arg1.length !== arg2.length) {
    return false;
  }

  const sorted1 = arg1.split("").sort().join("");
  const sorted2 = arg2.split("").sort().join("");
  return sorted1 == sorted2;
};

const string1 = "listen";
const string2 = "silent";
const string3 = "happy";

console.log(`${areAnagrams(string1, string2)}`);
console.log(`${areAnagrams(string1, string3)}`);
