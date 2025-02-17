import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"
import HelmetWrapper from "../components/HelmetWrapper"

const Cart = () => {
  const [cart, setCart] = useState([])

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storedCart)
  }, [])

  // Remove item from cart (with confirmation alert)
  const handleRemoveFromCart = (productId, productName) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove "${productName}" from the cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter((product) => product._id !== productId)
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))

        Swal.fire({
          icon: "success",
          title: "Removed!",
          text: `"${productName}" has been removed from your cart.`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  // Handle individual order
  const handleOrderNow = (product) => {
    Swal.fire({
      title: "Confirm Order",
      text: `Do you want to order "${product.productName}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0393B7",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order Now!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter((p) => p._id !== product._id)
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))

        Swal.fire({
          icon: "success",
          title: "Order Placed!",
          text: `"${product.productName}" has been ordered successfully.`,
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-4 sm:p-6">
      <HelmetWrapper title="Cravey | Cart" />
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {cart.map((product) => (
            <div
              key={product._id}
              className="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-3 sm:p-4 rounded-lg border flex flex-col"
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

                <div>
                  {/* Order Now Button */}
                  <button
                    className="btn bg-[#0393B7] text-white w-full text-sm py-2 px-4 rounded mt-2"
                    onClick={() => handleOrderNow(product)}
                  >
                    Order Now
                  </button>

                  {/* Remove Button (with confirmation) */}
                  <button
                    className="btn btn-error text-white w-full text-sm py-2 px-4 rounded mt-2"
                    onClick={() => handleRemoveFromCart(product._id, product.productName)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart
