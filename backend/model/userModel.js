const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    email: { type: String, required: true,unique: true},
    phone:{type:String,required:true},
    gender:{type:String,enum:['male','female'],required:true},
    cartProducts: { type: [{}], default: [] },
    password:{type:String,required:true},
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;
