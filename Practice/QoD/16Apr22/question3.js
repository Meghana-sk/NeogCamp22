const replaceChar = (stringInput,c1,c2) => {
    let modifiedString = "";
    for(let i = 0; i < stringInput.length; ++i) {
        if (stringInput[i] === c1) {
            modifiedString += c2;
        } else {
            modifiedString += stringInput[i];
        }
    }
    return modifiedString;
}

console.log("replace", replaceChar("Meghana",'a','K'))