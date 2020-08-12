import React from "react";

const Product = ({ price, quantity, title, action }) => (
  <div>
    {title} - &#36;{price} {quantity ? `x ${quantity}` : null} {action}
  </div>
);

export default Product;
