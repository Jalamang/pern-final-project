const express = require("express");
const { getProducts, getProduct, createProduct, updateProduct} = require("../queries/products");
const products = express.Router();

products.get("/", async (_, response) => {
  const products = await getProducts();
  response.send(products);
});


products.get("/:id", async (request, response) => {
    const { id } = request.params;
    const product = await getProduct(id);
    response.status(200).send(product);
  });
  

  products.post("/", async (request, response) => {
    const newProduct = await createProduct(request.body)
    response.status(200).send(newProduct)
})

  products.put("/:id", async (request, response) => {
    const { id } = request.params;
    const newProduct = await updateProduct(id, request.body)
    response.status(200).send(newProduct)
})


module.exports = products;
