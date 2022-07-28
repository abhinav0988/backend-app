const UserModel= require("../model/usermodel")
const jwt = require("jsonwebtoken")


const CreateUser= async function(req,res){
    try{
    const data=req.body
    const userdetail= await UserModel.create(data)
    res.status(201).send({status:true,data:userdetail})
    }

catch(error){
    res.status(500).send({status:false,msg:error})
}
}
const loginuser = async function(req,res){
    try{
    const email= req.body.email
    const password= req.body.password
    if(!email){
        return res.status(400).send({status:false,message:"Please enter an email!"})
      }
      const user = await UserModel.findOne({email:email})
      if(!user){
          return res.status(404).send({status:false,message:"User does not exists!"})
      }
      if(!password){
          return res.status(400).send({status:false,message:"Please enter Password!"})
      }
      if(user.password!=password){
          res.status(400).send({status:false,message:"Incorrect Password!"})
      }
     
      const token = jwt.sign( 
          {
              userId : user._id.toString(),
              
             
          },
              "abhinav"
              )
      
      res.status(200).send({status:true, data:token })
   
    }
catch(error){
    res.status(500).send({status:false,msg:error})
}


}
module.exports.CreateUser=CreateUser
module.exports.loginuser=loginuser