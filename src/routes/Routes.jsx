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
        Component: MyProducts,
      },
      {
        path: "/my-bids",
        Component: MyBids,
      },
      {
        path: "/add-a-product",
        Component: CreateProduct,
      },
      {
        path: "/product-details",
        Component: ProductDetails,
      },
    ],
  },
]);

export default router;
