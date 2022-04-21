//Q. Given angles of triangle, determine whether triangle is scalene, isoceles or euivlateral or not

const typeOfTriangle = (angle1, angle2, angle3) => {
    let angleSum = (angle1 + angle2 + angle3);
    if (angleSum === 180) {
        if (angle1 === angle2 && angle2 === angle3) {
            return "Equilateral Triangle";
        } else if (angle1 !== angle2 && angle2 !== angle3 && angle3 !== angle1) {
            return "Scalene triangle";
        } else if (angle1 === angle2 || angle2 === angle3 || angle3 === angle1) {
            return "Isosceles Triangle";
        }
    } else {
        return "Not a triangle";
    }
}

console.log(typeOfTriangle(30,30,120))