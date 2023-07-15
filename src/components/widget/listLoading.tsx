import React from "react";

const ListLoading = () => (
  <div
    role="status"
    className="w-full  space-y-4  animate-pulse dark:divide-gray-700 dark:border-gray-700"
  >
    <div className="flex items-center justify-between">
      <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
    </div>
  </div>
);

export default ListLoading;
