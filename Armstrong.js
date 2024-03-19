// let sum = 0;
// let number = 13;

// let temp = number;
// const numberOfDigits = number.toString().length;

// while (temp > 0) {
//   let rem = temp % 10;
//   sum += rem ** numberOfDigits;
//   temp = parseInt(temp / 10);
// }

// if (sum === number) {
//   console.log(number + " " + "number is Armstrong");
// } else {
//   console.log(number + " " + "number is not Armstrong");
// }

// const min = 1;
// const max = 10000;

// for (let i = min; i <= max; i++) {
//   let temp = i;
//   let sum = 0;
//   const numberOfDigits = i.toString().length;

//   while (temp > 0) {
//     let rem = temp % 10;
//     sum += rem ** numberOfDigits;
//     temp = parseInt(temp / 10);
//   }

//   if (sum == i) {
//     console.log(i);
//   }
// }

let min = 1;
let max = 10000;
let count = 0;

for (let i = min; i <= max; i++) {
  let temp = i;
  let sum = 0;
  let digits = i.toString().length;

  while (temp > 0) {
    let rem = temp % 10;
    sum += rem ** digits;
    temp = parseInt(temp / 10);
  }

  if (sum == i) {
    console.log(i);
    count++;
  }
  // console.log(count)
}
console.log("Total Armstrong numbers:", count);
