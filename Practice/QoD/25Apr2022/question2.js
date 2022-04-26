// Q2. Calculate sum of n digits

const sumOfNDigits = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Solution 2

const sumofN = N => N * (N+1) /2;

console.log(sumOfNDigits(100))

console.log(sumofN(100))