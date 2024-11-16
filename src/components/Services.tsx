import React from 'react';
import { Gavel, FileText, Video, Calculator, MessageSquare, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Gavel,
      title: 'Legal Consultations',
      description: 'Connect with experienced lawyers for professional legal advice.',
    },
    {
      icon: FileText,
      title: 'Document Generation',
      description: 'AI-powered legal document creation and automation.',
    },
    {
      icon: Video,
      title: 'Virtual Court',
      description: 'Attend court sessions remotely with secure video conferencing.',
    },
    {
      icon: Calculator,
      title: 'CA Services',
      description: 'Comprehensive chartered accountant services for businesses.',
    },
    {
      icon: MessageSquare,
      title: 'AI Assistant',
      description: '24/7 AI-powered legal assistance and guidance.',
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Stay compliant with automated legal updates and reminders.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive legal and financial solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}