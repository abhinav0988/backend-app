const UserProfileModel= require("../model/userprofile")

const userprofileimage= async function(req,res){
    try{
    const data= req.body
    let file=req.file
    if(file && file.length>0) var uploadedfileURL= await awsController.uploadfile([0])
    data.ProfileImage=uploadedfileURL
    data=JSON.parse(JSON.stringify(data))

  
    const ProfileImage= await UserProfileModel.create(data)
    res.status(201).send({status:true,data:ProfileImage})
    }
    catch(error){
        res.status(500).send({status:false,msg:error})
    }
}
module.exports.userprofileimage=userprofileimage