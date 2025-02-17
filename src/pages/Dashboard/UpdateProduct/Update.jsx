import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import HelmetWrapper from "../../../components/HelmetWrapper";

const UpdateProduct = () => {
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("in-stock");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Fetch product data by ID when the component mounts
    fetch(`http://localhost:5000/add-product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setProductName(data.productName);
          setBrandName(data.brandName);
          setCategory(data.category);
          setDescription(data.description);
          setPrice(data.price);
          setAvailability(data.availability);
          setImageUrl(data.imageUrl);
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) > 0 && !isNaN(value))) {
      setPrice(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Collect form data
    const productData = {
      productName,
      brandName,
      category,
      description,
      price,
      availability,
      imageUrl,
    };

    // Send the updated data to the API
    fetch(`http://localhost:5000/add-product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // Success alert when product is updated
          Swal.fire({
            title: "Product Updated!",
            text: "The product has been successfully updated.",
            icon: "success",
            confirmButtonText: "Great!",
          });
        } else {
          // Alert if no data was modified
          Swal.fire({
            title: "No Changes Made",
            text: "There were no changes to update.",
            icon: "info",
            confirmButtonText: "Okay",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        // Error alert in case of failure
        Swal.fire({
          title: "Error",
          text: "An error occurred while updating the product. Please try again later.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <HelmetWrapper title="Cravey | Dashboard-Update-Product" />
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Update Product
            </h2>
            <p className="mt-2 text-center text-gray-600">Edit the product details below</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter product name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter brand name"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter price"
                  value={price}
                  onChange={handlePriceChange}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter product description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  required
                >
                  <option value="in-stock">In Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                  <option value="pre-order">Pre-Order</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image URL
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 ease-in-out"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
