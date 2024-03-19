const str = "nidhi is wroking in tender";

const reverseString = (str) => {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};

const result = reverseString(str);
console.log(result);
