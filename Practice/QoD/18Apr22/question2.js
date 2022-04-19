//Q1. Write a function that removes time from the date format Wed April 18, 7pm

const removeSubString = (stringInput) => {
    let splitString = stringInput.split(" ")
    let modifiedString = "";
    //all words except last word will be concatenated since last word has comma(,)
    for(let word = 0; word < splitString.length - 2; word++) {
        modifiedString += (splitString[word] + ' ');
    }
    let lastWord = splitString[splitString.length - 2];
    let newLastWord="";
    for(let j = 0; j < lastWord.length;j++) {
        if(lastWord[j] !== ",") {
            newLastWord += (lastWord[j]);
        }
    }
    modifiedString += newLastWord;
    return modifiedString;
}

console.log(removeSubString("Wed April 28, 7pm"))