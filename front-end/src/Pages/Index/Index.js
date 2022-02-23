import React from "react";
import Products from "../../components/Products/Products";
import "./Index.css";
const Index = ({
  cartList,
  handleAddProduct,
  handleRemoveProduct,
  setCartList,
  handleCartEmpty,
}) => {
  return (
    <div className="index">
      <Products
        cartList={cartList}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        setCartList={setCartList}
        handleCartEmpty={handleCartEmpty}
      />
    </div>
  );
};

export default Index;
