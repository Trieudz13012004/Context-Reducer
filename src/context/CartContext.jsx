import { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
