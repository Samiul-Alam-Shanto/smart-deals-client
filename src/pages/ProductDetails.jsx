import React from "react";
import { useLoaderData } from "react-router";
import ProductInfo from "../components/ProductInfo";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  return (
    <div>
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetails;
