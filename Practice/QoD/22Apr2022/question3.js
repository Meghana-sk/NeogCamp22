//Q. Convert decimal to binary 5 => 101
// 5 % 2 = 1, 2 % 2 = 0, 1 % 2= 0, 

const convertDecimalToBinary = (number) => {
    let binary = 0;
    while(number > 0) {
        binary += ((binary * 10) + (number % 2))
        number = Math.floor(number / 2)
    }
    return binary
}

console.log(convertDecimalToBinary(4))