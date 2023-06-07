const express=require("express");
const router=express.Router();
const {getUserData,getUserbyIdController,updateUserById}=require("../controllers/usercontroller");

const {checkAuthorization,encryptPassword}=require("../middlewares/middleware");

// This is a routes level middleware  and all the routes defined in this file
// will be   protected by this middleware
router.use(checkAuthorization)
router.get("/",getUserData)
router.get("/:id",getUserbyIdController)
router.put("/:id",encryptPassword,updateUserById)





module.exports=router