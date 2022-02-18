const express = require("express");
const { getProducts} = require("../queries/products");
const products = express.Router();

products.get("/", async (_, response) => {
  const products = await getProducts();
  response.send(products);
});



module.exports = products;
