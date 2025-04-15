
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { MenuIcon, X, User, Info, LogIn } from 'lucide-react';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Mock user state - in a real app this would come from authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleBookAppointment = () => {
    if (isLoggedIn) {
      navigate('/appointments');
    } else {
      navigate('/login'); // This would be the login page route
    }
  };

  return (
    <div className="min-h-screen bg-hospital-background flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onClose={toggleSidebar} />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                className="lg:hidden text-hospital-text focus:outline-none mr-4"
                onClick={toggleSidebar}
                aria-label="Open sidebar"
              >
                <MenuIcon size={24} />
              </button>
              <Link to="/" className="text-2xl font-bold text-hospital-primary">
                HealthCare Center
              </Link>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="flex items-center gap-1 text-hospital-text hover:text-hospital-primary transition-colors">
                <Info size={18} />
                <span>About</span>
              </Link>
              
              {isLoggedIn ? (
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center gap-1 text-hospital-text hover:text-hospital-primary transition-colors"
                >
                  <User size={18} />
                  <span>Logout</span>
                </button>
              ) : (
                <>
                  <Link to="/login" className="flex items-center gap-1 text-hospital-text hover:text-hospital-primary transition-colors">
                    <LogIn size={18} />
                    <span>Login</span>
                  </Link>
                  <Link 
                    to="/signup" 
                    className="px-4 py-2 bg-hospital-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              {/* Mobile nav dropdown could be added here */}
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
        
        {/* Footer */}
        <footer className="bg-white shadow-inner py-4 px-6 text-center text-hospital-text">
          <p>© 2025 HealthCare Center. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
