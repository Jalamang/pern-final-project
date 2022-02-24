const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../queries/products");
const { determinePrice, formatSnackName } = require("./determinePrice");
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
  try {
    newProduct.material = formatSnackName(newProduct.material);
    newProduct.price = determinePrice(newProduct);
    const newProd = await createProduct(newProduct);
    response.status(200).send(newProd);
  } catch (error) {
    response.status(404).send({ error: "Product cannot be created" });
  }
});

products.put("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const newProduct = await updateProduct(id, request.body);

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
