const db = require("../db/dbConfig");

const getProducts = async () => {
  try {
    const products = await db.any("SELECT * FROM electronics");
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
    name, picture, color, price, capacity, description, material, rating, featured
  } = product;
  try {
    const newProduct = await db.one(
      "INSERT INTO electronics (name, picture, color, price, capacity, description, material, rating, featured) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ) RETURNING * ",
      [
        name, picture, color, price, capacity, description, material, rating, featured
      ]
    );
    return newProduct;
  } catch (error) {
    return error.message;
  }
};

const updateProduct = async (id, product) => {
  const {
    name, picture, color, price, capacity, description, material, rating, featured
  } = product;

  try {
    const updatedProduct = await db.one(
      "UPDATE electronics SET name=$1, picture=$2, color=$3, price=$4, capacity=$5, description=$6, material=$7, rating=$8, featured=$9 WHERE productid=$10 RETURNING *",
      [name, picture, color, price, capacity, description, material, rating, featured, id]
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