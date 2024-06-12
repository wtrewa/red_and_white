const productModel = require('../model/productModel')


const express = require('express');




const productRoute = express.Router();

productRoute.post('/add',async(req,res)=>{
    try {
        const product = await productModel.create({...req.body,creator:req.userId,name:req.username})
        // await product.populate('creator')
        res.send({msg:"Successfully added",product:product})   
    } catch (error) {
        res.send(error)
    }
})





module.exports = productRoute