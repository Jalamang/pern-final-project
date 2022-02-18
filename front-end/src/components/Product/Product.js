import React from "react";

const Product = ({ product }) => {
  console.log(product)
const pic = <img src="./test.js"/>
  const {
    brand,
    color,
    is_available,
    modelname,
    picture,
    price,
    productcategory,
    productdescription,
    productid,
  } = product;
  console.log(picture)
  return <div>
  <img src={picture}/>
  </div>;
};

export default Product;
