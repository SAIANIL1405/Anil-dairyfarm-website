import React from 'react';
import { Milk, User, ShoppingCart, LogOut, ChevronLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            {location.pathname !== '/' && (
              <button
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-blue-600"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            <Link to="/" className="flex items-center space-x-2">
              <Milk className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Anil Dairy Farm</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/info" className="text-gray-600 hover:text-blue-600">Info</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">{user}</span>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ): (
                <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                  <User className="h-5 w-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};