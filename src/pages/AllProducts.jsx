import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      <h2 className="text-center font-bold text-5xl my-8">
        All<span className="text-primary"> Products</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
