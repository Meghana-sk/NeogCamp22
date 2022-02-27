// Q1. Write a function which can tell whether a number is less than 10 or not. Supply this function to array.filter() to get an array with no number greater than 10 in it

const numArray = [1, 5, 99, 67, 88, 2, 3, 7, 11];
const isNumLessThan10 = el => el < 10;
console.log(numArray.filter(isNumLessThan10));

////////////////////////////////////////////////////////////////////////////////////////////

// Q2. Given an array of numbers, return object for each item

const numbers = [4, 6, 60, 30];
console.log(numbers.map(no => ({ no })));

////////////////////////////////////////////////////////////////////////////////////////////

// Q3. Given an aeeay of numbers. Calculate sum 

const numbersArray2 = [2, 1, 50, 98, 4];
const mappedNumbers = numbersArray2.map(el => el);

const sumReducer = (accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
};

console.log(mappedNumbers.reduce(sumReducer, 0));