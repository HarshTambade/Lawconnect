import React from 'react';
import { ArrowRight, Shield, Scale, BookOpen, MessageSquare, Users, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <Shield className="h-4 w-4 text-indigo-200" />
              <span className="ml-2 text-sm text-indigo-100">Trusted by 10,000+ Professionals</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
              Transform Your Legal Practice with AI-Powered Solutions
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Streamline your legal workflow with advanced document automation, AI assistance, and comprehensive case management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/document-generator"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-indigo-700 bg-white hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Try Document Generator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-assistant"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/50 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Explore AI Assistant
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-indigo-300" />
                <span className="ml-2 text-sm text-indigo-100">10k+ Users</span>
              </div>
              <div className="flex items-center">
                <FileCheck className="h-5 w-5 text-indigo-300" />
                <span className="ml-2 text-sm text-indigo-100">50k+ Documents</span>
              </div>
              <div className="flex items-center">
                <Scale className="h-5 w-5 text-indigo-300" />
                <span className="ml-2 text-sm text-indigo-100">99% Success</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-200 border border-white/20">
              <Shield className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-indigo-100">Bank-grade encryption and compliance measures.</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-200 border border-white/20">
              <Scale className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Legal Excellence</h3>
              <p className="text-indigo-100">Expert-verified templates and AI models.</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-200 border border-white/20">
              <BookOpen className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Library</h3>
              <p className="text-indigo-100">Extensive collection of legal resources.</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-200 border border-white/20">
              <MessageSquare className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-indigo-100">AI-powered assistance always available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}