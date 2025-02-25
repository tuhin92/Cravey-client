import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Store } from 'lucide-react';

const NotFound = () => {
  const [loaded, setLoaded] = useState(false);
  const [searching, setSearching] = useState(true);
  
  useEffect(() => {
    // Initial animation
    setLoaded(true);
    
    // Simulate searching animation
    const searchTimer = setTimeout(() => {
      setSearching(false);
    }, 2000);
    
    return () => clearTimeout(searchTimer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-gray-950 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-70"></div>
      </div>
      
      {/* Main content */}
      <div className={`relative z-10 w-full max-w-4xl px-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* 404 text - Centered */}
        <div className="text-center mb-12">
          <h1 className="text-[10rem] sm:text-[14rem] md:text-[18rem] font-bold leading-none tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 drop-shadow-lg">404</span>
          </h1>
        </div>
        
        {/* Message and buttons */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/"
              className="w-full sm:w-auto group bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <Home size={20} />
                Return Home
              </span>
            </Link>
            <Link 
              to="/shop"
              className="w-full sm:w-auto group bg-transparent border-2 border-gray-700 hover:border-gray-500 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <Store size={20} />
                Visit Shop
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-6 text-center text-gray-600 text-sm w-full">
        © {new Date().getFullYear()} Cravey. All rights reserved.
      </div>
    </div>
  );
};

export default NotFound;