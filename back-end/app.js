// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

const productController = require('./Controllers/productsController')


// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON


app.use("/products", productController);



// ROUTES
app.get("/", (_, response) => {
  response.send('Welcome to The Electronics App Store')
});


// app.get('*', (_, response) =>{
//   response.status(404).send({error:'Page not found!'})
// })


// EXPORT
module.exports = app;
