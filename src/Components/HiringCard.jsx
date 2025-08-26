import React from 'react';
import { useNavigate } from 'react-router-dom';

const HiringCard = ({ hiring, context }) => {
  const navigate = useNavigate();
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-600 text-green-100';
      case 'Applied':
        return 'bg-blue-600 text-blue-100';
      case 'Completed':
        return 'bg-gray-600 text-gray-100';
      default:
        return 'bg-gray-600 text-gray-100';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'bg-purple-600 text-purple-100';
      case 'Part-time':
        return 'bg-yellow-600 text-yellow-100';
      case 'Contract':
        return 'bg-orange-600 text-orange-100';
      default:
        return 'bg-gray-600 text-gray-100';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-blue-950 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-800">
      {/* Header */}
      <div className="p-6 border-b border-blue-800">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white line-clamp-2">
            {hiring.title}
          </h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(hiring.status)}`}>
            {hiring.status}
          </span>
        </div>
        
        <div className="flex items-center text-blue-300 mb-2">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-sm">{hiring.company}</span>
        </div>
        
        <div className="flex items-center text-blue-300 mb-3">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{hiring.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(hiring.type)}`}>
            {hiring.type}
          </span>
          <span className="text-sm font-medium text-white">{hiring.salary}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Experience */}
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2-2H8a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2-2H8a2 2 0 00-2-2v2" />
            </svg>
            <span className="text-sm text-blue-300">{hiring.experience} experience</span>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-sm font-medium text-blue-300 mb-2">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {hiring.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Deadline */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-blue-300">Deadline: {formatDate(hiring.deadline)}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm text-blue-300">{hiring.applicants} applicants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-blue-900 rounded-b-lg">
        <div className="flex space-x-3">
          {context === 'active' ? (
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => navigate('/job/' + hiring.id, { state: { hiring } })}
                className="w-full bg-blue-600 text-white border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-200"
              >
                View Details
              </button>
              <button 
                onClick={() => navigate('/apply', { state: { hiring } })}
                className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 focus:outline-none focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-200"
              >
                Apply
              </button>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/job/' + hiring.id, { state: { hiring } })}
              className="w-full bg-blue-600 text-white border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-200"
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HiringCard;
