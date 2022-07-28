const express = require("express")
const Router= express.Router()
const UserController= require("../controller/UserController")
const UserProfileController=require("../controller/userProfileController")
const MW = require("../middleware/auth.js")

Router.post("/user",UserController.CreateUser)
Router.post("/userlogin",UserController.loginuser)
Router.post("/userprofile",MW.authenticate,UserProfileController.userprofileimage)


module.exports=Router