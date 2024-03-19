const num = 5;

function sum(a) {
  if (a > 0) {
    return a + sum(a - 1);
  } else {
    return a;
  }
}

const result = sum(num);
console.log(result);
