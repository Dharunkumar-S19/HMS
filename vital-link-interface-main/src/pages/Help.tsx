
import React from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';

const Help = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-hospital-text mb-6">Help Center</h1>
      <p className="text-lg text-gray-600 mb-8">
        Find answers to frequently asked questions and get assistance with our services. Our team is always ready to help you.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Information Card */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-hospital-text mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-hospital-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-hospital-text">Phone</h3>
                <p className="text-gray-700">Main: (555) 123-4567</p>
                <p className="text-gray-700">Emergency: (555) 987-6543</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-hospital-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-hospital-text">Email</h3>
                <p className="text-gray-700">info@healthcarecenter.com</p>
                <p className="text-gray-700">appointments@healthcarecenter.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-hospital-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-hospital-text">Address</h3>
                <p className="text-gray-700">
                  123 Healthcare Avenue<br />
                  Medical District<br />
                  Healthville, HC 54321
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-hospital-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-hospital-text">Hours of Operation</h3>
                <p className="text-gray-700">Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Saturday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Sunday: 10:00 AM - 3:00 PM</p>
                <p className="text-gray-700 font-medium">Emergency Care: 24/7</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Card */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-hospital-text mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 font-medium text-hospital-text">
                <AlertCircle className="h-5 w-5 text-hospital-primary" />
                How do I schedule an appointment?
              </h3>
              <p className="text-gray-700 mt-2">
                You can schedule an appointment by calling our appointment line at (555) 123-4567, using our online portal, or visiting our reception desk during business hours.
              </p>
            </div>
            
            <div>
              <h3 className="flex items-center gap-2 font-medium text-hospital-text">
                <AlertCircle className="h-5 w-5 text-hospital-primary" />
                What insurance plans do you accept?
              </h3>
              <p className="text-gray-700 mt-2">
                We accept most major insurance plans. Please visit our Insurance page for a complete list or contact our insurance department for verification.
              </p>
            </div>
            
            <div>
              <h3 className="flex items-center gap-2 font-medium text-hospital-text">
                <AlertCircle className="h-5 w-5 text-hospital-primary" />
                How can I access my medical records?
              </h3>
              <p className="text-gray-700 mt-2">
                You can access your medical records through our patient portal. If you need assistance, please contact our medical records department at (555) 123-4569.
              </p>
            </div>
            
            <div>
              <h3 className="flex items-center gap-2 font-medium text-hospital-text">
                <AlertCircle className="h-5 w-5 text-hospital-primary" />
                What should I bring to my first appointment?
              </h3>
              <p className="text-gray-700 mt-2">
                Please bring your ID, insurance card, a list of current medications, and any relevant medical records or test results from previous healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-hospital-text mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Have a question or need assistance? Fill out the form below and our team will get back to you as soon as possible.
        </p>
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
              placeholder="How can we help you?"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-primary"
              placeholder="Please describe your question or concern..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="px-6 py-3 bg-hospital-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;
