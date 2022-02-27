// Q1. Take an object with mother name and your age, and create another object and get your sibling's age difference

const meghana = { mother: "Chandramma", age: 24 };

const deepika = {...meghana, age: meghana.age - 1 };

console.log(meghana, deepika)

// Q2. Take an array with 5 colors. Create another array by ading 2 more colors

const colors = ["red", " green", "blue", "orange", "pink"];

const colorsUpdated = [...colors, "black", "white"];

console.log(colors, colorsUpdated)