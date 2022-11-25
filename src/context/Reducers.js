export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newCart = [...state.cart];
      newCart.push({ ...action.payload, qty: 1 });
      return {
        ...state,
        cart: newCart,
      };
    case "REMOVE_FROM_CART":
      const cart = [...state.cart];
      const updatedCart = cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart: updatedCart,
      };
    case "CHANGE_CART_QTY":
      const cartQty = [...state.cart];
      const updatedQty = cartQty.filter((item) =>
        item.id === action.payload.id
          ? (item.qty = action.payload.qty)
          : item.qty
      );
      return {
        ...state,
        cart: updatedQty,
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastdelivery: !state.byFastdelivery };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQ: action.payload };
    case "CLEAR_FILTER":
      return { byStock: false, byFastdelivery: false, searchQ: "", sort: "" };
    default:
      return state;
  }
};
