import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { api } from "../services";

export default function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState({});
  const [error, setError] = useState("");
  const [checkoutPending, setCheckoutPending] = useState(false);

  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
  });

  const fetchProducts = async () => {
    const data = await api.getProducts();
    setProducts(
      data.reduce((obj, product) => {
        return { ...obj, [product.id]: product };
      }, {})
    );
  };

  const addToCart = (id) => {
    setProducts({
      ...products,
      [id]: {
        ...products[id],
        inventory: products[id].inventory > 0 ? products[id].inventory - 1 : 0,
      },
    });

    setCart({
      ...cart,
      [id]: {
        ...products[id],
        quantity: cart[id] ? cart[id].quantity + 1 : 1,
      },
    });
  };

  const removeFromCart = (id) => {
    setProducts({
      ...products,
      [id]: {
        ...products[id],
        inventory: products[id].inventory + 1,
      },
    });

    if (cart[id].quantity === 1) {
      const newCart = cart;
      delete newCart[id];
      setCart(newCart);
      return;
    }
    setCart({
      ...cart,
      [id]: {
        ...products[id],
        quantity: cart[id].quantity - 1,
      },
    });
  };

  const checkout = async () => {
    try {
      setCheckoutPending(true);
      await api.buyProducts(cart);
      setCart({});
      setError("");
    } catch (e) {
      setError(e);
    } finally {
      setCheckoutPending(false);
    }
  };

  const getProductList = () => {
    if (!products) return [];
    return Object.values(products);
  };
  const getCartList = () => Object.values(cart);
  const getTotal = () => {
    return Object.values(cart).reduce((total, product) => {
      return (total += product.price * product.quantity);
    }, 0);
  };

  return (
    <div>
      <h2>Shopping Cart Example</h2>
      <hr />
      <ProductList products={getProductList()} addToCart={addToCart} />
      <hr />
      <Cart
        products={getCartList()}
        total={getTotal()}
        error={error}
        removeFromCart={removeFromCart}
        checkout={checkout}
        checkoutPending={checkoutPending}
      />
    </div>
  );
}
