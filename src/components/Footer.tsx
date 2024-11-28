import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">LawConnect</span>
            </Link>
            <p className="mt-4">Transforming legal services with AI technology.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/document-generator" className="hover:text-white">Document Generator</Link></li>
              <li><Link to="/ai-assistant" className="hover:text-white">AI Assistant</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Case Management</Link></li>
              <li><Link to="/" className="hover:text-white">CA Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">About Us</Link></li>
              <li><Link to="/" className="hover:text-white">Contact</Link></li>
              <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} LawConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}