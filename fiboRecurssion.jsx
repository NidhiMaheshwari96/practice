const num = 10;

const fibonaccie = (num) => {
  if (num < 2) {
    return num;
  } else {
    fibonaccie(num - 1) + fibonaccie(num - 2);
  }
};

if (num <= 0) {
  console.log("enter positive number");
} else {
  for (let i = 0; i < num; i++) {
    console.log(fibonaccie(i));
  }
}
