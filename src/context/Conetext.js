import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
const cart = createContext();

faker.seed(99);
const Conetext = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDis] = useReducer(productReducer, {
    byStock: false,
    byFastdelivery: false,
    searchQ: "",
  });
  return (
    <cart.Provider value={{ state, dispatch, productState, productDis }}>
      {children}
    </cart.Provider>
  );
};

export default Conetext;
export const CartState = () => {
  return useContext(cart);
};
