// simple //

let num = [2, 3, 4, 16, 19, 21, 31, 41];

// if (num <= 1) {
//   console.log("Number is not prime");
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       isPrime = false;
//     }
//   }
//   isPrime == true
//     ? console.log("Number is prime")
//     : console.log("Number is not prime");
// }

const checkPrime = (num) => {
  let isPrime = true;
  if (num <= 1) {
    console.log("Number is not prime");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
      }
    }
    return isPrime == true ? true : false;
  }
};
// const checker = checkPrime(num);
// console.log(checker);
num.map((row, i) => {
  if (checkPrime(row)) {
    console.log(row + " " + "prime");
  } else {
    console.log(row + " " + "no prime");
  }
});
