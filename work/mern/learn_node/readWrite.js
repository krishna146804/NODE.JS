const fs = require('fs');


/*
read from the file
*/

// Sync way

/*


console.log("before reading the file");
const content = fs.readFileSync('input.txt');
console.log("content read :" + content);

console.log ("after reading the file");

*/

// async way
/*
console.log("before reading the file ");

fs.readFile('input.txt',(err,content)=>{
  if(err){
   return  console.log(err);
  }
  console.log ("File read :" + content)
})

console.log ("after reading the file");

*/


/* write the data into a file 

*/

//Sunchronous way

/*

console.log ("before  write");

fs.writeFileSync('output.txt','Hello student , how are you?;')

console.log("after write");

*/

// Asynchronous way

console.log("before write");
fs.writeFile('output.txt','hello student',(err)=>{
  if (err){
    return console.log(err);
  }
  console.log("written successfully")
})

console.log("after write");

