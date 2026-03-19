import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, totalItems, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <hr />

      <h3>Summary</h3>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}$</p>
    </div>
  );
}

export default Cart;