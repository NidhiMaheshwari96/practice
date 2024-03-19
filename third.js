const arr = [3, 2, 5, 18, 20, 50, 34];

const findthird = (arr) => {
  let first = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }

  return third;
};
const result = findthird(arr);
console.log(result);
// function findThreeLargestNumbers(arr) {
//   if (arr.length < 3) {
//     return "Array should contain at least three numbers.";
//   }

//   let first = -Infinity;
//   let second = -Infinity;
//   let third = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > first) {
//       third = second;
//       second = first;
//       first = arr[i];
//     } else if (arr[i] > second) {
//       third = second;
//       second = arr[i];
//     } else if (arr[i] > third) {
//       third = arr[i];
//     }
//   }

//   return third;
// }

// const numbers = [12, 45, 7, 23, 98, 56, 32];
// const largestThree = findThreeLargestNumbers(numbers);
// console.log("The three largest numbers are:", largestThree);
