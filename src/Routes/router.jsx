import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddParcel from "../Pages/Add_Parcel/AddParcel";
import Dashboard from "../Layouts/Dashboard";
import AllDeliveries from "../Pages/Dashboard/AllDeliveries";
import ParcelDetails from "../Pages/Dashboard/ParcelDetails";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess";
import PaymentCancel from "../Pages/Dashboard/PaymentCancel";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import BeRider from "../Pages/BeARider/BeRider";
import RiderRequests from "../Pages/Dashboard/rider_request/RiderRequests";
import UsersManagement from "../Pages/Dashboard/users_management/UsersManagement";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
      },
      {
        path: "/add-parcel",
        loader: () => fetch("/warehouses.json"),
        element: <AddParcel />,
      },
      {
        path: "/be-rider",
        loader: () => fetch("/warehouses.json"),
        element: <BeRider />,
      },
    ],
  },

  // Auth Layout
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  // Router for Dashboard Layout
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "all-deliveries",
        element: <AllDeliveries />,
      },
      {
        path: "parcel-details/:id",
        element: <ParcelDetails />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-cancel",
        element: <PaymentCancel />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "rider-requests",
        element: (
          <AdminRoute>
            <RiderRequests />
          </AdminRoute>
        ),
      },
      {
        path: "users-management",
        element: (
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        ),
      },
    ],
  },
]);
