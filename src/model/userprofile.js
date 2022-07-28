const mongoose= require("mongoose")

const userProfileSchema=new mongoose.Schema({
    ProfileImage:{
        type:String,
      

    },
    ObjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    
},{timestamps:true})
module.exports= mongoose.model("userPrfile",userProfileSchema)