import React from 'react';

const ProductTableSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Search and Add Button Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="w-full sm:w-64 h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-36 h-10 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Table Skeleton */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              {['Image', 'Product Name', 'Category', 'Price', 'Availability', 'Actions'].map((header) => (
                <th key={header} className="py-3 px-6">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index} className="border-t">
                <td className="py-4 px-6">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex justify-center gap-2">
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-10 h-10 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTableSkeleton;