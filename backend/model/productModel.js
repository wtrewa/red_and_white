
const mongoose = require('mongoose');




const productSchema = mongoose.Schema({
   
   id:{type:Number,required:true},
   title:{type:String,required:true},
   image:{type:String,required:true},
   // creator:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
   price:{type:Number,required:true}

})

const productModel = mongoose.model('product',productSchema)
module.exports= productModel;