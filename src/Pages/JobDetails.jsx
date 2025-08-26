import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const JobDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hiring = location.state?.hiring;

  const handleBack = () => {
    navigate('/dashboard');
  };

  if (!hiring) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Job Selected</h1>
          <p className="text-gray-600 mb-6">Please go back and select a job to view details.</p>
          <button
            onClick={handleBack}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Applied':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'bg-purple-100 text-purple-800';
      case 'Part-time':
        return 'bg-yellow-100 text-yellow-800';
      case 'Contract':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
        </div>

        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(hiring.status)} mr-4`}>
                  {hiring.status}
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(hiring.type)}`}>
                  {hiring.type}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{hiring.title}</h1>
              
              <div className="flex items-center text-xl text-gray-600 mb-6">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-semibold">{hiring.company}</span>
              </div>
              
              <div className="flex items-center text-lg text-gray-600 mb-6">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{hiring.location}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">Salary Range</div>
                  <div className="text-xl font-semibold text-gray-900">{hiring.salary}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">Experience Required</div>
                  <div className="text-xl font-semibold text-gray-900">{hiring.experience}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">Total Applicants</div>
                  <div className="text-xl font-semibold text-gray-900">{hiring.applicants}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are looking for a talented and experienced {hiring.title.toLowerCase()} to join our dynamic team at {hiring.company}. 
                  This is an exciting opportunity to work on cutting-edge projects and contribute to our company's growth and success.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a {hiring.title.toLowerCase()}, you will be responsible for developing high-quality software solutions, 
                  collaborating with cross-functional teams, and ensuring the delivery of exceptional user experiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are passionate about technology, have a strong problem-solving mindset, and enjoy working in a 
                  collaborative environment, we would love to hear from you.
                </p>
              </div>
            </div>

            {/* Required Skills */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-3">
                {hiring.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Design and develop high-quality software solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Collaborate with cross-functional teams and stakeholders</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Write clean, maintainable, and well-documented code</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Participate in code reviews and technical discussions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stay updated with industry best practices and technologies</span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Flexible working hours</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-gray-700">Remote work options</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-gray-700">Professional development</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-gray-700">Health insurance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Deadline */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Deadline</h3>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">
                  {formatDate(hiring.deadline)}
                </div>
                <p className="text-sm text-gray-600">Submit your application before this date</p>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About {hiring.company}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {hiring.company} is a leading technology company dedicated to innovation and excellence. 
                We create cutting-edge solutions that help businesses thrive in the digital age.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Founded in 2010</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>500+ employees</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>Global presence</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {hiring.status === 'Active' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <button
                  onClick={() => navigate('/apply', { state: { hiring } })}
                  className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 mb-3"
                >
                  Apply Now
                </button>
                <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-3 rounded-md text-sm font-medium hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
                  Save Job
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
