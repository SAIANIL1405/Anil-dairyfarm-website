import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { items, removeFromCart, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orderForm, setOrderForm] = useState({
    name: '',
    mobile: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }
    // Handle order submission here
    console.log('Order submitted:', { ...orderForm, items, total });
    clearCart();
    alert('Order placed successfully!');
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-blue-600 font-bold">₹{item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
            
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-xl font-bold">Total: ₹{total}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Order Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  className="w-full p-2 border rounded"
                  value={orderForm.mobile}
                  onChange={(e) => setOrderForm({...orderForm, mobile: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Delivery Address</label>
                <textarea
                  required
                  className="w-full p-2 border rounded"
                  rows={3}
                  value={orderForm.address}
                  onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};