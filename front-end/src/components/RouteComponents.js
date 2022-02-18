import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../Pages/Index/Index";
import Welcome from "../Pages/Welcome/Welcome";

const RouteComponents = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route path="/products" element={<Index />}></Route>
      </Routes>
    </>
  );
};

export default RouteComponents;