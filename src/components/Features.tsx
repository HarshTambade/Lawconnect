import React from 'react';
import { Shield, Clock, Zap, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Bank-grade encryption and security protocols to protect your sensitive legal data.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access legal services and AI assistance whenever you need them.',
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'Create legal documents in minutes with our AI-powered system.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Connect with qualified legal professionals when you need human expertise.',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose LawConnect</h2>
          <p className="mt-4 text-xl text-gray-600">Features that set us apart</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}