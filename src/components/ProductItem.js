import React from "react";
import Product from "./Product";

const ProductItem = ({ product, onAddToCartClicked }) => {
  const addToCartAction = (
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? "" : "disabled"}
    >
      {product.inventory > 0 ? "Add to cart" : "Sold out"}
    </button>
  );

  return (
    <div style={{ marginBottom: 20 }}>
      <Product
        title={product.title}
        price={product.price}
        action={addToCartAction}
      />
    </div>
  );
};

export default ProductItem;
