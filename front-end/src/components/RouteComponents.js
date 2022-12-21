import React, { useState } from "react";
import {Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Edit, Index, Welcome, Show, New, Cart } from "../Pages";
import Dashboard from "./Dashboard";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import Navbar from "./Navbar/Navbar";
import Register from "./Register/Register";

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

  const PrivateRoutes = () => {
    // const { isAuth } = useSelector((state) => state.auth)
    const isAuth = false;
    return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
  };

  const RestrictedRoutes = () => {
    // const { isAuth } = useSelector((state) => state.auth)
    const isAuth = false;
    return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
  };

  return (
    <>
      <Navbar cartList={cartList} />
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
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
        </Route>
      </Routes>
    </>
  );
};

export default RouteComponents;
