function reverseNumber(nums) {
  //  const newNum = nums.toString().split("").reverse().join("");

  let reverse = 0;

  while (nums > 0) {
    let digit = nums % 10;
    reverse = reverse * 10 + digit;
    nums = Math.floor(nums / 10);
  }
  return reverse;
}

const nums = 521;

const result = reverseNumber(nums);
console.log(result);
