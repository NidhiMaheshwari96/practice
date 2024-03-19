const name = "Nidhi Maheshwari";
const newName = name.split("").filter((data) => data != " ");
function nameCheck(val) {
  const duplicate = {};
  const result = [];

  for (let i of val) {
    if (duplicate[i]) {
      duplicate[i]++;
    } else {
      duplicate[i] = 1;
    }
  }

  for (const [char, count] of Object.entries(duplicate)) {
    if (count > 1) {
      console.log(char, count);
    }
  }
}

nameCheck(newName);

const uniqueName = (val) => {
  let array = [];

  for (let i = 0; i < val.length; i++) {
    if (array.indexOf(val[i]) == -1) {
      array.push(val[i]);
    }
  }

  console.log(array, "array");
};

uniqueName(newName);
