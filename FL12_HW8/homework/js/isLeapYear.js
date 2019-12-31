function isLeapYear(str) {
    const LEAP = 4;
    let date = new Date(str);
    let year = date.getFullYear();
    if (year % LEAP === 0){
        return (year + ' is leap');
    }else if (isNaN(year)) {
        return ('Invalid Date');    
    } else if (year % 4 !== 0) {
        (year + ' is not leap');
    } 
}
isLeapYear();