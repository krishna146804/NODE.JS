const fs = require('fs')

/**
 * Read from the file 
 */

/**
 * Sync way
 *
console.log("Before read code")

const content = fs.readFileSync('input.txt')

console.log("Content read : "+ content)

console.log('After read code ') **/


/**
 * Read in the async way
 

console.log("Before read code")

  fs.readFile('input.txt',(err, content)=>{
    if(err){
       return console.log(err)
    }
    console.log("File read : " + content)
  })

console.log('After read code ') **/


/**
 * Write the date into a file
 */

//Synchronous way
/** 
console.log("Before write")
fs.writeFileSync('output.txt', "Hello Studetns, how are you ?")

console.log("After write") **/

// Asynchronous way

console.log("Before write")

fs.writeFile("output1.js", "Hello Students" , err=>{
    if(err){
        return console.log(err)
    }
    console.log("Written succesfully")
})
console.log("After write")