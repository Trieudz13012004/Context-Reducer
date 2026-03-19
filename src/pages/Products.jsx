import { products } from "../data/products";
import ProductItem from "../components/ProductItem";

function Products() {
  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}

export default Products;