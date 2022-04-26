// Q. Write a program to print N odd numbers in descending order

const printNOddNumbers = (n) => {
    for(let i = n; i >= 1; i--) {
        console.log(2*i -1)
    }
}

printNOddNumbers(7)