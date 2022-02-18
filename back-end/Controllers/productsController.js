const express = require("express");
const { getProducts, getProduct} = require("../queries/products");
const products = express.Router();

products.get("/", async (_, response) => {
  const products = await getProducts();
  response.send(products);
});


products.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await getProduct(id);
  
    res.status(200).send(product);
  });
  

module.exports = products;
