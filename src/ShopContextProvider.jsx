import { createContext, useReducer } from "react";
import shopReducer from "./ShopReducer";
import { initialState } from "./ShopReducer";

export const ShopContext = createContext(initialState);

export default function ShopContextProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updateCart = state.products.concat(product);
    updatePrice(updateCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updateCart
      }
    });
  };

  const removeFromCart = (product) => {
    const updateCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updateCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updateCart
      }
    })
  }

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total
      }
    })
  }

  return (
    <ShopContext.Provider value={
      {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart
      }
    }>
      {children}
    </ShopContext.Provider>
  )
}
