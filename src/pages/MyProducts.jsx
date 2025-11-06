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
    <div className="overflow-x-auto py-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL No</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {userProducts.map((product, index) => (
            <tr key={product._id}>
              <td className="font-semibold">{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-2xl h-12 w-12">
                      <img
                        // src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        src={product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{product.title}</div>
                  <div className="text-sm opacity-50">{product.location}</div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  {product.category}
                </span>
              </td>
              <td>
                ${product.price_min} - {product.price_max}
              </td>
              <td>{product.status}</td>
              <th>
                <div className="flex items-center flex-wrap gap-2">
                  <Link
                    to={`/product-details/${product._id}`}
                    className="btn btn-ghost btn-xs  bg-yellow-200 rounded-full"
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
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
