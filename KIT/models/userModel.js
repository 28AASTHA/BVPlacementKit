const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    } ,
    is_admin:{
        type:Number,
        required:true
    },
    is_verified:{
        type:Number,
        default:0
    },
    token:{
        type:String,
        default:''
    }


});

module.exports = mongoose.model('User' , userSchema);