let num = 12343212;
const numCon = num.toString();

const reverseNum = numCon.split("").reverse().join("");
if (num == reverseNum) {
  console.log("palindrom");
} else {
  console.log("nope");
}
