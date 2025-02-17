import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react"; // Import icons
import HelmetWrapper from "../../../components/HelmetWrapper";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/add-product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleEdit = (id) => {
    console.log("Edit product:", id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      fetch(`http://localhost:5000/delete-product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product deleted successfully!");
            setProducts(products.filter((product) => product._id !== id));
          }
        })
        .catch((error) => console.error("Error deleting product:", error));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <HelmetWrapper title="Cravey | Dashboard-Products" />
      <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Product Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Price ($)</th>
                <th className="py-3 px-6 text-left">Availability</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-t">
                  <td className="py-3 px-6">
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-6">{product.productName}</td>
                  <td className="py-3 px-6">{product.category}</td>
                  <td className="py-3 px-6 font-bold text-green-600">
                    ${product.price}
                  </td>
                  <td
                    className={`py-3 px-6 ${
                      product.availability === "in-stock"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.availability.replace("-", " ")}
                  </td>
                  <td className="py-3 px-6 text-center flex justify-center gap-4">
                    <button
                      onClick={() => handleEdit(product._id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products;
