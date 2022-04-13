//Q1. Given a and b, funciton should return a power b
//power(2,3) => 8

const power = (base, exponent) => {
  let powerOfNumber = 1;
  for (let i = 0; i < exponent; i++) {
    powerOfNumber *= base;
  }
  return powerOfNumber;
};

console.log("--power-", power(4, 3));
