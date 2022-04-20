const findMax = (...arrayInput) => {
    let max = arrayInput[0];
    for(let i = 1; i < arrayInput.length; i++) {
        if (arrayInput[i] > max) {
            max = arrayInput[i];
        }
    }
    return max;
}

console.log("max",findMax(3,5,4,6,7,10,8))