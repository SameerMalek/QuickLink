const User = require("../models/users");
const {setUser}=require("../service/auth");
const {v4:uuidv4}=require("uuid");

async function handleUserSignUp(req,res){
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password
    })
    return res.render("home");//Returning User to the home page.
}

async function handleUserLogin(req,res){
    const {email,password}=req.body;
    const user= await User.findOne({email,password});
    if(!user){
        return res.render("login",{error:"Invalid Username or Password."});
    }
    // const sessionId=uuidv4(); //Generating a unique Session ID for this particular user.
    const token= setUser(user);
    res.cookie("uid",token);

    return res.redirect("/");//Returning User to the home page.
}

module.exports={
    handleUserSignUp,
    handleUserLogin,
};