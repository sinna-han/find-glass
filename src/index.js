import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Cooperation from "./pages/Cooperation";
import Enrolment from "./pages/Enrolment";
import Order from "./pages/Order";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import MyPage from "./pages/MyPage";
import OrderView from "./pages/OrderView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/company", element: <Company /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cooperation", element: <Cooperation /> },
      { path: "/enrolment", element: <Enrolment /> },
      { path: "/order", element: <Order /> },
      { path: "/search", element: <Search /> },
      { path: "/cart", element: <Cart /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/orderView", element: <OrderView /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
