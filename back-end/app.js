// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");


// CONFIGURATION
const app = express();

//controllers
const productController = require('./Controllers/productsController')
// const loginSignUpConroller = require("./Controllers/loginSignupController");

// MIDDLEWARE
app.use(cors({origin: "http://localhost:3007", credentials: true}));
app.use(express.json()); // Parse incoming JSON
app.use(cookieParser())
app.use(passport.initialize())


app.use("/products", productController);
// app.use("/auth", loginSignUpConroller);



// ROUTES
app.get("/", (_, response) => {
  response.send('Welcome to The Electronics App Store')
});


// app.get('*', (_, response) =>{
//   response.status(404).send({error:'Page not found!'})
// })


// EXPORT
module.exports = app;
