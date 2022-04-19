//Q Write a program that masks all but last four characters of the string "5565534276455423" to #

const maskString = (stringInput, mask) => {
    let modifiedString = "";
    for (let i = 0; i < stringInput.length; i++) {
        if (i >= stringInput.length - 4) {
            modifiedString += stringInput[i];
        } else {
             modifiedString += mask;   
        }
    }
    return modifiedString;
}

console.log(maskString("5565534276455423","#"))