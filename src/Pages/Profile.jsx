import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Sample user data - in a real app, this would come from context/API
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    age: '28',
    address: '123 Main Street, City, State 12345',
    linkedIn: 'https://www.linkedin.com/in/johndoe',
    gender: 'Male'
  });

  const [formData, setFormData] = useState({ ...userData });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // In a real app, fetch user data from API/context here
    // For now, using sample data
  }, []);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.linkedIn.trim()) newErrors.linkedIn = 'LinkedIn URL is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with your actual update logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update local state
      setUserData({ ...formData });
      setIsEditing(false);
      
      // Show success message
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({ ...userData });
    setErrors({});
    setIsEditing(false);
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Profile</h1>
              <p className="mt-2 text-blue-200">Manage your account information and preferences</p>
            </div>
            
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-200"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Profile Content */}
        <div className="bg-blue-950 rounded-lg shadow-lg border border-blue-800">
          <div className="px-6 py-4 border-b border-blue-800">
            <h2 className="text-xl font-semibold text-white">
              {isEditing ? 'Edit Profile Information' : 'Personal Information'}
            </h2>
            <p className="text-blue-300 text-sm">
              {isEditing ? 'Update your profile information below' : 'Your personal and contact information'}
            </p>
          </div>

          <div className="p-6">
            {isEditing ? (
              // Edit Form
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-900 text-white placeholder-blue-400 ${
                        errors.name ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-900 text-white placeholder-blue-400 ${
                        errors.email ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-900 text-white placeholder-blue-400 ${
                        errors.phone ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="+1234567890"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-blue-300 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="18"
                      max="100"
                      value={formData.age}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-900 text-white placeholder-blue-400 ${
                        errors.age ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="Enter your age"
                    />
                    {errors.age && <p className="mt-1 text-sm text-red-400">{errors.age}</p>}
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-blue-300 mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-900 text-white ${
                        errors.gender ? 'border-red-500' : 'border-blue-700'
                      }`}
                    >
                      <option value="Prefer not to say">Prefer not to say</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {errors.gender && <p className="mt-1 text-sm text-red-400">{errors.gender}</p>}
                  </div>

                  <div>
                    <label htmlFor="linkedIn" className="block text-sm font-medium text-blue-300 mb-2">
                      LinkedIn Profile URL *
                    </label>
                    <input
                      type="url"
                      id="linkedIn"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-900 text-white placeholder-blue-400 ${
                        errors.linkedIn ? 'border-red-500' : 'border-blue-700'
                      }`}
                      placeholder="https://www.linkedin.com/in/yourprofile"
                    />
                    {errors.linkedIn && <p className="mt-1 text-sm text-red-400">{errors.linkedIn}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-blue-300 mb-2">
                    Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-900 text-white placeholder-blue-400 ${
                      errors.address ? 'border-red-500' : 'border-blue-700'
                    }`}
                    placeholder="Enter your complete address"
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-400">{errors.address}</p>}
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-4 pt-6 border-t border-blue-800">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 border border-blue-700 rounded-md text-sm font-medium text-blue-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={isLoading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            ) : (
              // Display Mode
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-1">Full Name</label>
                  <p className="text-white">{userData.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-1">Email Address</label>
                  <p className="text-white">{userData.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-1">Phone Number</label>
                  <p className="text-white">{userData.phone}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-1">Age</label>
                  <p className="text-white">{userData.age} years</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-1">Gender</label>
                  <p className="text-white">{userData.gender}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-1">LinkedIn Profile</label>
                  <a 
                    href={userData.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-200 break-all"
                  >
                    {userData.linkedIn}
                  </a>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-blue-300 mb-1">Address</label>
                  <p className="text-white">{userData.address}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
