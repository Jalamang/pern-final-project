import { Button } from "@material-ui/core";
import React from "react";
import "./Products.css";

const ShoppingCard = ({
  cartList,
  handleAddProduct,
  handleRemoveProduct,
  handleCartEmpty,
}) => {
  const totalPrice = cartList.reduce(
    (price, item) => Number(price) + Number(item.price),
    0
  );

  return (
    <div className="cart-item">
      <h4>Shopping Card</h4>
      {!cartList.length && <p> Your cart is empty</p>}
      {cartList.length >= 1 && (
        <Button className="empty-cart" onClick={handleCartEmpty}>Empty Cart</Button>
      )}

      {cartList.map((product) => (
        <div key={product.toString()} className="row">
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>
                {" "}
                <img
                  src={product.picture}
                  alt={product.name}
                  width="50"
                  height="60"
                />
              </td>

              <td>
                <button onClick={() => handleAddProduct(product)}>+</button>
                <button onClick={() => handleRemoveProduct(product)}>-</button>
              </td>
              <td>{}</td>
              <td>{product.price}</td>
            </tr>
          </tbody>
        </div>
      ))}
      <div className="total">
        Total: ${Math.round((totalPrice + Number.EPSILON) * 100) / 100}
      </div>
    </div>
  );
};

export default ShoppingCard;
