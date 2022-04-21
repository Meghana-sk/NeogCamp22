//Q. Given two dates , determine which comes first
// minDate('14/05/1997','29/09/1998') => 14/05/1997

const minDate = (date1, date2) => {
    const date1Modified  = date1.split("/");
    const date2Modified = date2.split("/");
    if (Number(date1Modified[date1Modified.length - 1]) > Number(date2Modified[date2Modified.length - 1])) {
        return date2;
    } else {
        if (Number(date1Modified[date1Modified.length - 2]) > Number(date2Modified[date2Modified.length - 2])) {
            return date2;
        } else {
            if (Number(date1Modified[0]) > Number(date2Modified[0])) {
                return date2;
            } else {
                return date1;
            }
        }
    }
}

console.log(minDate('14/05/2021','24/05/2020'))