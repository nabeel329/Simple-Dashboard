import React from "react";
import { Data } from "./Data"; // Importing the static data
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {Data.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={product.image} alt={product.title} width="150" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
