import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HiringCard from '../Components/HiringCard';

const HiringDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('active');
  const navigate = useNavigate();

  // Sample data - replace with your actual data
  const activeHirings = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      experience: '5+ years',
      skills: ['React', 'Node.js', 'MongoDB'],
      deadline: '2024-02-15',
      applicants: 45,
      status: 'Active'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Contract',
      salary: '$80k - $100k',
      experience: '3+ years',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping'],
      deadline: '2024-02-20',
      applicants: 32,
      status: 'Active'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $160k',
      experience: '4+ years',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      deadline: '2024-02-25',
      applicants: 28,
      status: 'Active'
    }
  ];

  const myAppliedHirings = [
    {
      id: 7,
      title: 'Frontend Developer',
      company: 'WebSolutions',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $120k',
      experience: '3+ years',
      skills: ['React', 'Tailwind', 'REST APIs'],
      deadline: '2024-03-10',
      applicants: 12,
      status: 'Applied'
    },
    {
      id: 8,
      title: 'Backend Engineer',
      company: 'APIWorks',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $145k',
      experience: '4+ years',
      skills: ['Node.js', 'PostgreSQL', 'Docker'],
      deadline: '2024-03-18',
      applicants: 20,
      status: 'Applied'
    }
  ];

  const completedHirings = [
    {
      id: 6,
      title: 'Frontend Developer',
      company: 'WebSolutions',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$90k - $110k',
      experience: '2+ years',
      skills: ['JavaScript', 'CSS', 'HTML'],
      deadline: '2024-01-30',
      applicants: 67,
      status: 'Completed'
    }
  ];

  const handleLogout = () => {
    // Call the parent logout function
    onLogout();
    // Navigate to login page
    navigate('/login');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'active':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeHirings.map((hiring) => (
              <HiringCard key={hiring.id} hiring={hiring} context={activeTab} />
            ))}
          </div>
        );
      case 'my':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myAppliedHirings.map((hiring) => (
              <HiringCard key={hiring.id} hiring={hiring} context={activeTab} />
            ))}
          </div>
        );
      case 'completed':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedHirings.map((hiring) => (
              <HiringCard key={hiring.id} hiring={hiring} context={activeTab} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Hiring Dashboard</h1>
            <p className="mt-2 text-blue-200">Manage and monitor all your hiring activities</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/profile')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-200"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-950 rounded-lg shadow-lg border border-blue-800 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-300">Active Hirings</p>
                <p className="text-2xl font-semibold text-white">{activeHirings.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-950 rounded-lg shadow-lg border border-blue-800 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A3 3 0 017 17h10a3 3 0 011.879.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-300">My Applications</p>
                <p className="text-2xl font-semibold text-white">{myAppliedHirings.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-950 rounded-lg shadow-lg border border-blue-800 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-300">Completed</p>
                <p className="text-2xl font-semibold text-white">{completedHirings.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-950 rounded-lg shadow-lg border border-blue-800 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-300">Total Applicants</p>
                <p className="text-2xl font-semibold text-white">
                  {activeHirings.reduce((sum, hiring) => sum + hiring.applicants, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-blue-950 rounded-lg shadow-lg border border-blue-800 mb-8">
          <div className="border-b border-blue-800">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('active')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'active'
                    ? 'border-blue-400 text-blue-300'
                    : 'border-transparent text-blue-300 hover:text-blue-200 hover:border-blue-600'
                }`}
              >
                Active Hirings
                <span className="ml-2 bg-blue-600 text-blue-100 py-0.5 px-2.5 rounded-full text-xs font-medium">
                  {activeHirings.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('my')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'my'
                    ? 'border-blue-400 text-blue-300'
                    : 'border-transparent text-blue-300 hover:text-blue-200 hover:border-blue-600'
                }`}
              >
                My Applications
                <span className="ml-2 bg-blue-600 text-blue-100 py-0.5 px-2.5 rounded-full text-xs font-medium">
                  {myAppliedHirings.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'completed'
                    ? 'border-blue-400 text-blue-300'
                    : 'border-transparent text-blue-300 hover:text-blue-200 hover:border-blue-600'
                }`}
              >
                Completed Hirings
                <span className="ml-2 bg-blue-600 text-blue-100 py-0.5 px-2.5 rounded-full text-xs font-medium">
                  {completedHirings.length}
                </span>
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-blue-950 rounded-lg shadow-lg border border-blue-800 p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default HiringDashboard;
