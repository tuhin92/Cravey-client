import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><a href="/dashboard/add-product">Add Product</a></li>
            <li><a href="/dashboard/update-product">Update Product</a></li>
            <li><a href="/dashboard/delete-product">Delete Product</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
