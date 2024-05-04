const express = require("express");
const router = express.Router();
const {handleUserSignUp,handleUserLogin}=require("../controllers/user");

router
.route("/")
.post(handleUserSignUp)

router
.route("/login")
.post(handleUserLogin)

module.exports=router;