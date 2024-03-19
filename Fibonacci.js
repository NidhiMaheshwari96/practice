const number = 10;

const fabonnaci = (number) => {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  //   const arry = [n1];
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    // arry.push(n1);
  }
  //   return arry;
};

fabonnaci(number);
