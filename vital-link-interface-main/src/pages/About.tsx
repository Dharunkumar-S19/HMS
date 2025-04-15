
import React from 'react';
import { Shield, Heart, Clock, Medal, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-hospital-text mb-6">About HealthCare Center</h1>
      <p className="text-lg text-gray-600 mb-8">
        Learn more about our mission, values, and commitment to providing exceptional healthcare services.
      </p>
      
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-12 h-96">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
          alt="Hospital building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hospital-primary/90 to-transparent flex items-center">
          <div className="max-w-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Committed to Excellence in Healthcare</h2>
            <p className="text-white/90">
              Since our founding in 1985, HealthCare Center has been dedicated to providing compassionate, 
              high-quality care to our community with a focus on innovation and patient-centered services.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-hospital-text mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To enhance the health and wellbeing of the communities we serve through compassionate care, 
            innovative treatments, and a commitment to excellence. We strive to make quality healthcare 
            accessible to all and to treat each patient with dignity and respect.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-hospital-text mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the healthcare provider of choice by delivering exceptional patient experiences, 
            advancing medical knowledge through research and education, and fostering a culture of 
            wellness in our community.
          </p>
        </div>
      </div>
      
      {/* Core Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-hospital-text mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-hospital-primary" />
            </div>
            <h3 className="text-xl font-bold text-hospital-text mb-2 text-center">Compassion</h3>
            <p className="text-gray-700 text-center">
              We provide care with kindness, empathy, and respect for the dignity of every individual.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <Medal className="h-12 w-12 text-hospital-primary" />
            </div>
            <h3 className="text-xl font-bold text-hospital-text mb-2 text-center">Excellence</h3>
            <p className="text-gray-700 text-center">
              We strive for the highest standards in healthcare, continuously improving our services and outcomes.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-hospital-primary" />
            </div>
            <h3 className="text-xl font-bold text-hospital-text mb-2 text-center">Teamwork</h3>
            <p className="text-gray-700 text-center">
              We collaborate across disciplines to provide integrated care that addresses all patient needs.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-hospital-primary" />
            </div>
            <h3 className="text-xl font-bold text-hospital-text mb-2 text-center">Integrity</h3>
            <p className="text-gray-700 text-center">
              We act with honesty and transparency in all interactions, maintaining the highest ethical standards.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-hospital-primary" />
            </div>
            <h3 className="text-xl font-bold text-hospital-text mb-2 text-center">Accessibility</h3>
            <p className="text-gray-700 text-center">
              We ensure our services are available to all who need them, regardless of background or circumstance.
            </p>
          </div>
        </div>
      </div>
      
      {/* History Timeline */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-hospital-text mb-6">Our History</h2>
        <div className="relative border-l-4 border-hospital-primary ml-6 pl-8 pb-6 space-y-10">
          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute -left-14 mt-1 h-6 w-6 rounded-full bg-hospital-primary"></div>
            <div className="mb-1 text-xl font-bold text-hospital-text">1985</div>
            <p className="text-gray-700">
              HealthCare Center was founded with a small clinic of just 10 physicians dedicated to serving the local community.
            </p>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute -left-14 mt-1 h-6 w-6 rounded-full bg-hospital-primary"></div>
            <div className="mb-1 text-xl font-bold text-hospital-text">1995</div>
            <p className="text-gray-700">
              Expanded facilities to include a state-of-the-art hospital with 200 beds and specialized departments.
            </p>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="relative">
            <div className="absolute -left-14 mt-1 h-6 w-6 rounded-full bg-hospital-primary"></div>
            <div className="mb-1 text-xl font-bold text-hospital-text">2005</div>
            <p className="text-gray-700">
              Established the Research and Innovation Center to advance medical knowledge and treatment methods.
            </p>
          </div>
          
          {/* Timeline Item 4 */}
          <div className="relative">
            <div className="absolute -left-14 mt-1 h-6 w-6 rounded-full bg-hospital-primary"></div>
            <div className="mb-1 text-xl font-bold text-hospital-text">2015</div>
            <p className="text-gray-700">
              Implemented cutting-edge electronic health record system and telemedicine services to improve patient access.
            </p>
          </div>
          
          {/* Timeline Item 5 */}
          <div className="relative">
            <div className="absolute -left-14 mt-1 h-6 w-6 rounded-full bg-hospital-primary"></div>
            <div className="mb-1 text-xl font-bold text-hospital-text">2023</div>
            <p className="text-gray-700">
              Completed major expansion, adding specialized centers for cancer treatment, heart care, and women's health.
            </p>
          </div>
        </div>
      </div>
      
      {/* Leadership Team */}
      <div>
        <h2 className="text-2xl font-semibold text-hospital-text mb-6">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Dr. Robert Johnson" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-hospital-text">Dr. Robert Johnson</h3>
              <p className="text-sm text-gray-600">Chief Executive Officer</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                alt="Dr. Sarah Williams" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-hospital-text">Dr. Sarah Williams</h3>
              <p className="text-sm text-gray-600">Chief Medical Officer</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Michael Chen" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-hospital-text">Michael Chen</h3>
              <p className="text-sm text-gray-600">Chief Financial Officer</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Dr. Emily Rodriguez" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-hospital-text">Dr. Emily Rodriguez</h3>
              <p className="text-sm text-gray-600">Chief of Nursing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
