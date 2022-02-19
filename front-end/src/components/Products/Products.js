import axios from "axios";
import React from "react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import Product from "../Product/Product";

const API = process.env.REACT_APP_API_URL;

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get(API + "/products");
        setProducts(productData.data);
      } catch (err) {
        return err;
      }
    };
    fetchData();
  }, []);


  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
   
        {products.map((product) => (
          <Grid item key={product.productid} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
