const express = require('express');
const ProductRouter = require('./route/Product_route');
const  {ConnectMongodb} = require('./connection');

const DBurl = 'mongodb+srv://rohitjain97130:%40Arihant97130@cluster0.4rycccw.mongodb.net/Ecommerse?retryWrites=true&w=majority&appName=Cluster0';
ConnectMongodb(DBurl);  //!to  make a database connection with server


const app = express();

const PORT = 8082;

app.use(express.json());
app.use('/api/products',ProductRouter);







app.listen(PORT,()=>{
    console.log('Server has been Started');  
})