
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ShieldCheck, HeartPulse, Award, UserRound, FlaskConical, Stethoscope, Building2 } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-hospital-primary" />,
      title: 'Easy Scheduling',
      description: 'Book appointments online with your preferred doctors at your convenience.'
    },
    {
      icon: <Clock className="h-8 w-8 text-hospital-primary" />,
      title: 'Quick Access',
      description: 'Get fast access to our healthcare services with minimal waiting time.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-hospital-primary" />,
      title: 'Insurance Coverage',
      description: 'We work with most major insurance providers to ensure your care is covered.'
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-hospital-primary" />,
      title: 'Quality Care',
      description: 'Our expert medical professionals provide the highest standard of patient care.'
    }
  ];

  const stats = [
    { value: '40+', label: 'Experienced Doctors', icon: <UserRound className="h-8 w-8 text-hospital-primary" /> },
    { value: '10+', label: 'Modern Laboratories', icon: <FlaskConical className="h-8 w-8 text-hospital-primary" /> },
    { value: '15+', label: 'Specialties', icon: <Stethoscope className="h-8 w-8 text-hospital-primary" /> },
    { value: '3', label: 'Locations', icon: <Building2 className="h-8 w-8 text-hospital-primary" /> }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-hospital-background to-white rounded-2xl shadow-sm overflow-hidden">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-10">
              <h1 className="text-4xl lg:text-5xl font-bold text-hospital-text mb-6">
                Your Health Is Our <span className="text-hospital-primary">Priority</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience exceptional healthcare services tailored to your needs. 
                Our team of healthcare professionals is dedicated to providing you with the best care.
              </p>
              <Link
                to="/appointments"
                className="inline-block px-8 py-3 bg-hospital-primary text-white font-medium rounded-lg shadow hover:bg-opacity-90 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt="Healthcare professionals" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-hospital-primary mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center text-hospital-text mb-12">
          Why Choose Our Healthcare Center
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-hospital-text">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hospital Images Section */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center text-hospital-text mb-8">
          Our Facilities
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Take a visual tour of our state-of-the-art facilities designed to provide comfort, 
          convenience, and the highest standard of medical care.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" 
              alt="Hospital Building" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-hospital-text">Modern Hospital Building</h3>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
              alt="Reception Area" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-hospital-text">Welcoming Reception Area</h3>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1516549655669-8443ef49b925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Patient Room" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-hospital-text">Comfortable Patient Rooms</h3>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&q=80" 
              alt="Operation Theater" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-hospital-text">State-of-the-art Operating Rooms</h3>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24ca5a033f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Laboratory" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-hospital-text">Advanced Laboratory Facilities</h3>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1519494140661-5035456c7d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1303&q=80" 
              alt="Waiting Area" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-hospital-text">Comfortable Waiting Areas</h3>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/about" 
            className="inline-block px-6 py-3 bg-white border border-hospital-primary text-hospital-primary font-medium rounded-lg hover:bg-hospital-primary hover:text-white transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-hospital-primary bg-opacity-5 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-10">
            <Award className="h-14 w-14 text-hospital-primary mb-4" />
            <h2 className="text-3xl font-bold text-center text-hospital-text mb-4">
              Recognized for Excellence
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              Our commitment to outstanding healthcare has been recognized with numerous awards and accreditations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <img 
                src="https://placehold.co/100x80?text=Award" 
                alt="Healthcare Excellence Award" 
                className="h-20 mb-4"
              />
              <div className="text-center">
                <p className="font-medium text-hospital-text">Healthcare Excellence Award</p>
                <p className="text-sm text-gray-600">2023</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <img 
                src="https://placehold.co/100x80?text=Award" 
                alt="Patient Satisfaction Award" 
                className="h-20 mb-4"
              />
              <div className="text-center">
                <p className="font-medium text-hospital-text">Patient Satisfaction Award</p>
                <p className="text-sm text-gray-600">2022</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <img 
                src="https://placehold.co/100x80?text=Award" 
                alt="Quality Safety Award" 
                className="h-20 mb-4"
              />
              <div className="text-center">
                <p className="font-medium text-hospital-text">Quality & Safety Award</p>
                <p className="text-sm text-gray-600">2021</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <img 
                src="https://placehold.co/100x80?text=Award" 
                alt="Innovation in Healthcare Award" 
                className="h-20 mb-4"
              />
              <div className="text-center">
                <p className="font-medium text-hospital-text">Innovation Award</p>
                <p className="text-sm text-gray-600">2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hospital-primary bg-opacity-10 rounded-2xl">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-hospital-text mb-6">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of healthcare professionals is ready to provide you with the care you deserve.
            Book your appointment today and take the first step towards better health.
          </p>
          <Link
            to="/appointments"
            className="inline-block px-8 py-3 bg-hospital-primary text-white font-medium rounded-lg shadow hover:bg-opacity-90 transition-colors"
          >
            Book Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
