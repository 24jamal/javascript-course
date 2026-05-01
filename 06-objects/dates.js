console.log("--------------------------------------------------")
console.log("dates :");

//Date Object = Objects that contain values that represent dates and times.
// these date objects can be changed and formatted
//Date(year, month, day, hour, minute,second,ms)
let date = new Date(2024, 0, 1, 2, 3, 4);

console.log(date);

let date2 = new Date("2024-01-02T12:00:00Z");

console.log(date2);

let date3 = new Date(0);

console.log(date3);

let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let dates = currentDate.getDate();
let hours = currentDate.getHours();
let seconds = currentDate.getSeconds();
let millisecs = currentDate.getMilliseconds();
let day = currentDate.getDay();

console.log(year);
console.log(month);
console.log(dates);
console.log(hours);
console.log(seconds);
console.log(millisecs);
console.log(day);
console.log(currentDate);

const fixeddate = new Date();

fixeddate.setFullYear(2024);

fixeddate.setMonth(0);

fixeddate.setDate(2);

fixeddate.setHours(2);
fixeddate.setMinutes(2);
fixeddate.setSeconds(22);
fixeddate.setMilliseconds(22);

console.log(fixeddate);