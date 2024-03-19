const arr = [3, 2, 5, 18, 20, 50, 34];

const findSecond = (arr) => {
  let first = arr[0];
  let second = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
};

const result = findSecond(arr);
console.log(result);
