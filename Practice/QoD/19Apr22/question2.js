//Q Check for pallindrome considering string has alphanumeric characters
const checkAlphanumeric = input => {
    let letter = "";
    for(let i = 0; i < input.length; i++) {
        letter = input.charCodeAt(i);
        if (!(letter > 47 && !letter < 58) && !(letter >= 65 && letter <= 122)) {
            return false;
        }
    }
    return true;
}

const isPallindrome = stringInput => {
    let pallindrome = false;
    let j=stringInput.length-1;
    for(let i=0 ; i < stringInput.length;i++) {
        if (j >=0 && stringInput[i] === stringInput[j])         {
             pallindrome = true;   
        } else {
            pallindrome = false;
            break;
        }
        j--;
    }
    return pallindrome;
}

const checkPallindromeForAlphanumericInput = inputToCheck => {
    if (checkAlphanumeric(inputToCheck)) {
        return isPallindrome(inputToCheck)
    } else {
        return "Please provide alphanumeric string"
    }
}

console.log(checkPallindromeForAlphanumericInput("123M321*"))

