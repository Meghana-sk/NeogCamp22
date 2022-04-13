//Area of hexagon = 3 root 3 / 2 * side * side

const areaOfHexagon = (side) => {
  let hexArea = ((3 * Math.sqrt(3)) / 2) * (side * side);
  return hexArea.toFixed(2);
};

console.log(areaOfHexagon(10));
