const num = 10;

const findFactorial = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
};

if (num >= 0) {
  const result = findFactorial(num);
  console.log(result);
} else {
  console.log("enter the positive number");
}
