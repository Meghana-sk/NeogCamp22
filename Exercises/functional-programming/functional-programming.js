// 1. Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

const changeEvenNumberToOdd = el => el % 2 == 0 ? el + 1 : el;

const ordinaryArray = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const oddArrayChange = ordinaryArray.map(changeEvenNumberToOdd);

console.log(ordinaryArray, oddArrayChange);

/////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Get the names in an array for only those who have a cycle.

// const family = [
//   {
//     name    : 'Tanay',
//     haveCycle : true
//   },
//   {
//     name     : 'Akanksha',
//     haveCycle : false
//   },
//   {
//     name     : 'Tanvi',
//     haveCycle : true
//   },
// 	{
//     name     : 'Kanak',
//     haveCycle : false
//   }
// ];

// Your output should be: ['Tanay', 'Tanvi']

const family = [{
        name: 'Tanay',
        haveCycle: true
    },
    {
        name: 'Akanksha',
        haveCycle: false
    },
    {
        name: 'Tanvi',
        haveCycle: true
    },
    {
        name: 'Kanak',
        haveCycle: false
    }
];

const dataWithCycle = data => data.filter(el => el.haveCycle);

const getPersonWithCycle = dataWithCycle(family).map(el => el.name)

console.log(getPersonWithCycle)

/////////////////////////////////////////////////////////////////////////////////////////////////


// 3. Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be: [2, 6, 8, 4]

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

console.log(arr.filter(el => el < 8 && (el % 2 === 0)));

/////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.
// const arr = [‘eat’, ‘sleep’, ‘repeat’, ‘code’];

// Your output should be: ['repeat']

const arr1 = ["eat", "sleep", "repeat", "code"];
console.log(arr1.filter(el => el.length > 5));

/////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Given an array. Write a function to get the sum of all elements which are greater than 50.
// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

// Your output should be: 190

const arr2 = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const reducerToGetValGT50 = (acc, curr) => {
    if (curr > 50) {
        acc += curr;
    }
    return acc;
}

console.log(arr2.reduce(reducerToGetValGT50, 0))

////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Given an array. Write a function to find the product of all elements which are even.
// const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

const arr3 = [1, 2, 3, 7, 5, 6, 8, 9];

const evenproduct = (acc, curr) => {
    if (curr % 2 === 0) {
        acc *= curr;
    }
    return acc;
}

console.log(arr3.reduce(evenproduct));

/////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Given an array of objects. Write a function to find the sum of ages of each person.
// const arr = [
// 	{
// 		name: "Jay",
// 		age: 60
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36
// 	},
// 	{
// 		name: "Manny",
// 		age: 16
// 	},
// 	{
// 		name: "Joe",
// 		age: 9
// 	}
// ]


// Your output should be: 121 /*** 60+36+16+9 ***/

const arr4 = [{
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
]

const ageSum = arr4.map(el => el.age);

const ageSumReducer = (acc, curr) => { acc += curr; return acc; }

console.log(ageSum.reduce(ageSumReducer))

/////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

// const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}

const arr5 = ["You", "all", "are", "rockstars"];
const objFromArray = {...arr5 }
console.log(objFromArray);
const arrayToObjReducer = (acc, curr, index) =>
    ({...acc, [index]: curr });
console.log(arr5.reduce(arrayToObjReducer, {}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.
// const arr = [
// 	{
// 		name: "Apple"
// 	},
// 	{
// 		name: "Mango"
// 	},
// 	{
// 		name: "Potato"
// 	},
// 	{
// 		name: "Guava"
// 	},
// 	{
// 		name: "Capsicum"
// 	}
// ]



// Your Output should be:
// [
// 	{
// 		name: "Apple",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Mango",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Potato"
// 		type: "vegetable"
// 	},
// 	{
// 		name: "Guava",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Capsicum",
// 		type: "vegetable"
// 	}
// ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. const inventory = [
// {name: 'fans', quantity: 3},
// {name: 'chimneys', quantity: 0},
// {name: 'bulbs', quantity: 5},
// {name: 'stove', quantity: 1}    
//   ];


// Question:
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.

const inventory = [
    { name: 'fans', quantity: 3 },
    { name: 'chimneys', quantity: 0 },
    { name: 'bulbs', quantity: 5 },
    { name: 'stove', quantity: 1 }
];

const itemsLessThan2 = inventory.filter(el => el.quantity < 2);

const totalQuantity = inventory.reduce((acc, curr) => {
    acc += curr.quantity;
    return acc;
}, 0)

const zeroQuantityItem = inventory.filter(el => el.quantity === 0) ///??? template literals can not print arrays ofobjects?

// console.log(`items less than 2: ${itemsLessThan2},total quantity: ${totalQuantity},zero quantity: ${zeroQuantityItem}`)
console.log(itemsLessThan2, totalQuantity, zeroQuantityItem)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Given an array. Write a function to join all elements of the array with a hyphen in between them
// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

// Your output should be: 
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

const colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

const hypenAdder = (acc, curr) => acc += '-' + curr;

console.log(colors.reduce(hypenAdder, colors[0]))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Write a function that accepts a number as input and inserts hyphens between every two even numbers.

// If your input is: 24345687

// Your output should be: 2-43456-87

// const number = 24345687;
// const insertHyphenBwEvenNo = (acc, curr, index) => {
//     console.log('//', acc, curr)
//     if (acc % 2 === 0 && curr % 2 === 0) {
//         acc += '-' + curr;
//         console.log("EVEN", acc, curr)
//     } else {
//         acc += curr;
//     }
//     return acc;
// }

// console.log(number.toString().split('').reduce(insertHyphenBwEvenNo)) // CHECK

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())

// If your input is: "neogrammer"
// Your output should be: "NEOGRAMMER"

// If your input is: "neoG"
// Your output should be: "NEOG"
const stringInput = "neogrammer";

console.log(stringInput.toUpperCase())

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14.Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

// If your input is: "neoG"
// Your output should be: "nEOg"

const stringIp = "Meghana";

console.log(stringIp.split('').map(el => (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') ? el.toUpperCase() : el.toLowerCase()));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15.Flatten an array without using flat().

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];


// Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']

console.log(input.reduce((acc, curr) => [...acc, ...curr], []))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 16. Count the occurrences of distinct elements in the given array.

// const input = [
// ['a', 'b', 'c'],
// ['c', 'd', 'e'],
// ['e', 'd', 'f'],
// ];

// Your output should be: { a: 1, b: 1, c: 2, d: 2, e: 2, f: 1 }