const obj = [
  {
    name: "nidhi",
    marks: 300,
    rollNo: 12,
  },
  {
    name: "qwerty",
    marks: 200,
    rollNo: 12,
  },
  {
    name: "qaz",
    marks: 123,
    rollNo: 12,
  },
];

// const highestMark = obj.reduce((pre, current) => {
//   return pre.marks > current.marks ? pre : current;
// });

// console.log(highestMark.name);

let highestMark = 0;
let student = "";

for (let i = 0; i < obj.length; i++) {
  if (obj[i].marks > highestMark) {
    highestMark = obj[i].marks;
    student = obj[i].name;
  }
}

console.log("highest Marks" + " " + highestMark);
console.log("Name of the student who has highest Marks" + " " + student);
let sum = 0;

for (let i = 0; i < obj.length; i++) {
  sum += obj[i].marks;
}

console.log("averge of the marks" + " " + parseInt(sum / obj.length));
