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
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h5">${price}</Typography>
            <Typography variant="h5"> {capacity} Liters </Typography>
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
