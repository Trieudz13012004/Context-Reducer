import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductItem({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="product">
      <span>
        {product.name} - {product.price}$
      </span>
      <button onClick={() => dispatch({ type: "ADD", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;