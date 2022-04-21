function sum (a,b,c) 
    {
        return function(b) {
        return function(c) {
                    return a+b+c;
                }
           
            
        }
    }

console.log(sum(1)(2)(3))


const promise = new Promise((resolve,reject) =>{
    console.log("Hi")
    reject("HEY")
    console.log("Bye")
})

promise.then(data => console.log(data)).catch(e =>console.log(e))

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('promise1:', promise1);
console.log('promise2:', promise2);
