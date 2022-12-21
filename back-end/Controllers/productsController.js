const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../queries/products");
const { determinePrice } = require("./determinePrice");
const products = express.Router();

products.get("/", async (_, response) => {
  const products = await getProducts();
  response.send(products);
});

products.get("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const product = await getProduct(id);
    response.status(200).send(product);
  } catch (error) {
    response.status(404).send({ error: "Product not found" });
  }
});

products.post("/", async (request, response) => {
  let newProduct = request.body;
  
// console.log(newProduct)
  if(newProduct.capacity === 0){
    response.send({ error: "Cannot create product, price is undefined" });
  } else {
    try {
  
      newProduct.price = determinePrice(newProduct.material, newProduct.capacity).toFixed(2);;
   
    const newProd = await createProduct(newProduct);
    response.status(200).send(newProd);
  } catch (error) {
    response.status(404).send({ error: "Product cannot be created" });
  }
  }
  
});

products.put("/:id", async (request, response) => {
  let updatedProduct = request.body;
  const { id } = request.params;

  console.log(updatedProduct)
  try {
    updatedProduct.price = determinePrice(updatedProduct.material, updatedProduct.capacity).toFixed(2);

    const newProduct = await updateProduct(id, updatedProduct);

    response.status(200).send(newProduct);
  } catch (error) {
    response.status(404).send({ error: "Product cannot be modified" });
  }
});

products.delete("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const deletedProduct = await deleteProduct(id);
    response.status(200).send(deletedProduct);
  } catch (error) {
    response.status(404).send({ error: "Product cannot be deleted " });
  }
});

module.exports = products;
