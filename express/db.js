const { MongoNetworkError } = require('mongodb');
const mongoose = require('mongoose');


const DBurl = 'mongodb+srv://rohitjain97130:%40Arihant97130@cluster0.4rycccw.mongodb.net/Scaler?retryWrites=true&w=majority&appName=Cluster0';

//establishment of connection with db


mongoose.connect(DBurl).then(()=>{
    console.log('Connection Succesfull');
}).catch((err)=>{
    console.log('Connection Unsuccessful'); 
    console.log(err);  
})





//how to  data in a  database

//Courses Schema -> it just an structure,format in which you  want your data should be there in the database

const courseSchema = new mongoose.Schema({
     name: String,
     creator: String,
     isPublished:Boolean,
     publishedDate:{type: Date , default: Date.now},
     Rating: Number
})


//model -> to create ,update data with the help of courseSchema
const CourseModel = mongoose.model('CourseModel' , courseSchema);


//Create a Document (Course Entry) 

async function createCourse(){


    const course = new CourseModel({
    name:'Java',
    creator:'Mark',
    isPublished: true,
    Rating:4.5,
})

   await course.save();
}

createCourse();

console.log('ndknkjdnf');