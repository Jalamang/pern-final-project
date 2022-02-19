import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "../Pages/Edit/Edit";
import Index from "../Pages/Index/Index";
import New from "../Pages/New/New";
import Show from "../Pages/Show/Show";
import Welcome from "../Pages/Welcome/Welcome";

const RouteComponents = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route path="/products" element={<Index />}></Route>
        <Route path="/products/:id/" element={<Show />} ></Route>
        <Route path="/products/new" element={<New />} ></Route>
        <Route path="/products/:id/edit" element={<Edit />} ></Route>
      </Routes>
    </>
  );
};

export default RouteComponents;
