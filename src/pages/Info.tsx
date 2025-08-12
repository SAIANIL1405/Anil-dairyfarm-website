import React from 'react';

export const Info = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Anil Dairy</h2>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <p className="text-gray-600">
            Welcome to Anil Dairy, where we've been providing the finest dairy products since 1995. 
            Our commitment to quality and freshness has made us a trusted name in the dairy industry.
          </p>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Quality assurance in every product</li>
              <li>Fresh from farm to your doorstep</li>
              <li>Supporting local farmers</li>
              <li>Sustainable farming practices</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Our Process</h3>
            <p className="text-gray-600">
              We collect milk from selected dairy farms, process it in our state-of-the-art facility, 
              and deliver it fresh to your doorstep within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};