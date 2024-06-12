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


productRoute.get('/products', async (req, res) => {
    try {
      const searchQuery = req.query.q;
      console.log(searchQuery)
      if (searchQuery) {
        const products = await productModel.find({
          $or: [
            { title: { $regex: searchQuery, $options: 'i' } },
            
          ],
        });
        res.send({ products });
      } else {
        const products = await productModel.find();
        res.send({ products });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });




module.exports = productRoute