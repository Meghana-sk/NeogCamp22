// Q. write a program to convert Farhenite to Celsius

// C = (F - 32) * 5 / 9

const convertFarheniteToCelsius = farhenite => (farhenite - 32) * 5 / 9;

console.log(convertFarheniteToCelsius(56).toFixed(5))