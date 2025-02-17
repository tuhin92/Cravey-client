"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, ShoppingCart, Heart, CheckCircle, XCircle } from "lucide-react"
import HelmetWrapper from "../components/HelmetWrapper"

const Product_info = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/add-product")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products")
        }
        return res.json()
      })
      .then((products) => {
        const foundProduct = products.find((p) => p._id === id)
        if (foundProduct) {
          setProduct(foundProduct)
        } else {
          setError("Product not found")
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching products:", error)
        setError(error.message)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-red-500 text-lg mb-4">Error: {error}</p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center transition duration-300 ease-in-out"
        >
          <ArrowLeft className="mr-2" size={16} /> Return to Home
        </Link>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-lg mb-4">Product not found</p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center transition duration-300 ease-in-out"
        >
          <ArrowLeft className="mr-2" size={16} /> Return to Home
        </Link>
      </div>
    )
  }

  const isInStock = product.availability === "in-stock"

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <HelmetWrapper title="Cravey | Product-info" />
      <div className="max-w-3xl mx-auto px-4">
        <Link
          to="/shop"
          className="text-blue-500 hover:text-blue-700 flex items-center mb-4 transition duration-300 ease-in-out"
        >
          <ArrowLeft className="mr-2" size={18} /> Back to Shop
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 flex items-center justify-center bg-gray-100">
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.productName}
                className="max-w-full max-h-[250px] object-contain rounded"
              />
            </div>

            <div className="p-4">
              <div className="mb-1 text-sm text-gray-500 capitalize">{product.category}</div>
              <h1 className="text-xl font-bold mb-2">{product.productName}</h1>
              <p className="text-gray-600 mb-3 text-sm">Brand: {product.brandName}</p>

              <div className="mb-3 flex items-center">
                <span className="text-2xl font-semibold">${product.price}</span>
                <div className="ml-3 flex items-center">
                  {isInStock ? (
                    <CheckCircle className="text-green-500 mr-1" size={16} />
                  ) : (
                    <XCircle className="text-red-500 mr-1" size={16} />
                  )}
                  <span className={`${isInStock ? "text-green-600" : "text-red-600"} text-sm`}>
                    {isInStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-md font-semibold mb-1">Description</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  className={`flex items-center px-4 py-2 rounded ${
                    isInStock
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  } transition duration-300 ease-in-out flex-1`}
                  disabled={!isInStock}
                >
                  <ShoppingCart className="mr-2" size={16} /> Add to Cart
                </button>
                <button className="flex items-center border border-purple-500 text-purple-500 hover:bg-purple-50 px-4 py-2 rounded transition duration-300 ease-in-out flex-1">
                  <Heart className="mr-2" size={16} /> Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product_info;

