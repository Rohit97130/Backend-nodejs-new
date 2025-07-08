const express = require('express');
const mongoose = require('mongoose');


const app = express();

const PORT = 8082;


const DBurl = 'mongodb+srv://rohitjain97130:%40Arihant97130@cluster0.4rycccw.mongodb.net/Ecommerse?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());
//establishment of connection with db


mongoose.connect(DBurl).then(()=>{
    console.log('Connection Succesfull');
}).catch((err)=>{
    console.log('Connection Unsuccessful'); 
    console.log(err);  
})



const ProductSchema =  new mongoose.Schema({
    name: {type:String , required: true},
    description:{type: String , required:true},
    brand: {type:String , required: true},
    price: {type:Number , required: true},
    category : {type:String , required: true}
},{timestamps:true});


const ProductModel = mongoose.model('Product',ProductSchema);


//Add a Product 

app.post('/api/products',async(req,res)=>{
     
    const product = new ProductModel({
         name:req.body.name,
         description: req.body.description,
         brand: req.body.brand,
         price: req.body.price,
         category: req.body.category
    });

     await product.save();
     res.send(product);
})

//get a data
app.get('/api/products', async(req,res)=>{
     
    let products = await ProductModel.find();

    // let deletepr = await ProductModel.findByIdAndDelete('686d0b104429a57b17a2d3d9');
    res.send(products); 
})



//Update the data
app.put('/api/products/:id',async(req,res)=>{
    
    let product = await ProductModel.findByIdAndUpdate(req.params.id, {
        name:req.body.name
    });

    res.send(product);  
})


//Delete 
app.delete('/api/products/:id',async(req,res)=>{

    let deletedproduct = await ProductModel.findByIdAndDelete(req.params.id);
    res.send(deletedproduct);
})

app.listen(PORT,()=>{
    console.log('Server has been Started');  
})