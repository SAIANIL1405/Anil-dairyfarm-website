import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600 h-5 w-5" />
              <span className="text-gray-600">+91 9059033541</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600 h-5 w-5" />
              <span className="text-gray-600">23211a6729@bvrit.ac.in</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600 h-5 w-5" />
              <span className="text-gray-600">123 Dairy Farm Road,hyderabad, telangana</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};