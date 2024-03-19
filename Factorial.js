const num = 5;

const NumFactorial = (num) => {
  if (num < 0) {
    console.log("plase enter positive number");
  } else if (num == 0) {
    console.log("Factorial is 1");
  } else {
    let temp = 1;
    for (let i = 1; i <= num; i++) {
      temp *= i;
    }
    return temp;
  }
};

const factorial = NumFactorial(num);
console.log(factorial);
