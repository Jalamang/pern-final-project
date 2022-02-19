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
    const product = await db.one(
      "SELECT * FROM product WHERE productid=$1",
      id
    );
    return product;
  } catch (error) {
    return error;
  }
};

const createProduct = async (product) => {
  const {
    brand,
    productdescription,
    picture,
    color,
    price,
    modelname,
    productcategory,
    is_available,
  } = product;
  try {
    const newProduct = await db.one(
      "INSERT INTO product (brand,productdescription,picture,color,price,modelname,productcategory,is_available) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING * ",
      [
        brand,
        productdescription,
        picture,
        color,
        price,
        modelname,
        productcategory,
        is_available,
      ]
    );
    return newProduct;
  } catch (error) {
    return error.message;
  }
};

const updateProduct = async (id, product) => {
  const {
    brand,
    productdescription,
    picture,
    price,
    modelname,
    productcategory,
    is_available,
  } = product;

  try {
    const updatedProduct = await db.one(
      "UPDATE product SET brand=$1, productdescription=$2, picture=$3, price=$4, modelname=$5, productcategory=$6, is_available=$7 WHERE productid=$8 RETURNING *",
      [
        brand,
        productdescription,
        picture,
        price,
        modelname,
        productcategory,
        is_available, id]
    );
    return updatedProduct;
  } catch (error) {
    return error;
  }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct };
