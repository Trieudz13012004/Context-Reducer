import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="cart-item">
      <span>
        {item.name} - {item.price}$ x{item.quantity}
      </span>

      <button onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>
        +
      </button>

      <button
        disabled={item.quantity === 1}
        onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
      >
        -
      </button>

      <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
