const copyStrings = (bigString, smallString) => {
    let mergedString = "";
    for (let i = 0; i < bigString.length + smallString.length; i++) {
        mergedString += (i < bigString.length ?bigString[i] : smallString[i - bigString.length]);
    }
    return mergedString;
}

console.log("merged string",copyStrings("Hello","SK"))