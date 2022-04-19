const input = "Hey aman Jain";
//HAJ

const abbrevResult = input
  .split(" ")
  .map((word) => word[0].toUpperCase())
  .join("");

console.log(abbrevResult);

//solution2
const abbrevResult2 = input
  .split(" ")
  .reduce((acc, currentValue) => (acc += currentValue[0].toUpperCase()), "");
console.log("---", abbrevResult2);