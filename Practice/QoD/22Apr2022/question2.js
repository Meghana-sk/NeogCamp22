//Q. Write a program to compute sum of all digits 1234 => 1+2+3+4 = 10

const sumOfAllDigits = (number) => {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
};

console.log(sumOfAllDigits(1224));
