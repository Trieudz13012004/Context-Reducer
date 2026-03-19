import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

function Header() {
  return (
    <div className="header">
      <h1>Shopping Store</h1>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </nav>
    </div>
  );
}

export default Header;