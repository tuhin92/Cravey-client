import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/Layout/DashboardLayout";
import Products from "./pages/Dashboard/Products/Products";
import ManageOrders from "./pages/Dashboard/Manage Orders/ManageOrders";

// Create a root and render the App component
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main website layout (with navbar & footer) */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Dashboard Layout (without navbar & footer) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<Products />} />
          <Route path="manage-orders" element={<ManageOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
