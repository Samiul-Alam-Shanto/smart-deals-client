import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recent-products").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-center font-bold text-5xl mb-10">
        Recent <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
