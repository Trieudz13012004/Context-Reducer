import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];

function ProductList() {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id}>
          {p.name} - {p.price}$ 
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: p })}>Add to Cart</button>
        </div>
      ))}
    </>
  );
}

export default ProductList;