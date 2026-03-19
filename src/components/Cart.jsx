import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state } = useContext(CartContext);

  return (
    <>
      <h2>Cart</h2>

      {state.cart.length === 0 && <p>Empty</p>}

      {state.cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default Cart;