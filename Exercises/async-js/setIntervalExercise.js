// Q1. write a function which takes a message and time. The function should print that message every X interval.

const printMsgEvery5secs = (msg, timeInterval) => {
    setInterval( () => {
        console.log(msg);
    }, timeInterval)
}

// printMsgEvery5secs("Hi. I am printing every 5 secs", 5000);

//Q2. Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" 
let intervalID;
const countDown = (number) => {
        intervalID = setInterval(() => {
        number--;
        (number > 0 ) ? console.log("Your time starts in ", number) : stopTimer()
    }, 1000)
}

const stopTimer = () => {
        clearInterval(intervalID)
        console.log("BANG BANG") 
}

countDown(10)

