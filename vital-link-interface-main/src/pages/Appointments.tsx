
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react';

const Appointments = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mock user state - in a real app this would come from authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Get doctor information from navigation state if available
  const selectedDoctor = location.state?.selectedDoctor || '';
  const selectedDepartment = location.state?.department || '';
  
  // Appointment form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: selectedDepartment,
    doctor: selectedDoctor,
    message: ''
  });
  
  // Update form data when navigation state changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      department: selectedDepartment,
      doctor: selectedDoctor
    }));
  }, [selectedDoctor, selectedDepartment]);
  
  const departments = [
    "Cardiology", "Neurology", "Orthopedics", "Pediatrics", 
    "Gynecology", "Dermatology", "Ophthalmology", "ENT"
  ];
  
  const doctors = {
    "Cardiology": ["Dr. Sarah Johnson", "Dr. Robert Smith"],
    "Neurology": ["Dr. James Wilson", "Dr. Maria Garcia"],
    "Orthopedics": ["Dr. Michael Chen", "Dr. David Brown"],
    "Pediatrics": ["Dr. Emily Rodriguez", "Dr. Lisa Taylor"],
    "Gynecology": ["Dr. Jennifer Lewis", "Dr. Susan Williams"],
    "Dermatology": ["Dr. Olivia Thompson", "Dr. John Davis"],
    "Ophthalmology": ["Dr. Thomas Miller", "Dr. Karen White"],
    "ENT": ["Dr. Richard Anderson", "Dr. Patricia Martin"]
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Reset doctor selection when department changes
    if (name === 'department') {
      setFormData(prev => ({ ...prev, doctor: '' }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted successfully!');
    // Here you would typically send the data to your backend
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-hospital-text mb-6">Book an Appointment</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-hospital-text mb-4">Please Login to Book an Appointment</h2>
            <p className="text-gray-600 mb-6">
              You need to be logged in to book appointments with our healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/login')}
                className="px-6 py-3 bg-hospital-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="px-6 py-3 bg-white border border-hospital-primary text-hospital-primary font-medium rounded-lg hover:bg-hospital-primary hover:text-white transition-colors"
              >
                Create Account
              </button>
            </div>
            
            {/* For demo purposes only - remove in production */}
            <div className="mt-8 p-4 bg-gray-100 rounded-md inline-block">
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="text-hospital-primary underline"
              >
                Demo: Continue as logged in user
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-hospital-text mb-6">Book an Appointment</h1>
      <p className="text-lg text-gray-600 mb-8">
        Schedule a consultation with our healthcare professionals. Fill in the form below to request your preferred date and time.
      </p>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-hospital-text mb-4">Personal Information</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  <User size={16} className="inline mr-1" /> Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  <Mail size={16} className="inline mr-1" /> Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  <Phone size={16} className="inline mr-1" /> Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>
            
            {/* Appointment Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-hospital-text mb-4">Appointment Details</h2>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar size={16} className="inline mr-1" /> Preferred Date
                </label>
                <input 
                  type="date" 
                  id="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  <Clock size={16} className="inline mr-1" /> Preferred Time
                </label>
                <input 
                  type="time" 
                  id="time" 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select 
                  id="department" 
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                  Doctor
                </label>
                <select 
                  id="doctor" 
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                  disabled={!formData.department}
                  required
                >
                  <option value="">Select Doctor</option>
                  {formData.department && doctors[formData.department]?.map((doctor) => (
                    <option key={doctor} value={doctor}>{doctor}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              <FileText size={16} className="inline mr-1" /> Additional Information (Optional)
            </label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
              placeholder="Please provide any additional information about your condition or reason for appointment..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full md:w-auto px-8 py-3 bg-hospital-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
