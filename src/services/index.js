import _products from "./products";

const TIMEOUT = 100;
const MAX_CHECKOUT = 2;

export const api = {
  getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(_products), TIMEOUT);
    });
  },
  buyProducts(cart) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (Object.keys(cart).length <= MAX_CHECKOUT) resolve(cart);
        else reject(`너는 최대 ${MAX_CHECKOUT}개 종류 물건을 살 수 있다`);
      }, TIMEOUT)
    );
  },
};
