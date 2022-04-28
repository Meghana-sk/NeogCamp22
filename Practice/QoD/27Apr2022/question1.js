// Q1. Given an obj, invert its key and value for each entry.


const obj = {
    "name": "Doraemon",
    "age": 5,
    "haricolor": "none",
    eyes: "oval"
}

const keys = Object.keys(obj);
const values = Object.values(obj)
const obj2 = {};
for (let i = 0; i < keys.length; i++) {
    obj2[values[i]] = keys[i];
}

console.log(obj,"--",obj2)