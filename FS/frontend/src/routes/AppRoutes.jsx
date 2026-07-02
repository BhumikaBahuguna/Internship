import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import VerifyLoginOtp from "../pages/VerifyLoginOtp";
import VerifyRegisterOtp from "../pages/VerifyRegisterOtp";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "verify-register-otp",
        element: <VerifyRegisterOtp />
      },
      {
        path: "verify-login-otp",
        element: <VerifyLoginOtp />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;
