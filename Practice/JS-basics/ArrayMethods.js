//Q1.Find all words greater than 6
console.log(["react", "js", "meghana"].filter((el) => el.length > 6));

//Q2.  Usage of map(), reduce(), forEach() - Difference bw foreach() and map()
// ->   Map returns new array and chaining possible

//Q3. var, let and const
// -> var is fucntionally scoped or gloablly scoped, let and const are block scoped ({} is a block)

// {
//   let a = 3;
//   let a = 5;
//   console.log(a); Syntax error variable 'a' can not be redeclared
// }

// {
//   const a = 5;
//   const a = 7;
//   console.log(a);Identifier 'a' has already been declared
// }

//Q5. Implicit binding
const who = {
  mentor: "SK",
  teacher: function () {
    console.log("hey", this.mentor); //this refers to who object and sees if mentor key exists
  },
};

who.teacher();

//Q6. Explicit binding

function ask() {
  console.log("ask", this.mentor);
}

let mentor1 = {
  mentor: "Akanksha",
};

ask.call(mentor1);

//Q7.
function ask() {
  console.log("ask", this.mentor);
}

let mentor3 = {
  mentor: "Akanksha",
};

ask.call(mentor3); //ask method is borrowed for every object

var mentor4 = {
  mentor: "MSK",
};

ask.call(mentor4);

//Q8. Borrow the method from object and call with your object
const myData = {
  name: "SK",
  city: "Hassan",
  printData: function () {
    console.log("hey", this.name, "stays in", this.city); //this refers to who object and sees if mentor key exists
  },
};

myData.printData();

const neighgbour = {
  name: "X",
  city: "Y",
};

myData.printData.call(neighgbour);

//Q9.
const mySandwich = {
  layer1: "cheese",
  layer2: "lettuce",
  printIngredients: function (layer3) {
    console.log("seee my sandwich", this.layer1, this.layer2, layer3);
  },
};

mySandwich.printIngredients(`chips`);

const sandwichSpecial = {
  layer1: "bread",
  layer2: "mushroom",
};

mySandwich.printIngredients.call(sandwichSpecial, `tomato`);
mySandwich.printIngredients.apply(sandwichSpecial, ["tomato", "chips"]);
