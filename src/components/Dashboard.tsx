import React, { useState } from 'react';
import { Calendar, FileText, Video, Clock, AlertCircle } from 'lucide-react';

export default function Dashboard() {
  const [cases] = useState([
    {
      id: 1,
      title: "Smith vs. Anderson",
      date: "2024-03-25",
      status: "Upcoming",
      type: "Virtual Hearing"
    },
    {
      id: 2,
      title: "Business Registration - Tech Corp",
      date: "2024-03-20",
      status: "In Progress",
      type: "Documentation"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Case Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-blue-500" />
              <span className="ml-2 text-gray-600">Upcoming Hearings</span>
            </div>
            <p className="text-2xl font-bold mt-2">3</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-green-500" />
              <span className="ml-2 text-gray-600">Active Cases</span>
            </div>
            <p className="text-2xl font-bold mt-2">8</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Video className="h-6 w-6 text-purple-500" />
              <span className="ml-2 text-gray-600">Virtual Sessions</span>
            </div>
            <p className="text-2xl font-bold mt-2">2</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-orange-500" />
              <span className="ml-2 text-gray-600">Pending Tasks</span>
            </div>
            <p className="text-2xl font-bold mt-2">5</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Recent Cases</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {cases.map((case_) => (
              <div key={case_.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{case_.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{case_.type}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {case_.status}
                    </span>
                    <span className="ml-4 text-sm text-gray-500">{case_.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}