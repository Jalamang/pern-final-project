const db = require("../db/dbConfig");

const getProducts = async () => {
  try {
    const products = await db.any("SELECT * FROM electronics");
    console.log(products);
    return products;
  } catch (error) {
    return error.message;
  }
};

const getProduct = async (id) => {
  try {
    const product = await db.one(
      "SELECT * FROM electronics WHERE productid=$1",
      id
    );
    return product;
  } catch (error) {
    return error;
  }
};

const createProduct = async (product) => {
  const {
    name, picture, price, capacity, description, material, rating, featured
  } = product;
  try {
    const newProduct = await db.one(
      "INSERT INTO electronics (name, picture, price, capacity, description, material, rating, featured) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING * ",
      [
        name, picture, price, capacity, description, material, rating, featured
      ]
    );
    return newProduct;
  } catch (error) {
    return error.message;
  }
};

const updateProduct = async (id, product) => {
  const {
    name, picture, price, capacity, description, material, rating, featured
  } = product;

  try {
    const updatedProduct = await db.one(
      "UPDATE electronics SET name=$1, picture=$2, price=$3, capacity=$4, description=$5, material=$6, rating=$7, featured=$8 WHERE productid=$9 RETURNING *",
      [name, picture, price, capacity, description, material, rating, featured, id]
    );
    return updatedProduct;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (id) => {

  try {
    const deletedProduct = await db.one("DELETE FROM electronics WHERE productid=$1 RETURNING *", id)
    return deletedProduct;
  } catch (error) {
    return error.message
  }
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
