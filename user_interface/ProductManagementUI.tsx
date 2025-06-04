import React, { useState } from "react";
import { X, Search, Plus, Edit, Trash, Save, EyeOff } from "lucide-react";

const ProductManagementUI = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sample data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "BTS Purple Macarons",
      category: "Macarons",
      description: "Purple-colored macarons inspired by BTS signature color",
      base_price: 12.99,
      current_stock: 40,
      kpop_anime_tie_in: "BTS",
      limited_edition: true,
      seasonal: false,
      min_inventory_level: 30,
    },
    {
      id: 2,
      name: "Classic Hotteok",
      category: "Pancakes",
      description:
        "Traditional Korean sweet pancake filled with brown sugar, cinnamon, and nuts",
      base_price: 4.99,
      current_stock: 45,
      kpop_anime_tie_in: null,
      limited_edition: false,
      seasonal: false,
      min_inventory_level: 20,
    },
    {
      id: 3,
      name: "Strawberry Bingsu",
      category: "Ice Desserts",
      description:
        "Shaved ice dessert topped with fresh strawberries and condensed milk",
      base_price: 8.99,
      current_stock: 30,
      kpop_anime_tie_in: null,
      limited_edition: false,
      seasonal: true,
      min_inventory_level: 15,
    },
  ]);

  const handleAddProduct = (product) => {
    const newProduct = {
      id: products.length + 1,
      ...product,
    };
    setProducts([...products, newProduct]);
    setShowAddModal(false);
  };

  const handleEditProduct = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? product : p
    );
    setProducts(updatedProducts);
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Management
          </h1>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center"
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={18} className="mr-2" />
            Add New Product
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
            </div>
            <div>
              <select className="border rounded-lg px-4 py-2 w-full">
                <option value="">All Categories</option>
                <option value="Pancakes">Pancakes</option>
                <option value="Macarons">Macarons</option>
                <option value="Ice Desserts">Ice Desserts</option>
                <option value="Cakes">Cakes</option>
                <option value="Beverages">Beverages</option>
              </select>
            </div>
            <div>
              <select className="border rounded-lg px-4 py-2 w-full">
                <option value="">All Product Types</option>
                <option value="limited">Limited Edition</option>
                <option value="seasonal">Seasonal</option>
                <option value="kpop">K-pop/Anime</option>
                <option value="regular">Regular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">
                          {product.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="flex mt-1">
                          {product.limited_edition && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 mr-1">
                              Limited
                            </span>
                          )}
                          {product.seasonal && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mr-1">
                              Seasonal
                            </span>
                          )}
                          {product.kpop_anime_tie_in && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800 mr-1">
                              {product.kpop_anime_tie_in}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${product.base_price.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`${
                            product.current_stock > product.min_inventory_level
                              ? "bg-green-600"
                              : "bg-red-600"
                          } h-2.5 rounded-full`}
                          style={{
                            width: `${Math.min(
                              (product.current_stock / 100) * 100,
                              100
                            )}%`,
                          }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {product.current_stock}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.current_stock > product.min_inventory_level
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {product.current_stock > product.min_inventory_level
                        ? "In Stock"
                        : "Low Stock"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        onClick={() => openEditModal(product)}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => openDeleteModal(product)}
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <ProductModal
          title="Add New Product"
          onClose={() => setShowAddModal(false)}
          onSave={handleAddProduct}
          product={{
            name: "",
            category: "",
            description: "",
            base_price: 0,
            current_stock: 0,
            kpop_anime_tie_in: "",
            limited_edition: false,
            seasonal: false,
            min_inventory_level: 0,
          }}
        />
      )}

      {/* Edit Product Modal */}
      {showEditModal && selectedProduct && (
        <ProductModal
          title="Edit Product"
          onClose={() => setShowEditModal(false)}
          onSave={handleEditProduct}
          product={selectedProduct}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedProduct && (
        <DeleteConfirmationModal
          product={selectedProduct}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => handleDeleteProduct(selectedProduct.id)}
        />
      )}
    </div>
  );
};

// Product Modal Component (Add/Edit)
const ProductModal = ({ title, onClose, onSave, product }) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      base_price: parseFloat(formData.base_price),
      current_stock: parseInt(formData.current_stock),
      min_inventory_level: parseInt(formData.min_inventory_level),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              >
                <option value="">Select Category</option>
                <option value="Pancakes">Pancakes</option>
                <option value="Macarons">Macarons</option>
                <option value="Ice Desserts">Ice Desserts</option>
                <option value="Cakes">Cakes</option>
                <option value="Beverages">Beverages</option>
                <option value="Pastries">Pastries</option>
                <option value="Toast">Toast</option>
                <option value="Donuts">Donuts</option>
                <option value="Gift Boxes">Gift Boxes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Base Price ($)
              </label>
              <input
                type="number"
                name="base_price"
                value={formData.base_price}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-lg px-3 py-2"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Stock
              </label>
              <input
                type="number"
                name="current_stock"
                value={formData.current_stock}
                onChange={handleChange}
                min="0"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Inventory Level
              </label>
              <input
                type="number"
                name="min_inventory_level"
                value={formData.min_inventory_level}
                onChange={handleChange}
                min="0"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                K-pop/Anime Tie-in
              </label>
              <input
                type="text"
                name="kpop_anime_tie_in"
                value={formData.kpop_anime_tie_in || ""}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="limited_edition"
                  name="limited_edition"
                  checked={formData.limited_edition}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <label
                  htmlFor="limited_edition"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Limited Edition
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="seasonal"
                  name="seasonal"
                  checked={formData.seasonal}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <label
                  htmlFor="seasonal"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Seasonal Item
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              <Save size={18} className="mr-2" />
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Delete Confirmation Modal
const DeleteConfirmationModal = ({ product, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
            <Trash size={24} className="text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-center mb-2">
            Delete Product
          </h3>
          <p className="text-sm text-gray-500 text-center mb-6">
            Are you sure you want to delete{" "}
            <span className="font-semibold">{product.name}</span>? This action
            cannot be undone.
          </p>

          <div className="flex justify-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementUI;
