import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Legal Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied users who trust LawConnect for their legal needs.
          </p>
          <Link
            to="/document-generator"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}