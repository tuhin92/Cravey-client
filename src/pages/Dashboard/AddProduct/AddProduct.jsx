import React, { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("in-stock");
  const [imageUrl, setImageUrl] = useState("");

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

    // Log or handle the product data (send to API, etc.)
    console.log(productData);

    // Reset form or give feedback (optional)
    setProductName("");
    setBrandName("");
    setCategory("");
    setDescription("");
    setPrice("");
    setAvailability("in-stock");
    setImageUrl("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Product</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Product Name</label>
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
          <label className="block text-gray-700 font-semibold mb-1">Brand Name</label>
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
          <label className="block text-gray-700 font-semibold mb-1">Category</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home-appliances">Home Appliances</option>
            <option value="beauty">Beauty & Health</option>
            <option value="sports">Sports & Outdoors</option>
            <option value="books">Books</option>
            <option value="toys">Toys</option>
            <option value="automobile">Automobile</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Description</label>
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
          <label className="block text-gray-700 font-semibold mb-1">Price ($)</label>
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
          <label className="block text-gray-700 font-semibold mb-1">Availability</label>
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
          <label className="block text-gray-700 font-semibold mb-1">Product Image URL</label>
          <input
            type="url"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        {/* Add Product Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
