import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 relative">
      {showNotification && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm animate-fade-in-out">
          Added to cart!
        </div>
      )}
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4">
          <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};