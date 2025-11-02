import React, { use } from "react";
import AuthContext from "../Authentication/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading)
    return (
      <div className="text-6xl font-bold min-h-[70vh] flex justify-center items-center">
        Loading....
      </div>
    );
  if (user && user.email) {
    return children;
  } else return <Navigate to="/login" />;
};

export default PrivateRoute;
