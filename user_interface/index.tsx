// index.tsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ProductManagementUI from "./ProductManagementUI";
import SubscriptionManagementUI from "./SubscriptionManagementUI";
import OrderManagementUI from "./OrderManagementUI";
import { ShoppingBag, Package, Calendar } from "lucide-react";
import "./styles.css"; // This is for basic styling

const App = () => {
  const [activeTab, setActiveTab] = useState<string>("products");

  return (
    <div className="app-container">
      <header className="bg-purple-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <h1 className="text-xl font-bold">Sweet Seoul Korean Bakery</h1>
          <p className="text-sm opacity-80">Database Management System</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex overflow-x-auto">
          <button
            className={`px-6 py-4 font-medium flex items-center ${
              activeTab === "products"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("products")}
          >
            <ShoppingBag size={18} className="mr-2" />
            Products
          </button>
          <button
            className={`px-6 py-4 font-medium flex items-center ${
              activeTab === "subscriptions"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("subscriptions")}
          >
            <Package size={18} className="mr-2" />
            Subscriptions
          </button>
          <button
            className={`px-6 py-4 font-medium flex items-center ${
              activeTab === "orders"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            <Calendar size={18} className="mr-2" />
            Orders
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {activeTab === "products" && <ProductManagementUI />}
        {activeTab === "subscriptions" && <SubscriptionManagementUI />}
        {activeTab === "orders" && <OrderManagementUI />}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
