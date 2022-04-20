
const checkWeekDayOrEnd = day => {
    let isWeekend = false;
    switch(day) {
        case "Monday": break;
        case "Tuesday": break;
        case "Wednesday": break;
        case "Thursday": break;
        case "Friday": break;
        case "Saturday": isWeekend = true; break;
        case "Sunday": isWeekend = true; break;
    }
    return day + " is " + (isWeekend ? "weekend" : "weekday")
}

console.log(checkWeekDayOrEnd("Tuesday"))

