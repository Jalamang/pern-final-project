import React from "react";
import "./SearchProduct.css"
const SearchProduct = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input
      className="search-Form"
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchProduct;
