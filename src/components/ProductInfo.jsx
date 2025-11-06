import React, { use, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import AuthContext from "../Authentication/AuthContext";

const getStatusClasses = (status) => {
  switch (status?.toLowerCase()) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "sold":
      return "bg-red-100 text-red-800";
    case "available": // Or "on sale" etc.
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const ProductInfo = ({ product }) => {
  const { user } = use(AuthContext);
  const [showBidBtn, setShowBidBtn] = useState(false);
  const [productBids, setProductBids] = useState([]);
  const bidModalRef = useRef(null);
  // console.log(product);

  useEffect(() => {
    fetch(`http://localhost:3000/product/bids/${product._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductBids(data);
      });
  }, [product]);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    const contact = e.target.contact.value;
    const productId = product._id;

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_image: user.photoURL,
      buyer_contact: contact,
      buyer_email: email,
      bid_price: parseInt(bid),
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Your bid has been placed");
        }
      });

    e.target.reset();
  };

  if (!product) return <div>Loading...</div>; // Simple loading state

  const statusClasses = getStatusClasses(product.status);

  return (
    <main className="w-full bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column (Image & Description) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Image */}
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co.com/VWF4mKRq/Jade-Plant.jpg"
                //src={product.image}
                alt={product.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
            </div>

            {/* Description Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Product Description
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="text-sm">
                  <span className=" text-purple-700">Condition: </span>
                  <span className="font-bold capitalize">
                    {product.condition}
                  </span>
                </div>
                <div className="text-sm">
                  <span className=" text-purple-700">Usage Time: </span>
                  <span className="font-bold ">{product.usage}</span>
                </div>
              </div>
              <hr />
              <p className="text-gray-500 mt-5 ">{product.description}</p>
            </div>
          </div>

          {/* Right Column (Info Sidebar) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Back Button */}
            <Link
              to="/all-products"
              className="flex items-center font-semibold  hover:text-purple-700 transition-colors mb-4"
            >
              <FaArrowLeft /> Back To Products
            </Link>

            {/* Title & Category */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <span className="mt-2 inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>
            </div>

            {/* Price Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-green-600 mt-1">
                ${product.price_min} - ${product.price_max}
              </p>
              <p>Price starts from</p>
            </div>

            {/* Product Details Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Product Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="text-gray-500">Product ID:</span>
                  <span className="font-medium text-gray-700">
                    {product._id}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">Posted:</span>
                  <span className="font-medium text-gray-700">
                    {new Date(product.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Seller Info Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Seller Information
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0">
                  {product.seller_image ? (
                    <img
                      src={product.seller_image}
                      alt={product.seller_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUser />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {product.seller_name}
                  </h4>
                  <p className="text-sm text-gray-500">{product.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm mt-4">
                <div className="flex gap-3">
                  <span className="text-black font-semibold">Location:</span>
                  <span className="font-medium text-gray-700">
                    {product.location}
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-black font-semibold">Contact:</span>
                  <span className="font-medium text-gray-700">
                    {product.seller_contact}
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-black font-semibold">Status:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusClasses}`}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            {showBidBtn ? (
              <>
                <button
                  onClick={() => bidModalRef.current.showModal()}
                  className="w-full h-14 text-white font-bold text-lg rounded-lg shadow-md cursor-pointer bg-primary"
                >
                  Bid
                </button>
                <button className="w-full h-14 text-black font-bold text-lg rounded-lg shadow-md cursor-pointer btn-outline border border-purple-600">
                  Product To Wishlist
                </button>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog
                  ref={bidModalRef}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-center mb-5 text-lg">
                      Give Seller Your Offered Price
                    </h3>
                    <form onSubmit={handleBidSubmit}>
                      {/* Buyer Name and Email (Two Columns) */}
                      <div className="grid grid-cols-1 mb-5 sm:grid-cols-2 gap-4">
                        <label className="block">
                          <span className="text-sm font-medium text-gray-700 block mb-1">
                            Buyer Name
                          </span>
                          <input
                            type="text"
                            name="name"
                            defaultValue={user.displayName}
                            className="w-full p-3 border border-gray-300 rounded-lg cursor-not-allowed"
                            readOnly
                            disabled
                          />
                        </label>
                        <label className="block">
                          <span className="text-sm font-medium text-gray-700 block mb-1">
                            Buyer Email
                          </span>
                          <input
                            type="email"
                            name="email"
                            defaultValue={user.email}
                            className="w-full p-3 border border-gray-300 rounded-lg cursor-not-allowed "
                            readOnly
                            disabled
                          />
                        </label>
                      </div>

                      {/* Place Your Price (Full Width) */}
                      <label className="block">
                        <span className="text-sm font-medium text-gray-700 block mb-1">
                          Place your Price
                        </span>
                      </label>
                      <input
                        type="number"
                        name="bid"
                        placeholder="e.g. 500"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out mb-5"
                        required
                        min="0"
                      />

                      {/* Contact Info (Full Width) */}
                      <label className="block">
                        <span className="text-sm font-medium text-gray-700 block mb-1">
                          Contact Info
                        </span>
                      </label>
                      <input
                        type="text"
                        name="contact"
                        placeholder="e.g. +1-555-1234"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                        required
                      />
                      <button
                        type="submit"
                        className="px-6 mt-2 w-full py-2 bg-primary text-white font-semibold rounded-lg shadow-md cursor-pointer"
                      >
                        Submit Bid
                      </button>
                    </form>

                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowBidBtn(true)}
                  className="w-full h-14 text-white font-bold text-lg rounded-lg shadow-md cursor-pointer bg-primary"
                >
                  I Want Buy This Product
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {product.email === user.email ? (
        <div className="mt-8">
          <h2 className="font-bold text-4xl">
            Bids For This Product : {productBids.length}
          </h2>
          <div className="overflow-x-auto py-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Product</th>
                  <th>Seller</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {productBids.map((bid, index) => (
                  <tr key={bid._id}>
                    <td className="font-semibold">{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-2xl h-12 w-12">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              // src={product.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <h3>{product.title}</h3>
                          <p>${product.price_min}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-2xl h-12 w-12">
                            <img
                              // src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              src={bid.buyer_image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <h3>{bid.buyer_name}</h3>
                          <p>{bid.buyer_email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">${bid.bid_price}</div>
                    </td>

                    <th>
                      <div className="flex items-center flex-wrap gap-2">
                        <button className="btn btn-outline btn-xs border-green-400 text-green-700 rounded-md">
                          Accept Offer
                        </button>
                        <button className="btn btn-outline btn-xs border-red-400 text-red-600 rounded-md">
                          Reject Offer
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default ProductInfo;
