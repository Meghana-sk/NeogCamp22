//Q. Remove all spaces from the string

const removeSpaces = stringInput => {
    let modifiedString = "";
    for(let i = 0; i < stringInput.length; i++) {
        if (stringInput[i] !== " ") {
            modifiedString += stringInput[i];
        }
    }
    return modifiedString;
}

console.log(removeSpaces("  I am neogrammer   "))