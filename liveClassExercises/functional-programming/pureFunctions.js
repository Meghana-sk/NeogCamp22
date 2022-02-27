// Write a function birthday() to take person's name and age in an object and increase age

const birthday = (person) => ({...person, age: person.age + 1 })

const person = { name: "Meghana", age: 24 };

console.log(birthday(person), person);