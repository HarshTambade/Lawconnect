import React, { useState, useEffect } from 'react';
import { Search, MapPin, Phone, Building, Filter, Star, Clock, Globe, BookOpen, Mail, Globe2 } from 'lucide-react';
import { LegalFirm, legalFirmsData } from '../data/legalFirmsData';
import { cities } from '../data/cities';

export default function LegalFirms() {
  const [firms, setFirms] = useState<LegalFirm[]>(legalFirmsData);
  const [filteredFirms, setFilteredFirms] = useState<LegalFirm[]>(legalFirmsData);
  const [cityFilter, setCityFilter] = useState<string>('');
  const [stateFilter, setStateFilter] = useState<string>('');
  const [specializationFilter, setSpecializationFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const states = Array.from(new Set(cities.map(city => city.state))).sort();
  const citiesInState = cities
    .filter(city => !stateFilter || city.state === stateFilter)
    .sort((a, b) => a.name.localeCompare(b.name));
  const specializations = Array.from(new Set(firms.map(firm => firm.specialization))).sort();

  useEffect(() => {
    const filtered = firms.filter(firm => {
      const matchesCity = !cityFilter || firm.city === cityFilter;
      const matchesState = !stateFilter || firm.state === stateFilter;
      const matchesSpecialization = !specializationFilter || firm.specialization === specializationFilter;
      const matchesSearch = !searchQuery || 
        firm.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        firm.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        firm.areasOfPractice?.some(area => area.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCity && matchesState && matchesSpecialization && matchesSearch;
    });
    
    setFilteredFirms(filtered);
  }, [firms, cityFilter, stateFilter, specializationFilter, searchQuery]);

  const toggleCardExpansion = (firmId: string) => {
    setExpandedCard(expandedCard === firmId ? null : firmId);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="flex items-center mb-8">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-lg">
            <Building className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Legal Firms Directory
          </h2>
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search firms, areas of practice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={stateFilter}
              onChange={(e) => {
                setStateFilter(e.target.value);
                setCityFilter('');
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
            >
              <option value="">All States</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
            >
              <option value="">All Cities</option>
              {citiesInState.map(city => (
                <option key={city.id} value={city.name}>{city.name}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
            >
              <option value="">All Specializations</option>
              {specializations.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFirms.map((firm) => (
            <div
              key={firm.id}
              className={`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 ${
                expandedCard === firm.id ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{firm.companyName}</h3>
                <div className="flex items-center bg-indigo-50 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-indigo-600">{firm.rating}</span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{firm.address}, {firm.city} - {firm.pincode}</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{firm.phone}</span>
                </div>

                {firm.email && (
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    <a href={`mailto:${firm.email}`} className="text-indigo-600 hover:text-indigo-800">
                      {firm.email}
                    </a>
                  </div>
                )}

                {firm.website && (
                  <div className="flex items-center">
                    <Globe2 className="h-4 w-4 mr-2 text-gray-400" />
                    <a href={`https://${firm.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                      {firm.website}
                    </a>
                  </div>
                )}
                
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{firm.specialization}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{firm.experience} years experience</span>
                </div>

                {firm.languages && (
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{firm.languages.join(', ')}</span>
                  </div>
                )}

                {expandedCard === firm.id && firm.areasOfPractice && (
                  <div className="mt-4">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium text-gray-700">Areas of Practice</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {firm.areasOfPractice.map((area, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                  Contact Now
                </button>
                <button
                  onClick={() => toggleCardExpansion(firm.id)}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {expandedCard === firm.id ? 'Less' : 'More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}