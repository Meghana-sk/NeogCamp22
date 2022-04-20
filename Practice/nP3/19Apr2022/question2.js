// Given a name as an input string. Pick out the initial letter of each word and abbreviate the name. The sentence will contain only alphabetic words and no numbers or roman numerals.

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