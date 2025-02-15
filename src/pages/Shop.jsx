"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/add-product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error))
  }, [])

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Shop</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
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

