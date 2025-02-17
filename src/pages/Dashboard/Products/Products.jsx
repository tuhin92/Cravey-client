import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import HelmetWrapper from "../../../components/HelmetWrapper";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:5000/add-product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleEdit = (id) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/add-product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setProducts(products.filter((product) => product._id !== id));
              Swal.fire("Deleted!", "Your product has been deleted.", "success");
            }
          })
          .catch((error) => console.error("Error deleting product:", error));
      }
    });
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              {currentProducts.map((product) => (
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
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
