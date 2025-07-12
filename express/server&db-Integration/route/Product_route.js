
const express = require('express');
const ProductModel = require('../models/Product');

const router = express.Router();

const { getAllproduct,createproduct,Updateproduct,deleteproduct} = require('../controllers/Product_controller');

//Put an  Data
router.post('/',createproduct)

//get a data
router.get('/',getAllproduct)



//Update the data
router.put('/:id',Updateproduct)


//Delete 
router.delete('/:id',deleteproduct)


module.exports = router ;