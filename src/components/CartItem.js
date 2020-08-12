import React from "react";
import Product from "./Product";

const CartItem = ({ price, quantity, title, onRemove }) => (
  <Product
    price={price}
    quantity={quantity}
    title={title}
    action={<button onClick={onRemove}>{" X "}</button>}
  />
);

export default CartItem;
