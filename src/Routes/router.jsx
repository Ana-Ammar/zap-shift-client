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
        element: <Coverage />
      },
      {
        path: "/add-parcel",
        loader: () => fetch('/warehouses.json'),
        element: <AddParcel />
      }
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "all-deliveries",
        element: <AllDeliveries />
      }
    ]
  }
]);
