import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({
    brand: "",
  });
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await axios.get(API + "/products/" + id);
      setProduct(productData.data);
    };
    fetchData();
  }, []);

  const { brand } = product;
  return (
    <div>
      ProductDetails
      <h4>{brand}</h4>
    </div>
  );
};

export default ProductDetails;
