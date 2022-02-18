import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../Pages/Index/Index";
import Show from "../Pages/Show/Show";
import Welcome from "../Pages/Welcome/Welcome";

const RouteComponents = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route path="/products" element={<Index />}></Route>
        <Route path="/products/:id/" element={<Show />} />
      </Routes>
    </>
  );
};

export default RouteComponents;
