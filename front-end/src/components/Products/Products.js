import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchProduct from "../SearchProduct/SearchProduct";
import Content from "./Content/Content";
import ShoppingCart from "./ShoppingCart";

const API = process.env.REACT_APP_API_URL;
console.log("http://localhost:3333/products");
const Products = ({
  cartList,
  handleAddProduct,
  handleRemoveProduct,
  setCartList,
  handleCartEmpty,
}) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(API + "/products");
        setProducts(data);
        setFetchError(null);
      } catch (error) {
        setFetchError("Backend connection is not established!");
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => fetchData(), 1000);
  }, []);


  console.log(products);
  return (
    <>
      <SearchProduct search={search} setSearch={setSearch} />
      <div className="prod-cart-item">
        <ShoppingCart
          cartList={cartList}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          setCartList={setCartList}
          handleCartEmpty={handleCartEmpty}
        />
      </div>
      <main>
        {isLoading && <p>Loading products...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            product={products?.filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )}
            handleAddProduct={handleAddProduct}
          />
        )}
      </main>
    </>
  );
};

export default Products;
