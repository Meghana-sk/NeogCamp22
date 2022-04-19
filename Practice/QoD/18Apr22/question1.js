const strLength = (stringInput) => {
    let length = 0;
    for(letter of stringInput) {
        length++;
    }
    return length;
}

console.log(strLength("Meghana S K"))