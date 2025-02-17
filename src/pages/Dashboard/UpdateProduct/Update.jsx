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
    <div className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg border border-gray-200">
      <HelmetWrapper title="Cravey | Dashboard-Update-Product" />
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Update Product
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Product Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        {/* Brand Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Brand Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter brand name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Category
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Price ($)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>

        {/* Availability Status */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Availability
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          >
            <option value="in-stock">In Stock</option>
            <option value="out-of-stock">Out of Stock</option>
            <option value="pre-order">Pre-Order</option>
          </select>
        </div>

        {/* Product Image URL */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Product Image URL
          </label>
          <input
            type="url"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        {/* Update Product Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
