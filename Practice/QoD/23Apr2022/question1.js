// Square
// Area side * side
//perimeter 4 * side

//Cube
// Volume side * side* side
// Surface area 6* side* side


const areaOfSquare = (side) => side * side;
const perimeterOfSquare = (side) => 4 * side;
const surfaceAreaOfCube = (side) => 6 * side * side;
const volumeOfCube = (side) => side * side * side;

console.log("square: area:",areaOfSquare(20), "perimeter: ", perimeterOfSquare(10))
console.log("cuve surface area: ", surfaceAreaOfCube(3), "volume: ", volumeOfCube(4))