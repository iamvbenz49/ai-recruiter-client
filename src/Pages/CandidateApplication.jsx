import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CandidateApplication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hiring = location.state?.hiring;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    resume: null,
    coverLetter: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
    if (errors.resume) {
      setErrors(prev => ({
        ...prev,
        resume: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Show success message and redirect
      alert('Application submitted successfully!');
      navigate('/dashboard');
    }
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  if (!hiring) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Job Selected</h1>
          <p className="text-gray-600 mb-6">Please go back and select a job to apply for.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleCancel}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for {hiring.title}</h1>
            <p className="text-gray-600 mb-4">{hiring.company} • {hiring.location}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Type: {hiring.type}</span>
              <span>Salary: {hiring.salary}</span>
              <span>Experience: {hiring.experience}</span>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Application Details</h2>
            <p className="text-gray-600 text-sm">Please fill in your information to apply for this position</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 5+ years, 2-4 years"
                  />
                  {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience}</p>}
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                    Key Skills *
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows="3"
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.skills ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="List your key skills (e.g., React, Node.js, Python)"
                  />
                  {errors.skills && <p className="mt-1 text-sm text-red-600">{errors.skills}</p>}
                </div>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Documents</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.resume ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <p className="mt-1 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  {errors.resume && <p className="mt-1 text-sm text-red-600">{errors.resume}</p>}
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="6"
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.coverLetter ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Write a cover letter explaining why you're interested in this position and how your skills match the requirements..."
                  />
                  {errors.coverLetter && <p className="mt-1 text-sm text-red-600">{errors.coverLetter}</p>}
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateApplication;
