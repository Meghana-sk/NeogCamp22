const toUpperCase = (stringInput) => {
  let modifiedString = "";
  if (stringInput) {
    for (let i = 0; i < stringInput.length; i++) {
      if (stringInput.charCodeAt(i) > 96) {
        modifiedString += String.fromCharCode(stringInput.charCodeAt(i) - 32)
      } else {
        modifiedString+=stringInput[i];
      }
    }
  }
  return modifiedString;
}

console.log("touppercase:",toUpperCase("mEGhana"))