import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Home, UtensilsCrossed, Clock, MessageSquare, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  const { isAdmin, logout } = useAuth();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/menu', icon: UtensilsCrossed, label: 'Menu' },
    { path: '/orders', icon: Clock, label: 'Orders' },
    { path: '/feedback', icon: MessageSquare, label: 'Feedback' },
  ];

  const adminItems = [
    { path: '/admin/dashboard', icon: Shield, label: 'Dashboard' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="data:image/jpeg;base64,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"
              alt="Sahyadri College Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-orange-600">Sahyadri Digital Canteen</span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
            
            {isAdmin && adminItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Cart and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAdmin ? (
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                <User size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/admin/login"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Shield size={18} />
                <span>Admin</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {isAdmin && adminItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-4">
                <Link
                  to="/cart"
                  className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <ShoppingCart size={20} />
                    <span>Cart</span>
                  </div>
                  {totalItems > 0 && (
                    <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {totalItems}
                    </span>
                  )}
                </Link>
                
                {isAdmin ? (
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <User size={20} />
                    <span>Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/admin/login"
                    className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Shield size={20} />
                    <span>Admin Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;