const { log } = require('console');
const fs= require('fs');


//1.Read , Write , Update , Delete


//!Read
let data = fs.readFileSync('1_fs.txt');

console.log('file1-content' + data);
