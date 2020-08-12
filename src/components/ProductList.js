import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, addToCart }) => {
  console.log("ProductList");
  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
