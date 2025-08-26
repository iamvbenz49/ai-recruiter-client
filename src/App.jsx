import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import HiringDashboard from './Pages/HiringDashboard';
import CandidateApplication from './Pages/CandidateApplication';
import JobDetails from './Pages/JobDetails';
import Profile from './Pages/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  // Handle successful login/signup
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
              <Navigate to="/dashboard" replace /> : 
              <Login onAuthSuccess={handleAuthSuccess} />
            } 
          />
          <Route 
            path="/signup" 
            element={
              isAuthenticated ? 
              <Navigate to="/dashboard" replace /> : 
              <Signup onAuthSuccess={handleAuthSuccess} />
            } 
          />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <HiringDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/apply" 
            element={
              <ProtectedRoute>
                <CandidateApplication />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/job/:id" 
            element={
              <ProtectedRoute>
                <JobDetails />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          {/* Default redirect */}
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} 
          />
          
          {/* Catch all route */}
          <Route 
            path="*" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
