import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import DocumentGenerator from './components/DocumentGenerator';
import AIAssistant from './components/AIAssistant';
import LegalFirms from './components/LegalFirms';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Stats />
              <Services />
              <Features />
              <Testimonials />
              <CallToAction />
            </main>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/document-generator" element={<DocumentGenerator />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/legal-firms" element={<LegalFirms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}