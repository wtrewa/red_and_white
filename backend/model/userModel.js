const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,enum:['male','female','other'],required:true},
    password:{type:String,required:true},
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;