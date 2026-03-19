import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartSummary() {
  const { state } = useContext(CartContext);

  const totalItems = state.cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <h3>Summary</h3>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}$</p>
    </>
  );
}

export default CartSummary;