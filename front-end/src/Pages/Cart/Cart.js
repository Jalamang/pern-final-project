import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ShoppingCart from "../../components/Products/ShoppingCart";
import "./Cart.css";
const Cart = ({
  cartList,
  handleAddProduct,
  handleRemoveProduct,
  setCartList,
  handleCartEmpty,
}) => {
  const navigate = useNavigate();
  return (
    <div className="cart">
      <ShoppingCart
        cartList={cartList}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        setCartList={setCartList}
        handleCartEmpty={handleCartEmpty}
      />
      <Button variant="primary" onClick={() => navigate("/products")}>
        Back
      </Button>
    </div>
  );
};

export default Cart;
