import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalAmount } = useCart();
  const [studentName, setStudentName] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (studentName.trim() && cartItems.length > 0) {
      // Create order
      const order = {
        id: Date.now(),
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: totalAmount,
        status: 'pending' as const,
        orderDate: new Date().toLocaleString(),
        studentName: studentName.trim(),
      };

      // In a real app, this would be sent to the backend
      console.log('Order placed:', order);
      
      // Clear cart and show success
      clearCart();
      alert('Order placed successfully! You will be notified when it\'s ready.');
      setStudentName('');
      setShowCheckout(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some delicious items from our menu to get started</p>
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Browse Menu</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-orange-600 text-white p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Your Order</h1>
              <div className="text-right">
                <div className="text-sm opacity-90">Total Items</div>
                <div className="text-xl font-semibold">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</div>
              </div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="p-6">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                    <p className="text-orange-600 font-semibold">₹{item.price}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-gray-900">₹{item.price * item.quantity}</div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 mt-1 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total Amount:</span>
                <span className="text-orange-600">₹{totalAmount}</span>
              </div>
            </div>

            {/* Checkout Section */}
            <div className="mt-6 pt-6 border-t">
              {!showCheckout ? (
                <div className="flex space-x-4">
                  <Link
                    to="/menu"
                    className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-center font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Add More Items
                  </Link>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setShowCheckout(false)}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleCheckout}
                      disabled={!studentName.trim()}
                      className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;