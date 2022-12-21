import { Button } from "@material-ui/core";
import {
  Badge
} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";



const Navbar = ({cartList}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex-container">
        <div className="home" onClick={() => navigate("/")}>
          <FaHome />
        </div>

        <div className="electronics" onClick={() => navigate("/products")}>
          Products
        </div>

        <Button
          className="primary new-prod"
          onClick={() => navigate("/products/new")}
        >
          New Product
        </Button>
        
        {/* <div
        className="primary new-prod">
            <Link to="/login" >Login</Link>
        </div> */}
        <div 
        onClick={() => navigate("/cart")}>
          <Badge badgeContent={cartList.length} color="primary">
            <ShoppingCartOutlined color="action" />
          </Badge>
        </div>
      </div>
    </>
  );
};

export default Navbar;
