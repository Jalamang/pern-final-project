import axios from "axios";
import React from "react";
import { Grid } from "@material-ui/core";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "../Products/Styles";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({
    brand: "",
  });
  const classes = useStyles();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const productData = await axios.get(API + "/products/" + id);
      setProduct(productData.data);
    };
    fetchData();
  }, []);

  const {
    productid,
    brand,
    is_available,
    modelname,
    picture,
    price,
    productcategory,
    productdescription,
  } = product;




  return (<>
    <Grid container justifyContent="center" spacing={4}>
      <Grid item key={product.productid} xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={picture} title={brand} />
          <CardContent>
            <div>
              <Typography variant="h5" gutterBottom></Typography>
              <Typography variant="h5">{brand}</Typography>
              <Typography variant="h5">{price}</Typography>
            </div>

            <Typography variant="h2" color="textSecondary">
              {is_available}
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="Add to Cart">
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>

    <button onClick={() => navigate("/products")}>Back</button>
    <button onClick={() => navigate("/products/" + id + "/edit")}>Edit</button>
   
    </>
  );
};

export default ProductDetails;
