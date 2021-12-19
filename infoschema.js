const mongoose =require("mongoose");

const infoSchema =mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Question:{
        type:String,
        required:true
    },
    
    createdTime:{
        type:Date,
        default:Date.now
    }
})

module.exports =mongoose.model("Info",infoSchema);


