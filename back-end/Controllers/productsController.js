const express = require("express");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../queries/products");
const  determinePrice  = require("./determinePrice")
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
    let newProduct = request.body;
    console.log(newProduct)
    newProduct.price = determinePrice(newProduct)
    const newProd = await createProduct(newProduct)
    response.status(200).send(newProd)
})

  products.put("/:id", async (request, response) => {
    const { id } = request.params;
    const newProduct = await updateProduct(id, request.body)
    response.status(200).send(newProduct)
})
  products.delete("/:id", async (request, response) => {
    console.log("deleted")
    const { id } = request.params;
    const deletedProduct = await deleteProduct(id)
    response.status(200).send(deletedProduct)
})


module.exports = products;
