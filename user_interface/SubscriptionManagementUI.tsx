// SubscriptionManagementUI.tsx
import React, { useState } from "react";
import {
  X,
  Search,
  Plus,
  Edit,
  Trash,
  Box,
  Calendar,
  Star,
  Gift,
} from "lucide-react";

// Define TypeScript interfaces for our data structures
interface SubscriptionItem {
  id: number;
  product_name: string;
  quantity: number;
  month: string;
  year: number;
}

interface Subscription {
  id: number;
  customer_name: string;
  customer_id: number;
  subscription_type: string;
  start_date: string;
  next_delivery_date: string;
  status: string;
  monthly_price: number;
  billing_cycle: number;
  is_gift: boolean;
  recipient_name?: string;
  items: SubscriptionItem[];
}

interface NewSubscriptionItem {
  product_name: string;
  quantity: number;
  month: string;
  year: number;
}

// Component props interfaces
interface SubscriptionItemsModalProps {
  subscription: Subscription;
  onClose: () => void;
  onAddItem: (item: NewSubscriptionItem) => void;
  onRemoveItem: (itemId: number) => void;
}

interface DeleteConfirmationModalProps {
  subscription: Subscription;
  onClose: () => void;
  onConfirm: () => void;
}

const SubscriptionManagementUI: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showItemsModal, setShowItemsModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedSubscription, setSelectedSubscription] =
    useState<Subscription | null>(null);
  const [filter, setFilter] = useState<string>("active");

  // Sample data representing records from the SUBSCRIPTIONS table
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: 1,
      customer_name: "Sophia Kim",
      customer_id: 4,
      subscription_type: "Premium",
      start_date: "2024-03-15",
      next_delivery_date: "2024-06-15",
      status: "Active",
      monthly_price: 29.99,
      billing_cycle: 1,
      is_gift: false,
      items: [
        {
          id: 1,
          product_name: "BTS Purple Macarons",
          quantity: 1,
          month: "May",
          year: 2024,
        },
        {
          id: 2,
          product_name: "Classic Hotteok",
          quantity: 2,
          month: "May",
          year: 2024,
        },
        {
          id: 3,
          product_name: "Twice Rainbow Cake",
          quantity: 1,
          month: "May",
          year: 2024,
        },
      ],
    },
    {
      id: 2,
      customer_name: "Isabella Choi",
      customer_id: 10,
      subscription_type: "Premium",
      start_date: "2024-04-10",
      next_delivery_date: "2024-06-10",
      status: "Active",
      monthly_price: 29.99,
      billing_cycle: 2,
      is_gift: false,
      items: [
        {
          id: 4,
          product_name: "Sweet Seoul Sample Box",
          quantity: 1,
          month: "May",
          year: 2024,
        },
        {
          id: 5,
          product_name: "BTS Purple Macarons",
          quantity: 1,
          month: "May",
          year: 2024,
        },
      ],
    },
    {
      id: 3,
      customer_name: "John Smith",
      customer_id: 1,
      subscription_type: "Standard",
      start_date: "2024-02-20",
      next_delivery_date: "2024-06-20",
      status: "Active",
      monthly_price: 19.99,
      billing_cycle: 1,
      is_gift: false,
      items: [
        {
          id: 6,
          product_name: "Classic Hotteok",
          quantity: 1,
          month: "May",
          year: 2024,
        },
        {
          id: 7,
          product_name: "Matcha Bungeoppang",
          quantity: 2,
          month: "May",
          year: 2024,
        },
      ],
    },
    {
      id: 4,
      customer_name: "William Nguyen",
      customer_id: 7,
      subscription_type: "Standard",
      start_date: "2024-01-05",
      next_delivery_date: "2024-07-05",
      status: "Active",
      monthly_price: 19.99,
      billing_cycle: 3,
      is_gift: false,
      items: [
        {
          id: 8,
          product_name: "Strawberry Bingsu",
          quantity: 1,
          month: "May",
          year: 2024,
        },
        {
          id: 9,
          product_name: "Classic Hotteok",
          quantity: 1,
          month: "May",
          year: 2024,
        },
      ],
    },
    {
      id: 5,
      customer_name: "Emma Johnson",
      customer_id: 2,
      subscription_type: "Standard",
      start_date: "2024-05-01",
      next_delivery_date: "2024-06-01",
      status: "Active",
      monthly_price: 19.99,
      billing_cycle: 1,
      is_gift: true,
      recipient_name: "David Chen",
      items: [
        {
          id: 10,
          product_name: "Classic Hotteok",
          quantity: 1,
          month: "May",
          year: 2024,
        },
        {
          id: 11,
          product_name: "Sweet Seoul Sample Box",
          quantity: 1,
          month: "May",
          year: 2024,
        },
      ],
    },
    {
      id: 6,
      customer_name: "Jenna James",
      customer_id: 20,
      subscription_type: "Standard",
      start_date: "2024-05-22",
      next_delivery_date: "2024-06-02",
      status: "Active",
      monthly_price: 19.99,
      billing_cycle: 1,
      is_gift: true,
      recipient_name: "Andrew Flood",
      items: [
        {
          id: 10,
          product_name: "Classic Hotteok",
          quantity: 1,
          month: "May",
          year: 2024,
        },
        {
          id: 11,
          product_name: "Sweet Seoul Sample Box",
          quantity: 1,
          month: "May",
          year: 2024,
        },
      ],
    },
  ]);

  // Add Subscription
  const handleAddSubscription = (
    newSubscription: Omit<Subscription, "id" | "items">
  ) => {
    // In a real app, this would make an API call to insert into the SUBSCRIPTIONS table
    const subscriptionWithId = {
      id: subscriptions.length + 1,
      ...newSubscription,
      items: [],
    };
    setSubscriptions([...subscriptions, subscriptionWithId]);
    setShowAddModal(false);
  };

  // Edit Subscription
  const handleEditSubscription = (updatedSubscription: Subscription) => {
    // In a real app, this would make an API call to update the SUBSCRIPTIONS table
    const updatedSubscriptions = subscriptions.map((s) =>
      s.id === updatedSubscription.id ? updatedSubscription : s
    );
    setSubscriptions(updatedSubscriptions);
    setShowEditModal(false);
    setSelectedSubscription(null);
  };

  // Delete Subscription
  const handleDeleteSubscription = (id: number) => {
    // In a real app, this would make an API call to delete from SUBSCRIPTIONS
    // and related records from SUBSCRIPTION_ITEMS
    const updatedSubscriptions = subscriptions.filter((s) => s.id !== id);
    setSubscriptions(updatedSubscriptions);
    setShowDeleteModal(false);
    setSelectedSubscription(null);
  };

  // Add Subscription Item
  const handleAddSubscriptionItem = (
    subscriptionId: number,
    item: NewSubscriptionItem
  ) => {
    // In a real app, this would make an API call to insert into SUBSCRIPTION_ITEMS
    const updatedSubscriptions = subscriptions.map((s) => {
      if (s.id === subscriptionId) {
        return {
          ...s,
          items: [...s.items, { id: Date.now(), ...item }],
        };
      }
      return s;
    });
    setSubscriptions(updatedSubscriptions);
  };

  // Remove Subscription Item
  const handleRemoveSubscriptionItem = (
    subscriptionId: number,
    itemId: number
  ) => {
    // In a real app, this would make an API call to delete from SUBSCRIPTION_ITEMS
    const updatedSubscriptions = subscriptions.map((s) => {
      if (s.id === subscriptionId) {
        return {
          ...s,
          items: s.items.filter((item) => item.id !== itemId),
        };
      }
      return s;
    });
    setSubscriptions(updatedSubscriptions);
  };

  const filteredSubscriptions = subscriptions.filter((s) => {
    if (filter === "all") return true;
    if (filter === "active") return s.status === "Active";
    if (filter === "paused") return s.status === "Paused";
    if (filter === "gift") return s.is_gift;
    return true;
  });

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Subscription Management
          </h1>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center"
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={18} className="mr-2" />
            Add New Subscription
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search subscriptions..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
            </div>
            <div>
              <select
                className="border rounded-lg px-4 py-2 w-full"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Subscriptions</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="gift">Gift Subscriptions</option>
              </select>
            </div>
            <div>
              <select className="border rounded-lg px-4 py-2 w-full">
                <option value="all">All Tiers</option>
                <option value="premium">Premium</option>
                <option value="standard">Standard</option>
              </select>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Total Subscribers
              </h3>
              <Box className="text-purple-600" size={18} />
            </div>
            <p className="text-2xl font-semibold mt-2">5</p>
            <p className="text-sm text-green-600 mt-1">+2 this month</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Monthly Revenue
              </h3>
              <Star className="text-purple-600" size={18} />
            </div>
            <p className="text-2xl font-semibold mt-2">$119.95</p>
            <p className="text-sm text-green-600 mt-1">+15% vs. last month</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Upcoming Deliveries
              </h3>
              <Calendar className="text-purple-600" size={18} />
            </div>
            <p className="text-2xl font-semibold mt-2">3</p>
            <p className="text-sm text-gray-500 mt-1">Next 7 days</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Gift Subscriptions
              </h3>
              <Gift className="text-purple-600" size={18} />
            </div>
            <p className="text-2xl font-semibold mt-2">2</p>
            <p className="text-sm text-gray-500 mt-1">33% of total</p>
          </div>
        </div>

        {/* Subscriptions Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Delivery
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
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
              {filteredSubscriptions.map((subscription) => (
                <tr key={subscription.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">
                          {subscription.customer_name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {subscription.customer_name}
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: {subscription.customer_id}
                        </div>
                        {subscription.is_gift &&
                          subscription.recipient_name && (
                            <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                              Gift for {subscription.recipient_name}
                            </span>
                          )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {subscription.subscription_type}
                    </div>
                    <div className="text-xs text-gray-500">
                      Billing: {subscription.billing_cycle} month
                      {subscription.billing_cycle > 1 ? "s" : ""}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(subscription.next_delivery_date)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {getDaysUntil(subscription.next_delivery_date)} days
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${subscription.monthly_price.toFixed(2)}/mo
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        subscription.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : subscription.status === "Paused"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {subscription.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => {
                          setSelectedSubscription(subscription);
                          setShowItemsModal(true);
                        }}
                        title="View Items"
                      >
                        <Box size={18} />
                      </button>
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        onClick={() => {
                          setSelectedSubscription(subscription);
                          setShowEditModal(true);
                        }}
                        title="Edit Subscription"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => {
                          setSelectedSubscription(subscription);
                          setShowDeleteModal(true);
                        }}
                        title="Delete Subscription"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredSubscriptions.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              No subscriptions found matching your filter.
            </div>
          )}
        </div>
      </div>

      {/* Subscription Items Modal */}
      {showItemsModal && selectedSubscription && (
        <SubscriptionItemsModal
          subscription={selectedSubscription}
          onClose={() => {
            setShowItemsModal(false);
            setSelectedSubscription(null);
          }}
          onAddItem={(item) =>
            handleAddSubscriptionItem(selectedSubscription.id, item)
          }
          onRemoveItem={(itemId) =>
            handleRemoveSubscriptionItem(selectedSubscription.id, itemId)
          }
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedSubscription && (
        <DeleteConfirmationModal
          subscription={selectedSubscription}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedSubscription(null);
          }}
          onConfirm={() => handleDeleteSubscription(selectedSubscription.id)}
        />
      )}
    </div>
  );
};

// Helper functions
const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const getDaysUntil = (dateString: string): number => {
  if (!dateString) return 0;
  const today = new Date();
  const targetDate = new Date(dateString);
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// Subscription Items Modal Component
const SubscriptionItemsModal: React.FC<SubscriptionItemsModalProps> = ({
  subscription,
  onClose,
  onAddItem,
  onRemoveItem,
}) => {
  const [newItem, setNewItem] = useState<NewSubscriptionItem>({
    product_name: "",
    quantity: 1,
    month: "June",
    year: 2024,
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">
            Subscription Items - {subscription.customer_name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Current Box Items (May 2024)</h3>
              <span className="text-sm text-gray-500">
                {subscription.items.length} items
              </span>
            </div>

            {subscription.items.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                No items in this subscription box.
              </div>
            ) : (
              <div className="space-y-3">
                {subscription.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <span className="font-medium">{item.product_name}</span>
                      <div className="text-sm text-gray-500">
                        Quantity: {item.quantity} • {item.month} {item.year}
                      </div>
                    </div>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-4">Add Item to Next Box</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={newItem.product_name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, product_name: e.target.value })
                  }
                >
                  <option value="">Select Product</option>
                  <option value="BTS Purple Macarons">
                    BTS Purple Macarons
                  </option>
                  <option value="Classic Hotteok">Classic Hotteok</option>
                  <option value="Strawberry Bingsu">Strawberry Bingsu</option>
                  <option value="Matcha Bungeoppang">Matcha Bungeoppang</option>
                  <option value="Sweet Seoul Sample Box">
                    Sweet Seoul Sample Box
                  </option>
                  <option value="Twice Rainbow Cake">Twice Rainbow Cake</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-3 py-2"
                  min="1"
                  value={newItem.quantity}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      quantity: parseInt(e.target.value),
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Month
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={newItem.month}
                  onChange={(e) =>
                    setNewItem({ ...newItem, month: e.target.value })
                  }
                >
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={newItem.year}
                  onChange={(e) =>
                    setNewItem({ ...newItem, year: parseInt(e.target.value) })
                  }
                >
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
                onClick={() => {
                  if (newItem.product_name) {
                    onAddItem(newItem);
                    setNewItem({
                      product_name: "",
                      quantity: 1,
                      month: "June",
                      year: 2024,
                    });
                  }
                }}
                disabled={!newItem.product_name}
              >
                <Plus size={18} className="mr-2" />
                Add to Box
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Delete Confirmation Modal
const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  subscription,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
            <Trash size={24} className="text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-center mb-2">
            Cancel Subscription
          </h3>
          <p className="text-sm text-gray-500 text-center mb-6">
            Are you sure you want to cancel{" "}
            <span className="font-semibold">
              {subscription.customer_name}'s
            </span>{" "}
            subscription? This action cannot be undone.
          </p>

          <div className="flex justify-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Keep Subscription
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManagementUI;
