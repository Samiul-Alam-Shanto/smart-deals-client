import React from "react";
import { FaSearch } from "react-icons/fa";
import bgLeft from "../assets/bg-hero-left.png";
import bgRight from "../assets/bg-hero-right.png";
import { Link } from "react-router";

// SVG Search Icon Component

// Main Hero Section Component
const Hero = () => {
  return (
    <div
      className="relative container mx-auto w-full overflow-hidden bg-no-repeat  py-24 md:py-32"
      style={{
        backgroundImage: `url(${bgLeft}), url(${bgRight}), linear-gradient(to bottom right, #f3e8ff, #ffffff, #cffafe)`,
        backgroundPosition: "left center, right center, center",
      }}
    >
      {/* Note: The subtle background wave patterns from the image are complex and would
          typically be done with SVG or image assets. This component uses a simple
          gradient to capture the feel. */}

      <div className="container mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl">
          Deal Your <span className="text-primary">Products</span>
          <br />
          In A <span className="text-primary">Smart Way !</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* Search Bar */}
        <div className="relative mt-10 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search For Products, Categories..."
            className="w-full h-14 pl-6 pr-16 py-3 text-lg bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="button"
            className="absolute top-0 right-0 h-14 w-14 flex items-center justify-center rounded-r-full bg-primary cursor-pointer "
          >
            <FaSearch />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/all-products"
            className="w-full sm:w-auto h-12 px-8 py-3 font-semibold text-white bg-primary rounded-full shadow-md cursor-pointer "
          >
            Watch All Products
          </Link>
          <Link
            to="/add-a-product"
            className="w-full sm:w-auto h-12 px-8 py-3 font-semibold text-primary cursor-pointer bg-white border border-purple-600 rounded-full shadow-md "
          >
            Post a Product
          </Link>
        </div>
      </div>
    </div>
  );
};

// Default App component to render the HeroSection
export default Hero;
