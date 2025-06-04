// OrderManagementUI.tsx
import React, { useState } from "react";
import {
  X,
  Search,
  Filter,
  TrendingUp,
  Package,
  Truck,
  Check,
  Clock,
  Calendar,
  DollarSign,
  ShoppingBag,
  Edit,
  Eye,
  Trash,
  ChevronDown,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

// TypeScript interfaces
interface OrderItem {
  id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  unit_price: number;
  discount: number;
}

interface Order {
  id: number;
  order_id: string;
  customer_name: string;
  customer_id: number;
  order_date: string;
  total_amount: number;
  order_status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Canceled";
  payment_method: string;
  marketing_channel?: string;
  platform: "online" | "in-store";
  is_gift: boolean;
  gift_card_id?: number;
  items: OrderItem[];
  tracking_number?: string;
}

interface StatusUpdate {
  order_id: number;
  previous_status: string;
  new_status: string;
  updated_by: string;
  status_change_date: string;
}

const OrderManagementUI: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPlatform, setFilterPlatform] = useState<string>("all");
  const [filterDateRange, setFilterDateRange] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderDetailsModal, setShowOrderDetailsModal] =
    useState<boolean>(false);
  const [showStatusUpdateModal, setShowStatusUpdateModal] =
    useState<boolean>(false);

  // Sample data for the Orders table
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      order_id: "ORD-5291",
      customer_name: "Sophia Kim",
      customer_id: 4,
      order_date: "2024-05-19",
      total_amount: 47.98,
      order_status: "Pending",
      payment_method: "Credit Card",
      marketing_channel: "Instagram Ads",
      platform: "online",
      is_gift: false,
      items: [
        {
          id: 1,
          product_id: 4,
          product_name: "BTS Purple Macarons",
          quantity: 2,
          unit_price: 12.99,
          discount: 0,
        },
        {
          id: 2,
          product_id: 10,
          product_name: "Twice Rainbow Cake",
          quantity: 1,
          unit_price: 28.99,
          discount: 6.99,
        },
      ],
    },
    {
      id: 2,
      order_id: "ORD-5290",
      customer_name: "William Nguyen",
      customer_id: 7,
      order_date: "2024-05-18",
      total_amount: 32.98,
      order_status: "Processing",
      payment_method: "Credit Card",
      marketing_channel: "TikTok Influencers",
      platform: "online",
      is_gift: true,
      items: [
        {
          id: 3,
          product_id: 10,
          product_name: "Twice Rainbow Cake",
          quantity: 1,
          unit_price: 28.99,
          discount: 0,
        },
        {
          id: 4,
          product_id: 3,
          product_name: "Matcha Bungeoppang",
          quantity: 1,
          unit_price: 3.99,
          discount: 0,
        },
      ],
    },
    {
      id: 3,
      order_id: "ORD-5289",
      customer_name: "David Chen",
      customer_id: 5,
      order_date: "2024-05-17",
      total_amount: 25.99,
      order_status: "Processing",
      payment_method: "Gift Card",
      gift_card_id: 1,
      platform: "online",
      is_gift: false,
      items: [
        {
          id: 5,
          product_id: 9,
          product_name: "Sweet Seoul Sample Box",
          quantity: 1,
          unit_price: 25.99,
          discount: 0,
        },
      ],
    },
    {
      id: 4,
      order_id: "ORD-5288",
      customer_name: "John Smith",
      customer_id: 1,
      order_date: "2024-05-16",
      total_amount: 41.98,
      order_status: "Shipped",
      payment_method: "Credit Card",
      marketing_channel: "Facebook Community",
      platform: "online",
      is_gift: false,
      tracking_number: "TRK123456789",
      items: [
        {
          id: 6,
          product_id: 4,
          product_name: "BTS Purple Macarons",
          quantity: 2,
          unit_price: 12.99,
          discount: 0,
        },
        {
          id: 7,
          product_id: 5,
          product_name: "Dalgona Coffee Kit",
          quantity: 1,
          unit_price: 15.99,
          discount: 0,
        },
      ],
    },
    {
      id: 5,
      order_id: "ORD-5287",
      customer_name: "Emma Johnson",
      customer_id: 2,
      order_date: "2024-05-15",
      total_amount: 22.97,
      order_status: "Delivered",
      payment_method: "Cash",
      platform: "in-store",
      is_gift: false,
      items: [
        {
          id: 8,
          product_id: 6,
          product_name: "Injeolmi Boba Toast",
          quantity: 2,
          unit_price: 7.99,
          discount: 0,
        },
        {
          id: 9,
          product_id: 1,
          product_name: "Classic Hotteok",
          quantity: 1,
          unit_price: 4.99,
          discount: 0,
        },
        {
          id: 10,
          product_id: 3,
          product_name: "Matcha Bungeoppang",
          quantity: 1,
          unit_price: 3.99,
          discount: 1.0,
        },
      ],
    },
    {
      id: 6,
      order_id: "ORD-5286",
      customer_name: "Michael Lee",
      customer_id: 3,
      order_date: "2024-05-14",
      total_amount: 15.98,
      order_status: "Canceled",
      payment_method: "Credit Card",
      platform: "in-store",
      is_gift: false,
      items: [
        {
          id: 11,
          product_id: 3,
          product_name: "Matcha Bungeoppang",
          quantity: 4,
          unit_price: 3.99,
          discount: 0,
        },
      ],
    },
  ]);

  // Sample data for status history
  const [statusHistory, setStatusHistory] = useState<StatusUpdate[]>([
    {
      order_id: 1,
      previous_status: "Created",
      new_status: "Pending",
      updated_by: "System",
      status_change_date: "2024-05-19 10:23:15",
    },
    {
      order_id: 2,
      previous_status: "Created",
      new_status: "Pending",
      updated_by: "System",
      status_change_date: "2024-05-18 14:05:30",
    },
    {
      order_id: 2,
      previous_status: "Pending",
      new_status: "Processing",
      updated_by: "JenniferK",
      status_change_date: "2024-05-18 15:30:45",
    },
    {
      order_id: 3,
      previous_status: "Created",
      new_status: "Pending",
      updated_by: "System",
      status_change_date: "2024-05-17 09:45:20",
    },
    {
      order_id: 3,
      previous_status: "Pending",
      new_status: "Processing",
      updated_by: "MichaelT",
      status_change_date: "2024-05-17 11:10:35",
    },
    {
      order_id: 4,
      previous_status: "Created",
      new_status: "Pending",
      updated_by: "System",
      status_change_date: "2024-05-16 13:22:40",
    },
    {
      order_id: 4,
      previous_status: "Pending",
      new_status: "Processing",
      updated_by: "JenniferK",
      status_change_date: "2024-05-16 14:15:25",
    },
    {
      order_id: 4,
      previous_status: "Processing",
      new_status: "Shipped",
      updated_by: "MichaelT",
      status_change_date: "2024-05-17 10:05:10",
    },
    {
      order_id: 5,
      previous_status: "Created",
      new_status: "Pending",
      updated_by: "System",
      status_change_date: "2024-05-15 16:30:55",
    },
    {
      order_id: 5,
      previous_status: "Pending",
      new_status: "Processing",
      updated_by: "SarahL",
      status_change_date: "2024-05-15 16:32:15",
    },
    {
      order_id: 5,
      previous_status: "Processing",
      new_status: "Delivered",
      updated_by: "SarahL",
      status_change_date: "2024-05-15 16:45:30",
    },
    {
      order_id: 6,
      previous_status: "Created",
      new_status: "Pending",
      updated_by: "System",
      status_change_date: "2024-05-14 11:20:40",
    },
    {
      order_id: 6,
      previous_status: "Pending",
      new_status: "Canceled",
      updated_by: "MichaelT",
      status_change_date: "2024-05-14 12:35:15",
    },
  ]);

  // Apply filters to orders
  const filteredOrders = orders.filter((order) => {
    // Filter by order status
    if (
      filterStatus !== "all" &&
      order.order_status.toLowerCase() !== filterStatus
    ) {
      return false;
    }

    // Filter by platform
    if (filterPlatform !== "all" && order.platform !== filterPlatform) {
      return false;
    }

    // Filter by date range (simplified for demo)
    if (filterDateRange === "today") {
      return order.order_date === new Date().toISOString().split("T")[0];
    } else if (filterDateRange === "yesterday") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return order.order_date === yesterday.toISOString().split("T")[0];
    }

    return true;
  });

  // Update order status
  const updateOrderStatus = (orderId: number, newStatus: string) => {
    // Update order status
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        const previousStatus = order.order_status;
        return {
          ...order,
          order_status: newStatus as Order["order_status"],
        };
      }
      return order;
    });

    // Add new status history entry
    const orderToUpdate = orders.find((order) => order.id === orderId);
    if (orderToUpdate) {
      const newStatusEntry: StatusUpdate = {
        order_id: orderId,
        previous_status: orderToUpdate.order_status,
        new_status: newStatus,
        updated_by: "CurrentUser", // In a real app, this would be the logged-in user
        status_change_date: new Date()
          .toISOString()
          .replace("T", " ")
          .substring(0, 19),
      };

      setStatusHistory([...statusHistory, newStatusEntry]);
    }

    setOrders(updatedOrders);
    setShowStatusUpdateModal(false);
    setSelectedOrder(null);
  };

  // Get status color class
  const getStatusColorClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-indigo-100 text-indigo-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "canceled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
          <div className="flex space-x-2">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center"
              onClick={() => {
                /* Refresh orders logic */
              }}
            >
              <RefreshCw size={18} className="mr-2" />
              Refresh
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
              onClick={() => {
                /* New order creation logic */
              }}
            >
              <ShoppingBag size={18} className="mr-2" />
              New Order
            </button>
          </div>
        </div>

        {/* Order Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Today's Orders
              </h3>
              <Calendar className="text-purple-600" size={18} />
            </div>
            <p className="text-2xl font-semibold mt-2">2</p>
            <div className="flex items-center mt-1 text-sm text-green-600">
              <TrendingUp size={14} className="mr-1" />
              <span>+50% vs. yesterday</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Processing</h3>
              <Package className="text-blue-600" size={18} />
            </div>
            <p className="text-2xl font-semibold mt-2">2</p>
            <p className="text-sm text-gray-500 mt-1">33% of active orders</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Shipped</h3>
              <Truck className="text-indigo-600" size={18} />
            </div>
            <p className="text-2xl font-semibold mt-2">1</p>
            <p className="text-sm text-gray-500 mt-1">17% of active orders</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
              <DollarSign className="text-green-600" size={18} />
            </div>
            <p className="text-2xl font-semibold mt-2">$186.90</p>
            <div className="flex items-center mt-1 text-sm text-green-600">
              <TrendingUp size={14} className="mr-1" />
              <span>+12% vs. last week</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search orders by ID, customer..."
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
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
            <div>
              <select
                className="border rounded-lg px-4 py-2 w-full"
                value={filterPlatform}
                onChange={(e) => setFilterPlatform(e.target.value)}
              >
                <option value="all">All Platforms</option>
                <option value="online">Online</option>
                <option value="in-store">In-Store</option>
              </select>
            </div>
            <div>
              <select
                className="border rounded-lg px-4 py-2 w-full"
                value={filterDateRange}
                onChange={(e) => setFilterDateRange(e.target.value)}
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform
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
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {order.order_id}
                    </span>
                    {order.is_gift && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                        Gift
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xs">
                          {order.customer_name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {order.customer_name}
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: {order.customer_id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(order.order_date)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatTime(order.order_date)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${order.total_amount.toFixed(2)}
                    <div className="text-xs text-gray-500">
                      {order.payment_method}
                      {order.gift_card_id && <span> (GC)</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.platform === "online"
                          ? "bg-indigo-100 text-indigo-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {order.platform === "online" ? "Online" : "In-Store"}
                    </span>
                    {order.marketing_channel && (
                      <div className="text-xs text-gray-500 mt-1">
                        via {order.marketing_channel}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(
                        order.order_status
                      )}`}
                    >
                      {order.order_status}
                    </span>
                    {order.tracking_number && (
                      <div className="text-xs text-gray-500 mt-1">
                        TRK: {order.tracking_number}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowOrderDetailsModal(true);
                        }}
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        onClick={() => {
                          /* Edit order logic */
                        }}
                        title="Edit Order"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900"
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowStatusUpdateModal(true);
                        }}
                        title="Update Status"
                      >
                        <Clock size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              No orders found matching your filters.
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {showOrderDetailsModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-4/5 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">
                Order Details - {selectedOrder.order_id}
              </h2>
              <button
                onClick={() => {
                  setShowOrderDetailsModal(false);
                  setSelectedOrder(null);
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto h-full pb-20">
              {/* Order Summary */}
              <div className="flex flex-col md:flex-row md:justify-between mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Order Information
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Date:</span>{" "}
                    {formatDate(selectedOrder.order_date)} at{" "}
                    {formatTime(selectedOrder.order_date)}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Status:</span>
                    <span
                      className={`ml-2 px-2 py-0.5 rounded text-xs font-medium ${getStatusColorClass(
                        selectedOrder.order_status
                      )}`}
                    >
                      {selectedOrder.order_status}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Platform:</span>{" "}
                    {selectedOrder.platform === "online"
                      ? "Online"
                      : "In-Store"}
                  </p>
                  {selectedOrder.marketing_channel && (
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium text-gray-700">
                        Marketing Channel:
                      </span>{" "}
                      {selectedOrder.marketing_channel}
                    </p>
                  )}
                  {selectedOrder.tracking_number && (
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium text-gray-700">
                        Tracking Number:
                      </span>{" "}
                      {selectedOrder.tracking_number}
                    </p>
                  )}
                </div>

                <div className="mt-4 md:mt-0">
                  <h3 className="text-lg font-medium mb-2">
                    Customer Information
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Name:</span>{" "}
                    {selectedOrder.customer_name}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">
                      Customer ID:
                    </span>{" "}
                    {selectedOrder.customer_id}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">
                      Payment Method:
                    </span>{" "}
                    {selectedOrder.payment_method}
                    {selectedOrder.gift_card_id && (
                      <span className="ml-1">
                        (Gift Card #{selectedOrder.gift_card_id})
                      </span>
                    )}
                  </p>
                  {selectedOrder.is_gift && (
                    <p className="text-sm text-gray-600 mb-1 flex items-center">
                      <span className="font-medium text-gray-700">
                        Gift Order:
                      </span>
                      <span className="ml-2 text-purple-600">Yes</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Order Items</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Product
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Quantity
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Unit Price
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Discount
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedOrder.items.map((item) => (
                        <tr key={item.id}>
                          <td className="px-4 py-3">
                            <div className="text-sm font-medium text-gray-900">
                              {item.product_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              ID: {item.product_id}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            {item.quantity}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            ${item.unit_price.toFixed(2)}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            {item.discount > 0
                              ? `$${item.discount.toFixed(2)}`
                              : "-"}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            $
                            {(
                              item.quantity * item.unit_price -
                              item.discount
                            ).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                      <tr>
                        <td
                          colSpan={4}
                          className="px-4 py-3 text-sm font-medium text-gray-900 text-right"
                        >
                          Total:
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-gray-900">
                          ${selectedOrder.total_amount.toFixed(2)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Order Status History */}
              <div>
                <h3 className="text-lg font-medium mb-4">Status History</h3>
                <div className="space-y-4">
                  {statusHistory
                    .filter((update) => update.order_id === selectedOrder.id)
                    .sort(
                      (a, b) =>
                        new Date(b.status_change_date).getTime() -
                        new Date(a.status_change_date).getTime()
                    )
                    .map((update, index) => (
                      <div
                        key={index}
                        className="flex items-start p-3 border border-gray-200 rounded-lg"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColorClass(
                            update.new_status
                          )} mr-3 flex-shrink-0`}
                        >
                          {update.new_status === "Pending" && (
                            <Clock size={16} className="text-yellow-800" />
                          )}
                          {update.new_status === "Processing" && (
                            <Package size={16} className="text-blue-800" />
                          )}
                          {update.new_status === "Shipped" && (
                            <Truck size={16} className="text-indigo-800" />
                          )}
                          {update.new_status === "Delivered" && (
                            <Check size={16} className="text-green-800" />
                          )}
                          {update.new_status === "Canceled" && (
                            <X size={16} className="text-red-800" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-900">
                              {update.previous_status} → {update.new_status}
                            </span>
                            <span className="text-xs text-gray-500">
                              {formatDate(
                                update.status_change_date.split(" ")[0]
                              )}{" "}
                              {update.status_change_date.split(" ")[1]}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Updated by: {update.updated_by}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {showStatusUpdateModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-medium text-center mb-4">
                Update Order Status
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4">
                Current status:
                <span
                  className={`ml-2 px-2 py-0.5 rounded text-xs font-medium ${getStatusColorClass(
                    selectedOrder.order_status
                  )}`}
                >
                  {selectedOrder.order_status}
                </span>
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Pending",
                  "Processing",
                  "Shipped",
                  "Delivered",
                  "Canceled",
                ].map((status) => (
                  <button
                    key={status}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border ${
                      selectedOrder.order_status === status
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                    }`}
                    onClick={() => updateOrderStatus(selectedOrder.id, status)}
                    disabled={selectedOrder.order_status === status}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColorClass(
                          status
                        )} mr-3`}
                      >
                        {status === "Pending" && <Clock size={16} />}
                        {status === "Processing" && <Package size={16} />}
                        {status === "Shipped" && <Truck size={16} />}
                        {status === "Delivered" && <Check size={16} />}
                        {status === "Canceled" && <X size={16} />}
                      </div>
                      <span className="font-medium">{status}</span>
                    </div>

                    {selectedOrder.order_status === status && (
                      <span className="text-purple-600">
                        <Check size={18} />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowStatusUpdateModal(false);
                    setSelectedOrder(null);
                  }}
                  className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper functions
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
};

export default OrderManagementUI;
