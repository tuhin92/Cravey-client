import { Outlet, NavLink } from "react-router-dom";
import { Home, Package, PlusSquare, Edit, Trash2, Users, Settings, LogOut } from "lucide-react";
import { useState } from "react";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`bg-indigo-800 text-white transition-all duration-300 ease-in-out ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-indigo-700">
          {!collapsed && <h1 className="text-xl font-bold">Cravey</h1>}
          <button 
            onClick={() => setCollapsed(!collapsed)} 
            className="p-1 rounded-md hover:bg-indigo-700"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="mt-5">
          <ul className="space-y-2 px-2">
            <NavItem to="/dashboard" icon={<Home size={20} />} label="Dashboard" collapsed={collapsed} />
            <NavItem to="/dashboard/products" icon={<Package size={20} />} label="Products" collapsed={collapsed} />
            <NavItem to="/dashboard/add-product" icon={<PlusSquare size={20} />} label="Add Product" collapsed={collapsed} />
            <NavItem to="/dashboard/update-product" icon={<Edit size={20} />} label="Update Product" collapsed={collapsed} />
            <NavItem to="/dashboard/delete-product" icon={<Trash2 size={20} />} label="Delete Product" collapsed={collapsed} />
            <NavItem to="/dashboard/users" icon={<Users size={20} />} label="Users" collapsed={collapsed} />
            <NavItem to="/dashboard/settings" icon={<Settings size={20} />} label="Settings" collapsed={collapsed} />
          </ul>
        </nav>
        
        {/* Logout at the bottom */}
        <div className="absolute bottom-0 w-full p-4 border-t border-indigo-700">
          <NavLink 
            to="/logout" 
            className="flex items-center text-white hover:bg-indigo-700 rounded-md p-2 transition-colors"
          >
            <LogOut size={20} />
            {!collapsed && <span className="ml-3">Logout</span>}
          </NavLink>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-semibold text-gray-800">Cravey Dashboard</h2>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ to, icon, label, collapsed }) => {
  return (
    <li>
      <NavLink 
        to={to}
        className={({ isActive }) => 
          `flex items-center p-2 rounded-md transition-colors ${
            isActive 
              ? 'bg-indigo-700 text-white' 
              : 'text-indigo-100 hover:bg-indigo-700'
          }`
        }
      >
        {icon}
        {!collapsed && <span className="ml-3">{label}</span>}
      </NavLink>
    </li>
  );
};

export default DashboardLayout;