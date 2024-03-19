const num = 20;

const findFactore = (num) => {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
};

findFactore(num);
