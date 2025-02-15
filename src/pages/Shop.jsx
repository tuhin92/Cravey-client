"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Search, ShoppingCart } from "lucide-react"

const Shop = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/add-product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error))
  }, [])

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Shop</h2>
        <div className="flex items-center w-full sm:w-auto">
          <div className="relative flex-grow mr-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Link to="/cart" className="p-2 bg-[#0393B7] text-white rounded-lg hover:bg-[#0381A1] transition-colors">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-3 sm:p-4 rounded-lg border max-h-[400px] flex flex-col"
            >
              <figure className="relative w-full h-36 sm:h-48 mb-3">
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.productName}
                  className="w-full h-full object-contain rounded-lg"
                />
              </figure>
              <div className="card-body p-2 sm:p-4 flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">{product.productName}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-lg font-bold text-green-600 mt-1">${product.price}</p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between mt-2 gap-2">
                  <button className="btn bg-[#0393B7] text-white w-full sm:w-auto text-sm py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-outline btn-accent w-full sm:w-auto text-sm py-2 px-4 rounded text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop

