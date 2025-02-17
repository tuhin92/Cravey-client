import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/Layout/DashboardLayout";
import Products from "./pages/Dashboard/Products/Products";
import ManageOrders from "./pages/Dashboard/Manage Orders/ManageOrders";
import { Scroll } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/UserEnd/About";
import Home from "./pages/UserEnd/Home";
import Shop from "./pages/UserEnd/Shop";
import Services from "./pages/UserEnd/Services";
import Cart from "./pages/UserEnd/Cart";
import Product_info from "./pages/UserEnd/Product_info";
import Update from "./pages/Dashboard/UpdateProduct/Update";

// Create a root and render the App component
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {/* Main website layout (with navbar & footer) */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product-info/:id" element={<Product_info />} />
        </Route>

        {/* Dashboard Layout (without navbar & footer) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<Products />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="update-product/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
