import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80)',
    }}>
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">FRESH VALLEY DAIRY PRODUCTS</h1>
          <p className="text-gray-600 text-lg">Farm-fresh dairy products delivered straight to your door</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};