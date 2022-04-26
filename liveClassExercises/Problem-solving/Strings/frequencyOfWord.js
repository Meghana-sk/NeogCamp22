// Given a string count the number of time each word has occurred in the string.
// Input: "Hello from hello to hello"
// Output: {
// "Hello":1,
// "from":1,
// "hello":2,
// "to":1
// }

const countFrequencyOfWord = (stringInput) => {
    const subStrings = stringInput.split(" ");
    console.log(subStrings)
    let prevStr = "";
    const frequencyArray = {}
    for(let i = 0 ; i < subStrings.length; i++) {
        if(subStrings[i] !== frequencyArray[0]) {
            frequencyArray.push(subStrings[i])
        }
    }
}

countFrequencyOfWord("Hi hi Hi")