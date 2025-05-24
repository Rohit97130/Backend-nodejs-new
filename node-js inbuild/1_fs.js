
const fs= require('fs');


//1.Read , Write , Update , Delete


//!Read
let data = fs.readFileSync('1_fs.txt');

console.log('file1-content' + data);


//!Write

fs.writeFileSync('fs2.txt',"This is the contain");


//If this file does not exist then  it will create and then write into the file
fs.writeFileSync('fs3.txt' , "This is the content of fs2.txt file");






//!Update or append  the content
// const fs= require('fs');
fs.appendFileSync('fs2.txt','This is updated content')






//!Delete a File
// const fs= require('fs');
fs.unlinkSync('fs3.txt');















//TODO: Fs Mddule Work with  Directory

//? create and delete a directory (folder)
// const fs= require('fs');

// fs.mkdirSync('MyDirectory1');
// fs.mkdirSync('MyDirectory2');
// fs.mkdirSync('MyDirectory3');

console.log('Directory Created');


//!Delete
fs.rmdirSync('MyDirectory1');




//exitsSync - it help  whether the file or directory exist 



const fs= require('fs');
// let ans = fs.existsSync('MyDirectory1')
let ans = fs.existsSync('1_fs.txt')
console.log(ans);










