import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      {item.name} - {item.price}$ x{item.quantity}

      <button
        onClick={() =>
          dispatch({ type: "INCREASE", payload: item.id })
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch({ type: "DECREASE", payload: item.id })
        }
        disabled={item.quantity === 1} // yêu cầu nâng cao
      >
        -
      </button>

      <button
        onClick={() =>
          dispatch({ type: "REMOVE", payload: item.id })
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;