import { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [products, setProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="home-page">
      <h1>Product Dashboard</h1>
      {products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} width="50" />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default HomePage;
