/*   */
const arr = [21, 4, 5, 10, 3, 6];

// const newArr = arr.sort((a, b) => a - b);
// console.log(arr);

// const a = arr.length;

// bubble sort

// for (let i = 0; i < a - 1; i++) {
//   for (let j = 0; j < a - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

// using function  //
// const bubbleSort = (arr) => {
//   const a = arr.length;
//   for (let i = 0; i < a - 1; i++) {
//     for (let j = 0; j < a - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };
// const sortedarr = bubbleSort(arr);
// console.log(sortedarr);

// using do while ///

const bubbleSort = (arr) => {
  const a = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < a - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};
const sortedarr = bubbleSort(arr);
console.log(sortedarr);
