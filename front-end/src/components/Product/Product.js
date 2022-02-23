import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart, FavoriteBorderOutlined } from "@material-ui/icons";
import useStyles from "../Products/Styles";

const Product = ({ product, handleAddProduct }) => {
  const classes = useStyles();

  const {
    productid,
    name,
    picture,
    color,
    price,
    capacity,
    description,
    material,
    rating,
    featured,
  } = product;

  return (
    <>
      <Card className={classes.root}>
        <Link to={"/products/" + productid}>
          <CardMedia className={classes.media} image={picture} title={name} />
        </Link>
        <CardContent>
          <div>
            <Typography variant="h5" gutterBottom></Typography>
            <Typography variant="h5"><strong>Name:</strong> {name}</Typography>
            <Typography variant="h5"><strong>Price:</strong> ${price}</Typography>
            <Typography variant="h5"><strong>Capacity:</strong> {capacity} Liters </Typography>
            <Typography variant="body1"><strong>Material:</strong> {material} </Typography>
          </div>

        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
          <IconButton>
            <FavoriteBorderOutlined />
          </IconButton>
          <IconButton
            onClick={() => handleAddProduct(product)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
