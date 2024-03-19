// const findPairs = (nums, sum) => {
//   let pairs = [];

//   for (let i = 0; i < nums.length; i++) {
//     let com = sum - nums[i];
//     if (nums.includes(com)) {
//       pairs.push([nums[i], com]);
//     }
//   }
//   return pairs;
// };

// const nums = [15, 12, 4, 16, 9, 8, 24, 0, 5];
// const sum = 24;

// const result = findPairs(nums, sum);
// console.log(result);  // this code will return all the pairs and it contain duplicates array also.

const findPairs = (nums, sum) => {
  let pairs = [];
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let com = sum - nums[i];
    if (map[com] !== undefined) {
      pairs.push([nums[i], com]);
    } else {
      map[nums[i]] = i;
    }
  }
  return pairs;
};

const nums = [15, 12, 4, 16, 9, 8, 24, 0, 5];
const sum = 24;

const result = findPairs(nums, sum);
console.log(result); // this code will return all the pairs and it will not contain duplicates array also.
