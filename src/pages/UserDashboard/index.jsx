import React from "react";

function UserDashboard() {
  return (
    <div className="flex-grow p-4 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome to Your Dashboard</h1>
        <p className="text-gray-600">
          Manage your account, view analytics, and stay up-to-date with your
          progress.
        </p>
      </div>

      {/* Updates Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">Update</h2>
            <p className="text-gray-600 mb-1">Date: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-800">
              Sales Revenue Increased <span className="font-bold text-green-500">40%</span> in one week.
            </p>
            <button className="mt-2 text-blue-500 hover:text-blue-700">See Statistics</button>
          </div>
        ))}
      </div>

      {/* Transactions and Revenue Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Transactions */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500 h-8 w-8 flex items-center justify-center rounded-full text-white">
                    <span>Icon</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Product Name {index + 1}</h3>
                    <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-500 font-semibold">Completed</p>
                  <p className="text-sm text-gray-500">Product ID: 1234{index}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Revenue</h2>
          <div className="mb-4">
            <p className="text-gray-600 mb-1">Income: <span className="text-green-500">$10,000</span></p>
            <p className="text-gray-600">Expenses: <span className="text-red-500">$4,000</span></p>
          </div>
          <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
            <p className="text-gray-600">Bar Graph of Revenue</p>
          </div>
          <p className="text-green-500 mt-2">+35% from last month</p>
        </div>
      </div>

      {/* Sales Report */}
      <div className="bg-white p-4 mt-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sales Report</h2>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1 bg-blue-100 h-6 rounded"></div>
          <div className="flex-1 bg-yellow-100 h-6 rounded"></div>
          <div className="flex-1 bg-green-100 h-6 rounded"></div>
        </div>
        <div className="flex justify-between">
          <p>Product Launched</p>
          <p>Ongoing Product</p>
          <p>Product Sold</p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
