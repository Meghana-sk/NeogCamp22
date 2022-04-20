const charAt = (stringInput, index) => {
    if (index !== -1 && index < stringInput.length) {
        return stringInput[index];
    } else {
        return "Provide valid index"
    }
}
console.log("char at", charAt("Meghana",41))