import React from 'react';
import { Users, FileCheck, Building, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, label: 'Active Users', value: '10,000+' },
    { icon: FileCheck, label: 'Documents Generated', value: '50,000+' },
    { icon: Building, label: 'Business Clients', value: '500+' },
    { icon: Award, label: 'Success Rate', value: '99%' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}