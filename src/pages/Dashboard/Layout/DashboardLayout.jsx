import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Home, ShoppingCart, PlusSquare, Edit, Trash2, Users, Settings, LogOut, Menu, X, Image, ClipboardList, User } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState(null);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to get formatted breadcrumb
  const getBreadcrumb = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    if (paths.length <= 1) return '';
    
    return paths.slice(1)
      .map(path => path.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      )
      .join(' → ');
  };

  // Add logout handler
  const handleLogOut = async () => {
    try {
      await Swal.fire({
        title: 'Are you sure?',
        text: "You will be signed out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0393B7',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, sign out!'
      }).then((result) => {
        if (result.isConfirmed) {
          logOut();
          Swal.fire({
            icon: 'success',
            title: 'Signed Out!',
            text: 'You have been successfully signed out.',
            showConfirmButton: false,
            timer: 1500,
            position: 'top-end',
            toast: true
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        position: 'top-end',
        toast: true,
        timer: 3000
      });
    }
  };

  useEffect(() => {
    const fetchUserFromDB = async () => {
      if (user?.email) {
        try {
          const response = await axios.get(`http://localhost:5000/users`);
          const users = response.data;
          const currentUser = users.find(u => u.email === user.email);
          if (currentUser) {
            setDbUser(currentUser);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserFromDB();
  }, [user]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
      
      {/* Sidebar - Updated with more professional color scheme */}
      <aside 
        className={`bg-slate-800 text-white transition-all duration-300 ease-in-out z-30
          ${collapsed ? "w-20" : "w-64"} 
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 fixed md:relative h-full`}
      >
        {/* Logo and toggle - Updated border color */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" width={35} height={35} />
            {!collapsed && <h1 className="text-xl font-bold ml-2">Cravey</h1>}
          </div>
          <button 
            onClick={() => setCollapsed(!collapsed)} 
            className="p-1 rounded-md hover:bg-slate-700 hidden md:block"
          >
            {collapsed ? "→" : "←"}
          </button>
          <button
            className="p-1 rounded-md hover:bg-slate-700 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Navigation - Updated active and hover states */}
        <nav className="mt-5 flex-1 overflow-y-auto">
          <ul className="space-y-1 px-2">
            <NavItem to="/dashboard" icon={<Home size={20} />} label="Dashboard" collapsed={collapsed} />
            <NavItem to="/dashboard/products" icon={<ShoppingCart size={20} />} label="Products" collapsed={collapsed} />
            <NavItem to="/dashboard/add-product" icon={<PlusSquare size={20} />} label="Add Product" collapsed={collapsed} />
            <NavItem to="/dashboard/manage-orders" icon={<ClipboardList size={20} />} label="Manage Orders" collapsed={collapsed} />
            <NavItem to="/dashboard/users" icon={<Users size={20} />} label="Users" collapsed={collapsed} />
            <NavItem to="/dashboard/settings" icon={<Settings size={20} />} label="Settings" collapsed={collapsed} />
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="py-4 px-6 flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                {/* Hamburger for mobile */}
                <button
                  className="mr-4 p-1 rounded-md hover:bg-gray-100 md:hidden"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu size={24} />
                </button>
                <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
              </div>
              {getBreadcrumb() && (
                <p className="text-sm text-gray-500 mt-1">
                  {getBreadcrumb()}
                </p>
              )}
            </div>
            
            {/* User Profile Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  {dbUser?.photoURL ? (
                    <img 
                      src={dbUser.photoURL} 
                      alt={dbUser.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/default-avatar.png';
                        e.target.onerror = null;
                      }}
                    />
                  ) : (
                    <div className="bg-[#0381A1] w-full h-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-700">{dbUser?.name}</p>
                  <p className="text-xs text-gray-500">{dbUser?.email}</p>
                </div>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="px-4 py-2 border-b md:hidden">
                  <p className="text-sm font-medium text-gray-700">{dbUser?.name}</p>
                  <p className="text-xs text-gray-500">{dbUser?.email}</p>
                </div>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// Navigation Item Component - Updated active and hover colors
const NavItem = ({ to, icon, label, collapsed }) => {
  return (
    <li>
      <NavLink 
        to={to}
        className={({ isActive }) => 
          `flex items-center p-3 rounded-md transition-colors ${
            isActive 
              ? 'bg-slate-700 text-white' 
              : 'text-slate-300 hover:bg-slate-700 hover:text-white'
          }`
        }
      >
        {icon}
        {!collapsed && <span className="ml-3">{label}</span>}
      </NavLink>
    </li>
  );
};

// Example content for the Images page remains unchanged
const ImagesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Product Images</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Upload New Image</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Image className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Drag and drop your image here, or click to browse</p>
            <button className="mt-4 px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors">
              Select Image
            </button>
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-medium mb-4">Recent Uploads</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Sample image placeholders */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group">
                <div className="bg-gray-200 aspect-square rounded-md overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <Image size={32} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="p-1 bg-white rounded-full mr-2">
                    <Edit size={16} />
                  </button>
                  <button className="p-1 bg-white rounded-full">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ImagesPage };
export default DashboardLayout;