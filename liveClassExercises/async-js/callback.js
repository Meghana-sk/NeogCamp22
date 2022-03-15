// Q1. Write a function strLength() which takes

// Your name
// A function which it will call with the length of your name
// Now, call this function with the two parameters.

// Your name. This is simple.
// A function. This function will get the length of the string. Use that length to print a message: OMG! my name is X char long!

const strLength = (name, nameLength) => {
    nameLength(name.length);
}

const printName = (nameLength) => {
    console.log(`my name is ${nameLength} long`)
}

strLength("Meghana",printName);

// Q2. function which takes two callbacks#
// challenge#
// Write a function willThanosKillMe() . This function will take three parameters

// Your name
// Function to call if Thanos doesn't kill you.
// Function to call if Thanos does kill you.
// This function will call success callback if your name has even characters. You won't die.

// But if your name has odd number of characters then you're going to die. Sorry! :(

// Now, call this function with the given parameters. The success function should console a happy message: Yay! I am alive! and the failure function should console your will: Give my bose speakers and apple headphones to my sister

const willThanosKillMe = (name, willThanosKill, willThanosDoesntKill) => {
    if (name.length % 2 === 0) {
        willThanosDoesntKill();
    } else {
        willThanosKill();
    }
}

const kill = () => {
    console.log("Give my bose speakers and apple headphones to my sister")
}

const live = () => {
    console.log("Yay! I am alive!")
}

willThanosKillMe("Meghana",kill,live)


// Q3. use setTimeOut() write a function that takes a message and a delay and print that message after the delay.

const printMsg = (msg, delay) => {
    setTimeout(() => {
        console.log("Hi", msg)
    }, delay)
}

printMsg("Meghana", 5000);
// clearTimeout(printMsg("Meghana",2000)); returns tiemoutID which can be used to clear tiemout
printMsg("Iam fastest",1000)
printMsg("M", 2000);

// Q4.

setTimeout(() => console.log('A'), 0)
setTimeout(() => console.log('C'), 0)
setTimeout(() => console.log('B'), 0)


// Q5.
setTimeout(() => console.log('A1'), 1000)
setTimeout(() => console.log('B1'), 400)
setTimeout(() => console.log('C1'), 1300)

//Q6.
console.log('A2')
setTimeout(() => console.log('B2'), 0)
console.log('C2')
