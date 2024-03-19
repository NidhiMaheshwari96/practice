const num1 = 3;
const num2 = 4;
const num3 = 5;
const num4 = 7;

// const min = num1 > num2 ? num1 : num2;
const min = Math.max(num1, num2, num3, num4);

const findLcm = (a, b, c, d, min) => {
  while (true) {
    if (min % a == 0 && min % b == 0 && min % c == 0 && min % d == 0) {
      return min;
      //   console.log(`lcm of both the num is ${min}`);
      break;
    }
    min++;
  }
};

const result = findLcm(num1, num2, num3, num4, min);
console.log(result);
