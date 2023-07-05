//we should always prefer Asynchronous over synchronous
//***********************************//Synchronous file system //*******************************************//
//First one task is completed then it will go for next.

//To include the File System module, use the require() method:
// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files
const fs = require('fs');

//used to create directory
//fs.mkdirSync("CRUD");

//used to create file and insert text
//fs.writeFileSync('CRUD/bio.txt', "My name is vinayak");

//used to add more info to the file
//fs.appendFileSync("crud/bio.txt", ' Im an Engineering Student');

//used to read file
//if we dont use utf8 it will show buffer data
// const data = fs.readFileSync('CRUD/bio.txt', 'utf-8');
// console.log(data);

//rename the file
//fs.renameSync('CRUD/bio.txt', 'CRUD/myBio.txt')

//delete file
//fs.unlinkSync('CRUD/myBio.txt');

//remove directory
//fs.rmdirSync("CRUD");


//**************************************//Asynchronous file System//****************************************************//
//It will not wait for first task to complete, whichever task take less time it will output them first

// fs.writeFile('txt.txt', "This is Asynchronous way of file system", (err) => {
//     console.log("File is created");
//     console.log(err);
// }); 

// fs.appendFile('txt.txt', " Just updating data in the file", (err) =>{
//     console.log("Task done");
// });

fs.readFile('txt.txt', 'utf-8', (err, data) =>{
    console.log(data);
});
