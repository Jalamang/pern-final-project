import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
const NewProduct = () => {
  const [product, setProduct] = useState({
    brand: "",
    productdescription: "",
    picture: "",
    price: "",
    modelname: "",
    productcategory: "",
    is_available: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await axios.get(API + "/products/" + id);
      setProduct(productData.data);
    };
    fetchData();
  }, []);

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setProduct({ ...product, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    id !== undefined
      ? axios
          .put(API + "/products/" + id, product)
          .then(() => navigate("/products/" + id))
      : axios
          .post(API + "/products", product)
          .then(() => navigate(`/products`));
  };

  return (
    <div>
      NewProduct
      <form onSubmit={handleSubmit}>
        <label htmlFor="brand"> Brand : </label>
        <input
          type="text"
          id="brand"
          value={product.brand}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="productdescription"> Product Description :</label>
        <input
          type="text"
          id="productdescription"
          value={product.productdescription}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="picture"> Image : </label>
        <input
          type="text"
          id="picture"
          value={product.picture}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="price"> Price : </label>
        <input
          type="number"
          id="price"
          value={product.price}
          onChange={handleTextChange}
          required
        />
        
        <label htmlFor="modelname"> Model Name : </label>
        <input
          type="text"
          id="modelname"
          value={product.modelname}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="productcategory"> Product Category : </label>
        <input
          type="text"
          id="productcategory"
          value={product.productcategory}
          onChange={handleTextChange}
          required
        />

<input type="submit" />
      </form>
    </div>
  );
};

export default NewProduct;
