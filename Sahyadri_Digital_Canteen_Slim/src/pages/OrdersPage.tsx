import React from 'react';
import { Clock, CheckCircle, Package, Truck } from 'lucide-react';

const OrdersPage: React.FC = () => {
  // Mock data - in real app, this would come from API
  const orders = [
    {
      id: 1,
      items: [
        { id: 1, name: 'Chicken Biryani', price: 120, quantity: 1 },
        { id: 2, name: 'Masala Chai', price: 10, quantity: 2 },
      ],
      total: 140,
      status: 'preparing' as const,
      orderDate: '2024-01-15 14:30:00',
      studentName: 'John Doe',
    },
    {
      id: 2,
      items: [
        { id: 3, name: 'Dosa', price: 30, quantity: 2 },
        { id: 4, name: 'Filter Coffee', price: 15, quantity: 1 },
      ],
      total: 75,
      status: 'ready' as const,
      orderDate: '2024-01-15 13:45:00',
      studentName: 'Jane Smith',
    },
    {
      id: 3,
      items: [
        { id: 5, name: 'Veg Thali', price: 80, quantity: 1 },
      ],
      total: 80,
      status: 'completed' as const,
      orderDate: '2024-01-15 12:30:00',
      studentName: 'Mike Johnson',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-yellow-500" size={20} />;
      case 'preparing':
        return <Package className="text-blue-500" size={20} />;
      case 'ready':
        return <Truck className="text-orange-500" size={20} />;
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />;
      default:
        return <Clock className="text-gray-500" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'preparing':
        return 'bg-blue-100 text-blue-800';
      case 'ready':
        return 'bg-orange-100 text-orange-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Orders</h1>
          <p className="text-gray-600">Track your current and past orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600">Your order history will appear here</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                      <p className="text-sm text-gray-600">{order.orderDate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                      {getStatusIcon(order.status)}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-3 mb-4">
                    {order.items.map(item => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <div>
                          <span className="font-medium text-gray-900">{item.name}</span>
                          <span className="text-gray-600 ml-2">x{item.quantity}</span>
                        </div>
                        <span className="font-medium text-gray-900">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Order Total */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                    <span className="text-lg font-bold text-orange-600">₹{order.total}</span>
                  </div>

                  {/* Order Status Details */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      {getStatusIcon(order.status)}
                      <span className="font-medium text-gray-900">
                        {order.status === 'pending' && 'Order Received'}
                        {order.status === 'preparing' && 'Being Prepared'}
                        {order.status === 'ready' && 'Ready for Pickup'}
                        {order.status === 'completed' && 'Order Completed'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {order.status === 'pending' && 'Your order has been received and will be prepared shortly.'}
                      {order.status === 'preparing' && 'Our chefs are preparing your delicious meal.'}
                      {order.status === 'ready' && 'Your order is ready! Please collect it from the canteen counter.'}
                      {order.status === 'completed' && 'Thank you for your order! We hope you enjoyed your meal.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;