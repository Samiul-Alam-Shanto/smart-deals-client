import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProducts from "../pages/MyProducts";
import MyBids from "../pages/MyBids";
import CreateProduct from "../pages/CreateProduct";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-products",
        Component: AllProducts,
        loader: () => fetch("http://localhost:3000/all-products"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/all-products"),
      },
      {
        path: "/add-a-product",
        element: (
          <PrivateRoute>
            <CreateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
