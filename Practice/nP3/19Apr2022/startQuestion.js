// const convertToArray = obj =>{
//   return Object.keys(obj).map(key => [ key , obj[key] ] )
// }

// console.log(convertToArray({name:'Jove' , age:10 , noOfFriends:5}))

// Approach 2


const convertToArray = (objectInput) => {
  let convertedObjArray = [];
  for (let i = 0; i < Object.keys(objectInput).length; i++) {
    let objArray = [];
    objArray.push(Object.keys(objectInput)[i]);
    objArray.push(Object.values(objectInput)[i]);
    convertedObjArray.push(objArray);
  }
  return convertedObjArray;
};

console.log(convertToArray({ name: "SK", year: 25 }));