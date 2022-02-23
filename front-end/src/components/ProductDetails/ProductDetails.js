import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
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
import "./ProductDetails.css";

const ProductDetails = ({ handleAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    picture: "",
    capacity: "",
    description: "",
    material: "",
    rating: "",
    featured: "",
  });
  const classes = useStyles();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await axios.get(API + "/products/" + id);
      setProduct(productData.data);
    };
    fetchData();
  }, []);

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

  const handleDelete = async () => {
    await axios.delete(API + "/products/" + id);
    navigate("/products");
  };

  return (
    <>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item key={product.productid} xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={picture} title={name} />
            <CardContent>
              <div>
                <Typography variant="h5" gutterBottom></Typography>
                <Typography variant="h5"><strong>Brand:</strong> {name}</Typography>
                <Typography variant="h5"><strong>Price:</strong> {price}</Typography>
                <Typography variant="h5"><strong>Capacity:</strong> {capacity} Liter</Typography>
              </div>

              <Typography variant="h6" color="textSecondary">
                <strong>Material:</strong> {material}
              </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
              <IconButton onClick={handleAddProduct}>
                <AddShoppingCart />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <aside>
          <h2>About this item</h2>
          <Typography variant="body2">{description}</Typography>
          <br />

          <Button variant="primary" onClick={() => navigate("/products")}>
            Back
          </Button>
          <Button
            variant="success Edit"
            onClick={() => navigate("/products/" + id + "/edit")}
          >
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </aside>
      </Grid>
    </>
  );
};

export default ProductDetails;
