export const product = (state = {}, action) => {
  const products = state.products;
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const newProducts = action.products;
      return {
        ...state,
        products: newProducts.reduce((obj, product) => {
          return { ...obj, [product.id]: product };
        }, {}),
      };
    case ADD_TO_CART:
      const id = action.id;
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...products[id],
            inventory:
              products[id].inventory > 0 ? products[id].inventory - 1 : 0,
          },
        },
      };
  }
};
