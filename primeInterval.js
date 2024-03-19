const min = 2;
const max = 17;

for (let i = min; i <= max; i++) {
  let isPrime = false;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = true;
    }
  }
  if (i > 1 && isPrime == false) {
    console.log(i);
  }
}
