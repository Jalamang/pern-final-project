const db = require("../db/dbConfig");

const getProducts = async () => {
  try {
    const products = await db.any("SELECT * FROM product");
    console.log(products);
    return products;
  } catch (error) {
    return error.message;
  }
};

const getProduct = async (id) => {
  try {
    const product = await db.one("SELECT * FROM product WHERE productid=$1", id);
    return product;
  } catch (error) {
    return error;
  }
};

module.exports= {getProducts,
  getProduct
  }