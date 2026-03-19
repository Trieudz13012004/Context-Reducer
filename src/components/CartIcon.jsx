import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartIcon() {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cart-icon">
      <i class="fa-solid fa-cart-shopping"></i>
      {totalItems > 0 && <span className="badge">{totalItems}</span>}
    </div>
  );
}

export default CartIcon;