import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Edit, Index, Welcome, Show, New, Cart } from "../Pages";
import Navbar from "./Navbar/Navbar";

const RouteComponents = () => {
  const [cartList, setCartList] = useState([]);

  const handleAddProduct = (product) => {
    setCartList([...cartList, { ...product }]);
  };

  const handleRemoveProduct = (removedProduct) => {
    setCartList(cartList.filter((product) => product !== removedProduct));
  };

  const handleCartEmpty = () => {
    setCartList([]);
  };

  return (
    <>
      <Navbar cartList={cartList} />
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route
          path="/products"
          element={
            <Index
              cartList={cartList}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              setCartList={setCartList}
              handleCartEmpty={handleCartEmpty}
            />
          }
        ></Route>
        <Route
          path="/products/:id/"
          element={<Show handleAddProduct={handleAddProduct} />}
        ></Route>
        <Route path="/products/new" element={<New />}></Route>
        <Route path="/products/:id/edit" element={<Edit />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartList={cartList}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              setCartList={setCartList}
              handleCartEmpty={handleCartEmpty}
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RouteComponents;
