
const { log } = require('console');
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
// fs.rmdirSync('MyDirectory3');








//exitsSync - it help  whether the file or directory exist 

const fs= require('fs');
// let ans = fs.existsSync('MyDirectory1')
// let ans = fs.existsSync('1_fs.txt')
// let ans = fs.existsSync('MyDirectory1/1.js');
console.log(ans);



















//TODO we will  do  an exercise

// ?copy  a file from  srcFolder to destination folder

const fs = require('fs')
const path = require('path');



let srcFilepath = 'C:/scaler course/LLD-4/node-js-inbuild/1_fs.txt';
let desDirectorypath = 'C:/scaler course/LLD-4/node-js-inbuild/MyDirectory1';

let tobeCopied  = path.basename(srcFilepath)
// console.log(extensionname);

const despath = path.join(desDirectorypath,tobeCopied);
console.log('this is a destination paht' + despath);



fs.copyFileSync(srcFilepath , despath);

// fs.unlinkSync(srcFilepath); this is cut paste funcationality










