// ES6  Module = An external file contains reusable code
// that can be imported into other JS files
// Can contain variables, functions, classes ... and    more
//Introduced as part of ECMAScript 2015 update

import { PI, getAreaCircle, getCircumCircle, getVolumeCircle } from "./mathUtil.js";

console.log(PI);

const area = getAreaCircle(3).toFixed(2);
const circumference = getCircumCircle(3).toFixed(2);
const volume = getVolumeCircle(3).toFixed(2);

console.log(area);
console.log(circumference);
console.log(volume);