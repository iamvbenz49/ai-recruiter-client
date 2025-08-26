import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ onAuthSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    address: '',
    linkedIn: '',
    gender: 'Prefer not to say'
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with your actual signup logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle successful signup
      console.log('Signup successful:', formData);
      onAuthSuccess();
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup error here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 p-8 bg-blue-950 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-blue-300">
            Or{' '}
            <Link to="/login" className="font-medium text-blue-400 hover:text-blue-200">
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-300">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-300">
                Email address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-300">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-blue-300">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                placeholder="+1234567890"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-blue-300">
                Age *
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min="18"
                max="100"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-blue-300">
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                placeholder="Enter your complete address"
                value={formData.address}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="linkedIn" className="block text-sm font-medium text-blue-300">
                LinkedIn Profile URL *
              </label>
              <input
                id="linkedIn"
                name="linkedIn"
                type="url"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                placeholder="https://www.linkedin.com/in/yourprofile"
                value={formData.linkedIn}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-blue-300">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="mt-1 block w-full px-3 py-2 border border-blue-700 bg-blue-900 text-white rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                value={formData.gender}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="agree-terms"
              name="agree-terms"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-blue-600 rounded"
              disabled={isLoading}
            />
            <label htmlFor="agree-terms" className="ml-2 block text-sm text-white">
              I agree to the{' '}
              <a href="#" className="text-blue-400 hover:text-blue-200">
                Terms and Conditions
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
