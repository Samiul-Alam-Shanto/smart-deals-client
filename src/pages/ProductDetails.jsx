import React from "react";
import { useLoaderData, useParams } from "react-router";
import ProductInfo from "../components/ProductInfo";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useLoaderData();
  const product = products.find((product) => product._id == id);

  return (
    <div>
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetails;
