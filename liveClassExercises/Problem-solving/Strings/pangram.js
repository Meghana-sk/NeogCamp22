//check pangram or not

const checkPangram = stringInput => {
    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ']

    for (let i = 0; i < alphabets.length; i++) {
        // console.log(alphabets.includes(stringInput[i].toLowerCase()),stringInput[i])
        if (!stringInput.includes(alphabets[i])){
        // if (alphabets.includes(stringInput[i].toLowerCase()))
            return false;
        }
    }
    return true;
}

console.log(checkPangram("a quick brown fox jumps over the lazy dog"))