import React from "react";
import CartItem from "./CartItem";

const Cart = ({
  products,
  total,
  error,
  checkoutPending,
  checkout,
  removeFromCart,
}) => {
  const hasProducts = products.length > 0;
  const checkoutAllowed = hasProducts && !checkoutPending;
  const nodes = !hasProducts ? (
    <em>Please add some products to cart.</em>
  ) : (
    products.map((product) => (
      <CartItem
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        onRemove={() => removeFromCart(product.id)}
      />
    ))
  );

  console.log("cart");
  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={checkout} disabled={checkoutAllowed ? "" : "disabled"}>
        Checkout
      </button>
      <div style={{ color: "red " }}>{error}</div>
    </div>
  );
};

export default Cart;
