import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import Swal from "sweetalert2";
import HelmetWrapper from "../../components/HelmetWrapper";

const ProductCard = ({ product, onAddToCart }) => {
  const { productName, brandName, category, price, imageUrl, _id } = product;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-xl border border-gray-200">
      {/* Image Container */}
      <div className="p-4">
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-50">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={productName}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-0">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {category}
          </span>
          <span className="text-lg font-bold text-green-600">${price}</span>
        </div>

        <h3 className="mb-1 text-lg font-semibold text-gray-800 truncate">
          {productName}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{brandName}</p>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => onAddToCart(product)}
            className="btn bg-[#0393B7] text-white hover:bg-[#0381A1] w-full text-sm py-2 px-4 rounded-lg"
          >
            Add to Cart
          </button>
          
          <Link
            to={`/product-info/${_id}`}
            className="btn btn-outline btn-accent w-full text-sm py-2 px-4 rounded-lg text-center border border-[#0393B7] text-[#0393B7] hover:bg-[#0393B7] hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductCardSkeleton = () => {
  return (
    <div className="rounded-xl bg-white border border-gray-200 animate-pulse">
      {/* Image Skeleton */}
      <div className="p-4">
        <div className="h-48 w-full rounded-lg bg-gray-200" />
      </div>

      {/* Content Skeleton */}
      <div className="p-4 pt-0">
        <div className="mb-2 flex items-center justify-between">
          <div className="h-6 w-20 bg-gray-200 rounded-full" />
          <div className="h-6 w-16 bg-gray-200 rounded-lg" />
        </div>

        <div className="h-6 w-3/4 bg-gray-200 rounded-lg mb-1" />
        <div className="h-4 w-1/2 bg-gray-200 rounded-lg mb-4" />

        {/* Button Skeletons */}
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 bg-gray-200 rounded-lg" />
          <div className="h-10 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/add-product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter]);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = existingCart.some((item) => item._id === product._id);

    if (isAlreadyInCart) {
      Swal.fire({
        icon: "warning",
        title: "Already Added!",
        text: "This product is already in your cart.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const updatedCart = [...existingCart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      Swal.fire({
        icon: "success",
        title: "Added to Cart!",
        text: `${product.productName} has been added to your cart.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = categoryFilter === "all" || 
      product.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return nameMatch && categoryMatch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-4 sm:p-6">
      <HelmetWrapper title="Cravey | Shop" />
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Shop</h2>
        
        <div className="flex items-center w-full sm:w-auto gap-2">
          {/* Category Filter Dropdown */}
          <select
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7]"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="fruits">Fruits</option>
            <option value="drinks">Drinks</option>
            <option value="vegetables">Vegetables</option>
            <option value="snacks">Snacks</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="seafood">Seafood</option>
            <option value="beverages">Beverages</option>
            <option value="sweets">Sweets</option>
          </select>

          {/* Search Input */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Cart Link */}
          <Link to="/cart" className="p-2 bg-[#0393B7] text-white rounded-lg hover:bg-[#0381A1] transition-colors">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-500">
          <p className="text-lg">No products available.</p>
          <p className="text-sm mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-[#0393B7] text-white'
                      : 'border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Shop;