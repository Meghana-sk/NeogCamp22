

function fakeFetch(msg, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`error from server: ${msg}`)
            }
            resolve(`from server: ${msg}`)
        },3000)
    })
}

fakeFetch("Hey")

// Q1. use the fakeFetch() to get data and show on success.

fakeFetch("Chocolate").then(data => {console.log(data)}).catch(e => {console.log(e)})


// Q2. Chaining: Create a function getServerResponseLength(msg) This function will use fakeFetch() internally with the message and return the length of the response received by the server.

// Note: Instead of returning the response from the server this should return the length.

// Hint: It will return in a promise.

const getServerResponseLength = (msg) => {
    fakeFetch(msg).then(data => data.length) //to then, resolve() is called with param "from server: ${msg}" whose length is "from server: ${msg}".length = 20
}
getServerResponseLength("Meghana")



// Q3. Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.

// eg: we get user ID, then only display cart details

const syncCallsToServer = (msg1, msg2) => {
    fakeFetch(msg1).then((data1) => fakeFetch(msg2).then(data2 => console.log("msg2:",{data2}, "msg1:",{data1} )))
}

syncCallsToServer("Hi","Bye")


const parallelCallsToServer = (msg1, msg2) => {
    fakeFetch(msg1).then(d => console.log({d}))
    fakeFetch(msg2).then(d => console.log({d}))

}
