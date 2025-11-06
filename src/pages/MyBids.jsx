import React, { use, useEffect, useState } from "react";
import AuthContext from "../Authentication/AuthContext";
import { Link } from "react-router";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-bids?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [user]);

  // console.log(userProducts);

  const handleRemoveBid = (id) => {
    fetch(`http://localhost:3000/bids/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingBids = bids.filter((product) => product._id !== id);
          setBids(remainingBids);
        }
      });
    // console.log(id);
  };

  return (
    <>
      {bids.length === 0 ? (
        <div className="container mx-auto min-h-[60vh] flex flex-col items-center justify-center gap-5">
          <h2 className="font-bold text-2xl text-primary">
            Please Bid On Some Products
          </h2>
          <Link to="/all-products" className="btn btn-primary">
            Go to Products
          </Link>
        </div>
      ) : (
        <div className="mt-8 container mx-auto">
          <h2 className="font-bold text-4xl">
            Bids For This Product : {bids.length}
          </h2>
          <div className="overflow-x-auto py-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No</th>
                  {/* <th>Product</th> */}
                  <th>Seller</th>
                  <th>Bid Price</th>
                  {/* <th>Status</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {bids.map((bid, index) => (
                  <tr key={bid._id}>
                    <td className="font-semibold">{index + 1}</td>
                    {/* <td>
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
                    </td> */}
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
                        <button
                          onClick={() => handleRemoveBid(bid._id)}
                          className="btn btn-outline btn-xs border-red-400 text-red-600 rounded-md"
                        >
                          Remove Bid
                        </button>
                      </div>
                    </th>
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

export default MyBids;
