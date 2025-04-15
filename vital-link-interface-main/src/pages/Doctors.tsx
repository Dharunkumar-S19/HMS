
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Doctors = () => {
  const navigate = useNavigate();
  
  const doctorsList = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      about: "Specializes in cardiovascular medicine with a focus on preventive care.",
      qualification: "MD, Cardiology, Board Certified",
      isSpecial: true,
      speciality: "Cardiology"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      about: "Expert in orthopedic surgery with a specialization in sports medicine.",
      qualification: "MD, Orthopedic Surgery, Fellowship in Sports Medicine",
      isSpecial: false,
      speciality: "Orthopedics"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      about: "Pediatric specialist with over 15 years of experience in child development.",
      qualification: "MD, Pediatrics, PhD in Child Development",
      isSpecial: true,
      speciality: "Pediatrics"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      about: "Specializes in neurological disorders and innovative treatment approaches.",
      qualification: "MD, Neurology, Fellowship in Clinical Neurophysiology",
      isSpecial: false,
      speciality: "Neurology"
    },
    {
      id: 5,
      name: "Dr. Olivia Thompson",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      about: "Dermatology expert focusing on skin cancer prevention and treatment.",
      qualification: "MD, Dermatology, Board Certified",
      isSpecial: true,
      speciality: "Dermatology"
    }
  ];

  const specialDoctors = doctorsList.filter(doctor => doctor.isSpecial);
  
  const handleBookAppointment = (doctor) => {
    // Navigate to appointments page with doctor information
    navigate('/appointments', { state: { selectedDoctor: doctor.name, department: doctor.speciality } });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-hospital-text mb-6">Our Doctors</h1>
      <p className="text-lg text-gray-600 mb-8">
        Meet our team of qualified healthcare professionals dedicated to providing exceptional care.
      </p>

      {/* Special Doctors Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-hospital-primary mb-4">Special Consultants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-hospital-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {doctor.speciality}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-hospital-text mb-2">{doctor.name}</h3>
                <p className="text-sm text-gray-600 font-medium mb-2">{doctor.qualification}</p>
                <p className="text-gray-700 mb-4">{doctor.about}</p>
                <Button 
                  onClick={() => handleBookAppointment(doctor)}
                  className="w-full bg-hospital-primary hover:bg-opacity-90 transition-colors"
                >
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Doctors Section */}
      <h2 className="text-2xl font-semibold text-hospital-text mb-4">All Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsList.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-hospital-text mb-2">{doctor.name}</h3>
              <p className="text-sm text-gray-600 font-medium mb-2">{doctor.qualification}</p>
              <p className="text-gray-700 mb-4">{doctor.about}</p>
              <Button 
                onClick={() => handleBookAppointment(doctor)}
                className="w-full bg-hospital-primary hover:bg-opacity-90 transition-colors"
              >
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
