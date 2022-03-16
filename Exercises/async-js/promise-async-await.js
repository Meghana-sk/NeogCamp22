// const promise = new Promise(function (resolve, reject) {
//     const string1 = "geeksforgeeks";
//     const string2 = "geeksforgeeks";
//     if (string1 === string2) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
  
// //   promise
// //     .then(function () {
// //       console.log("Promise resolved successfully");
// //     })
// //     .catch(function () {
// //       console.log("Promise is rejected");
// //     });

//     const helperPromise = function () {
//         return new Promise(function (resolve, reject) {
//             const string1 = "geeksforgeeks";
//             const string2 = "geeksforgeeks";
//             if (string1 === string2) {
//               resolve();
//             } else {
//               reject();
//             }
//           });
      
//       };
      
//       async function demoPromise() {
//         try {
//           let message = await helperPromise();
//           console.log(message);
//         } catch (error) {
//           console.log("Error: " + error);
//         }
//       }
      
//       demoPromise();


// Q1. Given the syntax above. Call fakeFetch() with some msg and use await to get the data and then print it.

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

const awaitDemo = async (msg) => {
    try {
    const data = await fakeFetch(msg);
    console.log(data)
    } catch(error) {
        console.error(error)
    }
} 

// awaitDemo("Hey")

//Q: Use async await Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.

const syncCallsToServer = async(msg1,msg2) => {
    try {
        const data1Success = await fakeFetch(msg1);
        try {
        const data2success = await fakeFetch(msg2) //until line 72 is executed, this line is not executed
        console.log(data2success)
        } catch(err) {
            console.log(err)
        }
    console.log({data1Success})
    } catch(error) {
        console.log(error)
    }
}

// syncCallsToServer("Hey","Bye")


//Q. How would you do two parallel calls without blocking each other?

const parallelCallsAsync = async(msg1,msg2) => {
    try {
        // const data = await Promise.all([fakeFetch(msg1,true),fakeFetch(msg2)]) //fails if one promise fails
        const data = await Promise.allSettled([fakeFetch(msg1,true),fakeFetch(msg2)]) //fails if one promise fails
        //Promise.all() will reject immediately upon any of the input promises rejecting. In comparison, the promise returned by Promise.allSettled() will wait for all input promises to complete, regardless of whether or not one rejects. Consequently, it will always return the final result of every promise and function from the input iterable.
        console.log({data})
    } catch(err) {
        console.log(err);
    }
}

parallelCallsAsync("Meghana","SK")