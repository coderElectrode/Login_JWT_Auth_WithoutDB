const {getAllUsers,updateUserbyIdDb,getUserbyId}=require("../db/db");

const getUserData=(req,res)=>{

    const users=getAllUsers();

    res.json({
        message:"Success",
        data:users
    })



}
// should be protected api

// Create a  get user profile api ----> so user will pass the id and you have to gets it data

const getUserbyIdController=(req,res)=>{
    const id=req.params.id;
    const data=getUserbyId(id)

    res.json({
        message:"succcess",
        data
    })

}

// Create a A user profile edit api --->

const updateUserById=(req,res)=>{

    const data=updateUserbyIdDb(req.params.id,req.body);

    res.json({
        message:"Success",
        data
    })

}

module.exports={
    getUserData,
    getUserbyIdController,
    updateUserById
}