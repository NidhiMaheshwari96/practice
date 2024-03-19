const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};

const generatePrimesInRange = (a, b) => {
  let primes = [];

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

const num1 = 10;
const num2 = 20;
const primeNumbers = generatePrimesInRange(num1, num2);
console.log("Prime numbers between", num1, "and", num2, ":", primeNumbers);
