const ProductModel = require('../models/Product');


async function getAllproduct(req,res){
      let products = await ProductModel.find();

    res.send(products); 
}


async function createproduct(req,res){
      const product = new ProductModel({
         name:req.body.name,
         description: req.body.description,
         brand: req.body.brand,
         price: req.body.price,
         category: req.body.category
    });

     await product.save();
     res.send(product);
}


async function Updateproduct(req,res){
       
    let product = await ProductModel.findByIdAndUpdate(req.params.id, {
        name:req.body.name
    });

    res.send(product);  
}



async function deleteproduct(req,res){
    
    let deletedproduct = await ProductModel.findByIdAndDelete(req.params.id);
    res.send(deletedproduct);
}


module.exports = {
    getAllproduct,
    createproduct,
    Updateproduct,
    deleteproduct
}