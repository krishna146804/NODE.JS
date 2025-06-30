/**
 * I want to call the function defined in my_module.js
 */

const obj = require("./my_module")

console.log(typeof obj)
console.log(obj)

console.log(obj.add(5,6))
console.log(obj.minus(11,7))
console.log(obj.prod(5,6))