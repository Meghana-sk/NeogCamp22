//Q3. Write a js program to reverse a number

const reverseNumber = number => {
    let reverse = 0;
    while (number > 0) { // 1234 123 12 1
        reverse = reverse * 10 + number % 10; //4 43 432 4321
        number = Math.round(number / 10); // 123 12 1 0
    }
    return reverse;
}

console.log(reverseNumber(1234))