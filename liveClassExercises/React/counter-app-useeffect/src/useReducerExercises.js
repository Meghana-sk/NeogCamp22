//Take an array and calculate the sum of even and odd numbers using reduce.
const numList = [1, 3, 55, 22, 44];

function oddAndEvenSumReducer(acc, value) {
  if (value % 2 === 0) {
    return { ...acc, even: acc.even + value };
  } else {
    return { ...acc, odd: acc.odd + value };
  }
}

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, {
  odd: 0,
  even: 0
});

console.log(oddAndEvenSum);

//Q2.Change the program to accommodate an array of objects. The object will have two keys: type and payload. The type will tell you whether the number is even or odd and the payload will have the number.

// Note: This means you don't need the odd/even logic in the reducer function anymore.
const numList2 = [
    { type: 'odd', payload: 1 },
    { type: 'odd', payload: 3 },
    { type: 'odd', payload: 55 },
    { type: 'even', payload: 22 },
    { type: 'even', payload: 44 },
  ]
  
  // Q: modify your reducer function to accommodate this.
  const evenOddSumReducer = (acc, value) => {
      if (value.type === 'odd') {
          return {...acc, odd: acc.odd + value.payload}
      } return {...acc, even: acc.even + value.payload}
  }

  console.log(numList2.reduce(evenOddSumReducer, {odd: 0,even: 0}))

  //Q3. Now, remove if/else and use a switch statement instead. Let's see how we write switch
  const numList3 = [
    { type: 'odd', payload: 1 },
    { type: 'odd', payload: 3 },
    { type: 'odd', payload: 55 },
    { type: 'even', payload: 22 },
    { type: 'even', payload: 44 },
  ]
  
  // Q: modify your reducer function to accommodate this.
  const evenOddSumReducerUsingSwitch = (acc, value) => {
      switch (value.type) {
        case 'odd': 
            return {...acc, odd: acc.odd + value.payload}
        case 'even':
            return {...acc, even: acc.even + value.payload}
        default:
            return {...acc}      }
  }

  console.log(numList3.reduce(evenOddSumReducerUsingSwitch, {odd: 0,even: 0}))