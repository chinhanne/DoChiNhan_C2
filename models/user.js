let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        default:""
    },
    password:{
        type:String,
        default:""
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports=
mongoose.model('users',userSchema)