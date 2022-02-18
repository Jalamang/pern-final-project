import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";
import Product from "../Product/Product";

const API = process.env.REACT_APP_API_URL;

const Products = () => {
  const [produc, setProduc] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get(API + "/products");
        setProduc(productData.data);
      } catch (err) {
        return err;
      }
    };
    fetchData();
  }, []);

  console.log(produc);

  const allProduct = produc.map((product) => (
    <Product key={product.productid} product={product} />
  ));

  return <div>{allProduct}</div>;
};

export default Products;
