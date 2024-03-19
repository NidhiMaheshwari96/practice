let hcf;

const num1 = 12;
const num2 = 4;

const findHcf = (a, b, hcf) => {
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      hcf = i;
    }
  }
  return hcf;
};

const result = findHcf(num1, num2, hcf);
console.log(result);
