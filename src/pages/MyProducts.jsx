import React, { use, useEffect, useState } from "react";
import AuthContext from "../Authentication/AuthContext";
import { Link } from "react-router";

const MyProducts = () => {
  const { user } = use(AuthContext);
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-products?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserProducts(data));
  }, [user]);

  // console.log(userProducts);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingProducts = userProducts.filter(
            (product) => product._id !== id
          );
          setUserProducts(remainingProducts);
        }
      });
    // console.log(id);
  };

  return (
    <>
      {userProducts.length === 0 ? (
        <div className="container mx-auto min-h-[60vh] flex flex-col items-center justify-center gap-5">
          <h2 className="font-bold text-2xl text-primary">
            Please Create Your Product
          </h2>
          <Link to="/add-a-product" className="btn btn-primary">
            Create a Product
          </Link>
        </div>
      ) : (
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-4xl">
            Your Products : {userProducts.length}
          </h2>
          <div className="overflow-x-auto py-5">
            <table className="table w-full min-w-[700px] sm:min-w-full">
              {/* head */}
              <thead>
                <tr className="bg-base-200">
                  <th className="text-xs sm:text-sm">SL No</th>
                  <th className="text-xs sm:text-sm">Image</th>
                  <th className="text-xs sm:text-sm">Product Name</th>
                  <th className="text-xs sm:text-sm">Category</th>
                  <th className="text-xs sm:text-sm">Price</th>
                  <th className="text-xs sm:text-sm">Status</th>
                  <th className="text-xs sm:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userProducts.map((product, index) => (
                  <tr
                    key={product._id}
                    className="hover:bg-base-200 transition-all duration-200"
                  >
                    <td className="font-semibold text-sm sm:text-base">
                      {index + 1}
                    </td>
                    <td>
                      <div className="flex items-center justify-center sm:justify-start">
                        <div className="avatar">
                          <div className="mask rounded-xl h-10 w-10 sm:h-12 sm:w-12">
                            <img
                              src={product.image}
                              alt="Product"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold text-sm sm:text-base">
                          {product.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {product.location}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {product.category}
                      </span>
                    </td>
                    <td className="text-sm">
                      ${product.price_min} - {product.price_max}
                    </td>
                    <td className="text-sm">{product.status}</td>
                    <td>
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-center sm:justify-start">
                        <Link
                          to={`/product-details/${product._id}`}
                          className="btn btn-ghost btn-xs bg-yellow-200 rounded-full"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn btn-ghost btn-xs bg-red-200 rounded-full"
                        >
                          Delete
                        </button>
                        <button className="btn btn-ghost btn-xs bg-green-200 rounded-full">
                          Make Sold
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProducts;
