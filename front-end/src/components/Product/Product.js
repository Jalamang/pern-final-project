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
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "../Products/Styles";

const Product = ({ product }) => {
  console.log(product)
  const classes = useStyles();

  const {
    productid,
    brand,
    productdescription,
    picture,
    price,
    modelname,
    productcategory,
    is_available,
  } = product;

  return (<>
  
  <Link to={"/products/" + productid }>
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
    </Link>
    </>
  );
};

export default Product;
