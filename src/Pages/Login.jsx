import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onAuthSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login successful:', formData);
      onAuthSuccess();
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8 p-8 bg-blue-950 rounded-xl shadow-2xl">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-sm text-blue-300">
        Or{' '}
        <Link to="/signup" className="font-medium text-blue-400 hover:text-blue-200">
          create a new account
        </Link>
      </p>
    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-400 text-white bg-blue-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-white">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-400 border-gray-600 rounded focus:ring-blue-400"
            disabled={isLoading}
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-blue-400 hover:text-blue-200">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Login;
