/**
 * I want to call the function define in my_module.js
 */

const obj = require ('./my_module.js');
console.log(typeof obj);
console.log(obj);

console.log(obj.add(5,10));
console.log(obj.minus(5,10));
console.log(obj.prod(5,10));
console.log(obj.divide(5,10));
