//Q2. Given an array and an item. Find at which index item is found

const findIndex = (array, itemToFind) => {
  let indexOfItem = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === itemToFind) {
      indexOfItem = i;
      break;
    }
  }
  return indexOfItem;
};

console.log(" index:", findIndex([1, 2, 3, 4, 5], 34));
