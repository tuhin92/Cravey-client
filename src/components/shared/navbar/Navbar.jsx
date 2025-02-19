import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Orange color styling for active links
  const getLinkClass = ({ isActive }) => {
    return isActive
      ? "text-orange-400 font-bold hover:text-orange-300 border-b-2 border-orange-400"
      : "text-white hover:text-gray-200";
  };

  const navLinks = (
    <>
      <li className="relative">
        <NavLink to="/" end className={getLinkClass}>
          Home
        </NavLink>
      </li>
      <li className="relative">
        <NavLink to="/shop" className={getLinkClass}>
          Shop
        </NavLink>
      </li>
      <li className="relative">
        <NavLink to="/services" className={getLinkClass}>
          Services
        </NavLink>
      </li>
      <li className="relative">
        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>
      </li>
    </>
  );

  // Add custom CSS to enforce our styles with orange color
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .active-nav-link {
        color: #fb923c !important;
        font-weight: bold;
        border-bottom: 2px solid #fb923c;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Custom click handler to add our class
  const handleNavLinkClick = (e) => {
    // Remove active class from all links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active-nav-link");
    });

    // Add active class to clicked link
    e.currentTarget.classList.add("active-nav-link");
  };

  // Modify navLinks to include click handler and custom class
  const enhancedNavLinks = React.Children.map(
    navLinks.props.children,
    (child) => {
      return React.cloneElement(child, {
        children: React.cloneElement(child.props.children, {
          className: (props) => `nav-link ${getLinkClass(props)}`,
          onClick: handleNavLinkClick,
        }),
      });
    }
  );

  const renderAuthButton = () => {
    if (user) {
      return (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt={user.displayName} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="bg-[#0381A1] w-full h-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
          </div>
          <div tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-white rounded-box w-52 mt-2">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-medium text-gray-900">{user.displayName}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
            <button
              onClick={handleLogOut}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg w-full mt-2"
            >
              <LogOut size={16} />
              Sign out
            </button>
          </div>
        </div>
      );
    }

    return (
      <NavLink to="sign-in" className="btn btn-outline text-white">
        Sign in
      </NavLink>
    );
  };

  return (
    <div
      className="bg-[#0393b7] text-white sticky top-0 z-50"
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
    >
      <div className="navbar max-w-7xl mx-auto backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-600 backdrop-blur-sm rounded-box z-[1] mt-3 w-52 p-2 shadow lg:bg-transparent"
            >
              {enhancedNavLinks}
            </ul>
          </div>
          {/* White Logo */}
          <img src="/logo.png" alt="Logo" width={35} height={35} />
          <a className="btn btn-ghost text-2xl text-white">Cravey</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-transparent">
            {enhancedNavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {renderAuthButton()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
