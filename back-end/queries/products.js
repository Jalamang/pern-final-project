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



module.exports= {getProducts,
  }