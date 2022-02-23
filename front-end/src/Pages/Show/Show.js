import React from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import "./Show.css";

const Show = ({ handleAddProduct }) => {
  return (
    <div className="show">
      <ProductDetails handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default Show;
