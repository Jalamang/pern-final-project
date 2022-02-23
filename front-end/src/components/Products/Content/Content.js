import Product from "../../Product/Product";
import React from "react";
import { Grid } from "@material-ui/core";
const Content = ({ product, handleAddProduct }) => {
  return (
    <>
      <main>
        <Grid container justifyContent="center" spacing={5}>
          {product?.map((product) => (
            <Grid item key={product.toString()} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} handleAddProduct={handleAddProduct} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Content;
