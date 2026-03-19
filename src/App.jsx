import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import CartSummary from "./components/CartSummary.jsx";

function App() {
  return (
    <>
      <h1>Shopping Cart</h1>

      <ProductList />

      <hr />

      <Cart />

      <hr />

      <CartSummary />
    </>
  );
}

export default App;
