import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-5 pt-5">
        <img
          src="https://i.ibb.co.com/VWF4mKRq/Jade-Plant.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body px-5 ">
        <h2 className="card-title">
          {product.title}-{`[${product.usage}]`}
        </h2>
        <p className="text-primary font-semibold">
          $ {product.price_max}-{product.price_min}
        </p>
        <div className="card-actions">
          <Link
            to={`/product-details/${product._id}`}
            className="btn btn-outline text-primary border-purple-400 w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
