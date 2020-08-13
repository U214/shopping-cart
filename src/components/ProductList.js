import React from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

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

export default connect(
  (state) => ({
    products: state.product.products,
  }),
  { addToCart }
)(ProductList);
