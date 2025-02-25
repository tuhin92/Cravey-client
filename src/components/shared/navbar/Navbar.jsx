import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { LogOut, User, ShoppingCart } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";

const Navbar = () => {
  const { user, logOut, isAdmin, loading } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState(null);

  const handleLogOut = async () => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You will be signed out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0393B7",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, sign out!",
      }).then((result) => {
        if (result.isConfirmed) {
          logOut();
          Swal.fire({
            icon: "success",
            title: "Signed Out!",
            text: "You have been successfully signed out.",
            showConfirmButton: false,
            timer: 1500,
            position: "top-end",
            toast: true,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        position: "top-end",
        toast: true,
        timer: 3000,
      });
    }
  };

  // Add useEffect to fetch user data
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

  // Update renderAuthButton to handle loading state
  const renderAuthButton = () => {
    if (loading) {
      return (
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
          <div className="w-6 h-6 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
        </div>
      );
    }

    if (user && dbUser) {
      return (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ring-2 ring-white/10">
              {dbUser.photoURL ? (
                <img
                  src={dbUser.photoURL}
                  alt={dbUser.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.src = '/default-avatar.png';
                    e.target.onerror = null;
                  }}
                />
              ) : (
                <div className="bg-[#0381A1] w-full h-full flex items-center justify-center rounded-full">
                  <User className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-4 shadow bg-white rounded-box w-52 mt-2"
          >
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-medium text-gray-900">
                {dbUser.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{dbUser.email}</p>
            </div>
            {/* Add Dashboard Link for Admin */}
            {isAdmin && (
              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg w-full mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
                Dashboard
              </Link>
            )}
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
          <Link to="/">
            <a className="btn btn-ghost text-2xl text-white">Cravey</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-transparent">
            {enhancedNavLinks}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          {/* Add Cart Icon */}
          <Link to="/cart" className="btn btn-ghost btn-circle">
            <ShoppingCart className="h-6 w-6 text-white" />
          </Link>

          {renderAuthButton()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
