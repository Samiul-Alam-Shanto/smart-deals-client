import React, { use } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import AuthContext from "../Authentication/AuthContext";

const CreateProduct = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const minPrice = e.target.minPrice.value;
    const maxPrice = e.target.maxPrice.value;
    const productCondition = e.target.condition.value;
    const usageTime = e.target.usageTime.value;
    const productImageURL = e.target.productImageURL.value;
    const sellerName = e.target.sellerName.value;
    const sellerEmail = e.target.sellerEmail.value;
    const sellerContact = e.target.sellerContact.value;
    const sellerImage = e.target.sellerImageURL.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const newProduct = {
      title: title,
      price_min: parseInt(minPrice),
      price_max: parseInt(maxPrice),
      email: sellerEmail,
      category: category,
      image: productImageURL,
      status: "pending",
      location: location,
      seller_image: sellerImage,
      seller_name: sellerName,
      condition: productCondition,
      usage: usageTime,
      description: description,
      seller_contact: sellerContact,
    };
    console.log(newProduct);

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Created");
          navigate("/all-products");
        }
      });
  };

  const categories = [
    "Select a Category",
    "Electronics",
    "Vehicles",
    "Art and Hobbies",
    "Real Estate",
    "Services",
  ];

  return (
    <div className="min-h-[80vh] bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 ">
          <Link
            to="/all-products"
            className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mx-auto mb-4 cursor-pointer"
          >
            <FaArrowLeft />
            Back To Products
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Create A <span className="text-purple-600">Product</span>
          </h1>
        </div>

        {/* Form Container Card */}
        <div className="bg-white p-6 sm:p-10 border border-gray-200 rounded-xl shadow-lg">
          <form onSubmit={handleCreateProduct} className="space-y-6">
            {/* Row 1: Title and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Title
                </span>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Yamaha Fz Guitar For Sale"
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Category
                </span>
                <div className="relative">
                  <select
                    name="category"
                    className="w-full p-3 border border-gray-300 rounded-lg appearance-none  bg-white pr-8"
                    required
                  >
                    {categories.map((cat, index) => (
                      <option key={index} value={index === 0 ? "" : cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            {/* Row 2: Price Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Min Price You Want to Sale ($)
                </span>
                <input
                  type="number"
                  name="minPrice"
                  placeholder="e.g. 18.5"
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  required
                  min="0"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Max Price You Want to Sale ($)
                </span>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Optional (default = Min Price)"
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  min="0"
                />
              </label>
            </div>

            {/* Row 3: Product Condition and Usage Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Product Condition
                </span>
                <div className="flex space-x-6 pt-3">
                  <label className="inline-flex items-center text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="condition"
                      value="Brand New"
                      className="form-radio h-4 w-4 text-purple-600 border-gray-300 "
                    />
                    <span className="ml-2">Brand New</span>
                  </label>
                  <label className="inline-flex items-center text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="condition"
                      value="Used"
                      className="form-radio h-4 w-4 text-purple-600 border-gray-300 "
                    />
                    <span className="ml-2">Used</span>
                  </label>
                </div>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Product Usage time
                </span>
                <input
                  type="text"
                  name="usageTime"
                  placeholder="e.g. 1 year 3 month"
                  className="w-full p-3 border border-gray-300 rounded-lg "
                />
              </label>
            </div>

            {/* Row 4: Product Image URL */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 block mb-1">
                Your Product Image URL
              </span>
              <input
                type="url"
                name="productImageURL"
                placeholder="https://..."
                className="w-full p-3 border border-gray-300 rounded-lg "
              />
            </label>

            {/* Row 5: Seller Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Your Name
                </span>
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={user.displayName}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  readOnly
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Seller Email
                </span>
                <input
                  type="email"
                  name="sellerEmail"
                  defaultValue={user.email}
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  readOnly
                />
              </label>
            </div>

            {/* Row 6: Seller Contact and Image URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Seller Contact
                </span>
                <input
                  type="tel"
                  name="sellerContact"
                  placeholder="e.g. +1-555-1234"
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Seller Image URL
                </span>
                <input
                  type="url"
                  name="sellerImageURL"
                  defaultValue={user.photoURL}
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  readOnly
                />
              </label>
            </div>

            {/* Row 7: Location */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 block mb-1">
                Location
              </span>
              <input
                type="text"
                name="location"
                placeholder="City, Country"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </label>

            {/* Row 8: Description */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 block mb-1">
                Simple Description about your Product
              </span>
              <textarea
                name="description"
                placeholder="e.g. I bought this product 3 month ago, did not used more than 1/2 time, actually learning guitar is so tough...."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg resize-y"
                required
              />
            </label>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full h-12 bg-primary text-white font-bold text-lg rounded-lg shadow-md cursor-pointer"
              >
                Create A Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
