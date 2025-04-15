
import React from 'react';
import { Clock, HeartPulse, Stethoscope, BabyIcon, Brain, Bone, Eye, Ear } from 'lucide-react';

const Specialties = () => {
  const specialtiesList = [
    {
      id: 1,
      name: "24/7 Emergency Care",
      icon: <Clock className="h-12 w-12 text-hospital-primary" />,
      description: "Round-the-clock emergency services with experienced medical professionals available at all times."
    },
    {
      id: 2,
      name: "Nursing Specialties",
      icon: <HeartPulse className="h-12 w-12 text-hospital-primary" />,
      description: "Specialized nursing care in various fields including critical care, pediatric, and geriatric nursing."
    },
    {
      id: 3,
      name: "Cardiology",
      icon: <HeartPulse className="h-12 w-12 text-hospital-primary" />,
      description: "Comprehensive heart care services including diagnostics, treatment, and rehabilitation programs."
    },
    {
      id: 4,
      name: "Internal Medicine",
      icon: <Stethoscope className="h-12 w-12 text-hospital-primary" />,
      description: "Expert care for adults with a focus on prevention, diagnosis, and treatment of adult diseases."
    },
    {
      id: 5,
      name: "Pediatrics",
      icon: <BabyIcon className="h-12 w-12 text-hospital-primary" />,
      description: "Specialized healthcare for infants, children, and adolescents focusing on growth and development."
    },
    {
      id: 6,
      name: "Neurology",
      icon: <Brain className="h-12 w-12 text-hospital-primary" />,
      description: "Diagnosis and treatment of disorders of the nervous system including the brain and spinal cord."
    },
    {
      id: 7,
      name: "Orthopedics",
      icon: <Bone className="h-12 w-12 text-hospital-primary" />,
      description: "Specialized care for musculoskeletal system including bones, joints, ligaments, tendons, and muscles."
    },
    {
      id: 8,
      name: "Ophthalmology",
      icon: <Eye className="h-12 w-12 text-hospital-primary" />,
      description: "Comprehensive eye care services including diagnosis and treatment of eye disorders and diseases."
    },
    {
      id: 9,
      name: "ENT Services",
      icon: <Ear className="h-12 w-12 text-hospital-primary" />,
      description: "Specialized care for ear, nose, and throat conditions by expert otolaryngologists."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-hospital-text mb-6">Our Specialties</h1>
      <p className="text-lg text-gray-600 mb-8">
        Discover the wide range of medical specialties available at our healthcare center to address all your health needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialtiesList.map((specialty) => (
          <div key={specialty.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              {specialty.icon}
            </div>
            <h3 className="text-xl font-bold text-hospital-text mb-2 text-center">{specialty.name}</h3>
            <p className="text-gray-700 text-center">{specialty.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
