// - Tokenize a string
    
//     Input: Banana and Mango
//     Token: a
//     Output: [B, n, n,  ,nd M, ngo]

const tokenize = (stringInput, token) => {
    const tokenizedArray = [];
    let substrings = "";
    for (i = 0; i < stringInput.length; i++) {
        if (stringInput[i] === token) {
            tokenizedArray.push(substrings);
            substrings = "";
        } else {
            substrings += stringInput[i];
            console.log(substrings)
        }
    }
    tokenizedArray.push(substrings)
    return tokenizedArray;
}

//time complexity O(n)
//space O(n) + O(n) => substrings array + tokenized array

console.log(tokenize("Banana and Mango",'a'))