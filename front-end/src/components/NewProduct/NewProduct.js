import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import"./NewProduct.css"

const API = process.env.REACT_APP_API_URL;

const NewProduct = () => {
  const [product, setProduct] = useState({
    name:"", picture:"", color:"", capacity:"", description:"", material:"", rating:"", featured:""
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
    <div  className="new-product">
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="name"> Name : </label>
        <input
        class="form-control"
          type="text"
          id="name"
          value={product.name}
          onChange={handleTextChange}
          required
        />
      
        <label htmlFor="picture"> Url :</label>
        <input
        class="form-control"
          type="url"
          id="picture"
          value={product.picture}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="color"> Color :</label>
        <input
        class="form-control"
          type="text"
          id="color"
          value={product.color}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="capacity"> Capacity : </label>
        <input
        class="form-control"
          type="number"
          id="capacity"
          value={product.capacity}
          onChange={handleTextChange}
          required
        />
        
        <label htmlFor="description"> Description : </label>
        <input
        class="form-control"
          type="text"
          id="description"
          value={product.description}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="material"> Material : </label>
        <input
        class="form-control"
          type="text"
          id="material"
          value={product.material}
          onChange={handleTextChange}
          required
        />

           <label htmlFor="rating"> Rating : </label>
        <input
        class="form-control"
          type="number"
          id="rating"
          value={product.rating}
          onChange={handleTextChange}
          required
        />
           <label htmlFor="rating"> Featured : </label>
        <input
        class="form-control"
          type="text"
          id="featured"
          value={product.featured}
          onChange={handleTextChange}
          required
        />

<button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
