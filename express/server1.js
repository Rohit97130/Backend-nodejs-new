const express = require('express');

// console.log('your function ' , express);

const app = express();

// get , put ,post , delete , patch

//TODO: midle ware -> parse the Json
app.use(express.json());   //build in middleware


//? Custom middleWare

function  middleWare1(req,res,next){
      console.log('This is middleware 1');
      next()
}

function  middleWare2(req,res,next){
    console.log('this is a middleWare 2');
    next()
}

app.use(middleWare1);  //Whenever you  hit on  any  http method firstly  req need to pass through this middleware.
app.use(middleWare2);
//! learn  about nodemon:->  to  automatically restart the server. (npx nodemon server1.js  )

//get Method
app.get('/',(req,res)=>{
     res.send('Hello From  Scaler');
})

app.get('/about' ,(req,res)=>{
     res.send('I am in about section');
})

app.get('/contact' , (req,res)=>{
    res.send('I am in contact section');
})

let courses = [
    {id:1,name:"Java"},
    {id:2,name:"JavaScript"},
    {id:3,name:"Python"},
]


app.get('/courses' , (req,res)=>{
    res.send(courses);
})  //read




//route parameter

app.get('/courses/:id/:name',(req,res)=>{
    console.log(req.params);


    let course = courses.find(course => course.id === parseInt(req.params.id));

    if(!course){
        res.status(404).send("Course does not exist");
    }

    res.send(course);
})

//TODO: Post Method

// app.post('/create',(req,res)=>{
//     res.send('Post Method');
// }) //create an entry //create


app.post('/courses',(req,res)=>{

    let course = {
        id: courses.length+1,
        name: req.body.name,
    }
    courses.push(course);
    res.send(courses);
})



//TODO Put Method is to  updata any  entry

app.put('/courses/:id' ,(req,res)=>{
      
    let course = courses.find(course => course.id === parseInt(req.params.id));

    if(!course){
        res.status(404).send("Course does not exist");
    }
    course.name = req.body.name
    res.send(courses);
})    //update


//Todo Patch to be explore :- put replace the whole object with new one even though some field may be unchanged
//TODO on the patch contrary it replace only those filed which were changed.


//TODO Delete
app.delete('/courses/:id',(req,res)=>{

     let course = courses.find(course => course.id === parseInt(req.params.id));

    if(!course){
        res.status(404).send("Course does not exist");
    }
    const index = courses.indexOf(course);
    console.log(index);

    courses.splice(index,1);

    res.send(courses);
    
})





app.listen(8082, ()=>{
    console.log('Server has been Started'); 
})

