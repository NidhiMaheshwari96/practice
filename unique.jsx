const myArray = [1, 2, 2, 3, 4, 4, 5];
// const uniqueSet = new Set(myArray);  /// using Set Method
// console.log(uniqueSet);

// using noraml way

// const FindUniquess = (arr) => {
//   let uniqueArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//       uniqueArray.push(arr[i]);
//     }
//   }

//   return uniqueArray;
// };

// const unique = FindUniquess(myArray);
// console.log(unique);

const newArray = myArray.filter((value, index, self) => {
  return self.indexOf(value) == index;
});
console.log(newArray);
