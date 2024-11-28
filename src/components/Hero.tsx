import React from 'react';
import { ArrowRight, Shield, Scale, BookOpen, MessageSquare, Users, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-grade security for your legal documents'
    },
    {
      icon: Scale,
      title: 'Legal Expertise',
      description: 'Access to qualified legal professionals'
    },
    {
      icon: BookOpen,
      title: 'Document Library',
      description: 'Extensive collection of legal templates'
    },
    {
      icon: MessageSquare,
      title: 'AI Assistant',
      description: '24/7 intelligent legal guidance'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="relative z-10 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Transform Your</span>
                <span className="block text-indigo-200">Legal Experience</span>
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-lg mx-auto lg:mx-0">
                Streamline your legal processes with AI-powered document generation, expert assistance, and comprehensive case management.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to="/document-generator"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 md:text-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/ai-assistant"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-500 bg-opacity-20 hover:bg-opacity-30 md:text-lg"
                >
                  Try AI Assistant
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white border border-white border-opacity-10"
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white bg-opacity-10 mx-auto">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-white text-center">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-indigo-100 text-center">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-50"></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-900 to-transparent opacity-25"></div>
    </div>
  );
}