const express = require("express");

const User = require("../model/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      res.send({
        success: false,
        message: "user already exist",
      });
      return; // Stop further execution
    }

    const salt = await bcrypt.genSalt(10);
    console.log(salt);

    const hashpwd = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashpwd;
    const newUser = new User(req.body);

    await newUser.save();

    res.send({
      success: true,
      message: "User Registered",
    });
  } catch (err) {
    console.log(err);
  }
});


router.post('/login',async(req,res)=>{
    try{
      const user = await User.findOne({email: req.body.email});
      
      if(!user){
         res.send({
         sucess:true,
          message:"User is not register"
         });
         return;
      }
       
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if(!validPassword){
        res.send({
         sucess:true,
          message:"Sorry , Invalid Password Entered"
         })
      }
        res.send({
         sucess:true,
          message:"Congrats! you have been Logged in"
         })
       
    }
    catch(err){
       console.log(err);
    }
     
})



module.exports = router;
