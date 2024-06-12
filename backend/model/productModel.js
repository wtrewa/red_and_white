
const mongoose = require('mongoose');




const productSchema = mongoose.Schema({
   title:{type:String,required:true},
   image:{type:String,required:true},
   // creator:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
   price:{type:Number,required:true}

})

const productModel = mongoose.model('product',postSchema)
module.exports= productModel;