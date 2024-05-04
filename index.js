const express = require("express");
const app = express();
const path = require("path");
const URL = require("./models/url");
const { connectMongoDB } = require("./mongoDB/connection");
const staticRoute=require("./routes/staticRouter");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
var cookieParser=require("cookie-parser");
const {restrictToLoggedInUserOnly,checkAuth}=require("./middlewares/auth");

const port = 8007;

//Adding Middleware to read JSON data from Postman:
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use("/url",restrictToLoggedInUserOnly, urlRoute);//adding Inline Middleware.
app.use("/user", userRoute);
app.use("/",checkAuth,staticRoute);//adding Inline Middleware.

// set the view engine to ejs
app.set("view engine", "ejs");
app.set('views',path.resolve("./views"));

connectMongoDB("mongodb://localhost:27017/quickLink");

app.listen(port, () => {
  console.log(`Server has been started at port: ${port}`);
});
