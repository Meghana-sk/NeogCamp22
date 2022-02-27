// Q1. Given an array of integers
// Find the sum of all odd numbers

const numbers = [45, 4, 98, 103, 79, 44];

console.log(numbers.reduce((acc, curr) => {
    if (curr % 2 !== 0) {
        acc += curr;
    }
    return acc;
}))

// Q2. Find sum of all numbers at odd indices
const calcSum = (n, sum) => n + sum;
const elAtOddIndices = numbers.filter(el => numbers.indexOf(el) % 2 !== 0);

console.log(elAtOddIndices.reduce((acc, curr) => acc += curr))

// Q3.