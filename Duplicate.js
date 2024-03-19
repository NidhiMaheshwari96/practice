const findDuplicate = (arr) => {
  const seenarr = {};
  const result = [];

  for (const i of arr) {
    if (seenarr[i]) {
      seenarr[i]++;
    } else {
      seenarr[i] = 1;
    }
  }
  //   return seenarr; //if we do that then we get { '1': 1, '2': 1, '3': 2, '4': 1, '6': 2, '7': 2 } output like this

  for (const [i, count] of Object.entries(seenarr)) {
    if (count > 1) {
      result.push({ element: parseInt(i), count });
    }
  }

  return result; /* output[
    { element: 2, count: 2 },
    { element: 3, count: 2 },
    { element: 6, count: 3 },
    { element: 7, count: 3 } 
  ]  */
};

const arr = [1, 4, 3, 2, 6, 7, 3, 6, 7, 7, 6, 2];
// const arr = "Nidhi Maheshwari";
const result = findDuplicate(arr);
// console.log(result);

const str = "Nidhi Maheshwari";
const newStr = Array.from(str);

// const result2 = newStr.filter((char) => char != " ").join("");
// const newResult = new Set(result2);
// console.log(newResult);
const result2 = newStr.filter((char) => char != " ");
const findUnique = (data) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    if (array.indexOf(data[i]) == -1) {
      array.push(data[i]);
    }
  }
  return array.join(""); // output NidhMaeswr
};

const unique = findUnique(result2);
console.log(unique);
