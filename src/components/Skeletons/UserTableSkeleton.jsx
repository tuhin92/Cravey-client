import React from 'react';

const UserTableSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="h-8 bg-gray-200 rounded w-48"></div>
        <div className="h-10 bg-gray-200 rounded w-full sm:w-64"></div>
      </div>

      {/* Table Skeleton */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="bg-gray-50">
              <div className="grid grid-cols-4 md:grid-cols-5 gap-4 py-3 px-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-20"></div>
                ))}
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="grid grid-cols-4 md:grid-cols-5 gap-4 py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-3 bg-gray-200 rounded w-32 sm:hidden"></div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                  <div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="hidden md:block">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTableSkeleton;