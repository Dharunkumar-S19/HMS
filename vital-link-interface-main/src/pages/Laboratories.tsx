
import React from 'react';

const Laboratories = () => {
  const labsList = [
    {
      id: 1,
      name: "Clinical Pathology Lab",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Comprehensive clinical testing and analysis for accurate diagnosis."
    },
    {
      id: 2,
      name: "Radiology Center",
      image: "https://images.unsplash.com/photo-1583912431385-510be1f3c5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Advanced imaging technologies including MRI, CT scan, and X-ray services."
    },
    {
      id: 3,
      name: "Microbiology Lab",
      image: "https://images.unsplash.com/photo-1582560475673-a095be91d228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Specialized in identifying infectious agents and conducting sensitivity tests."
    },
    {
      id: 4,
      name: "Biochemistry Department",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Analysis of body fluids and tissues for biochemical markers and abnormalities."
    },
    {
      id: 5,
      name: "Cardiology Lab",
      image: "https://images.unsplash.com/photo-1576671414121-aa2d60f2d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Specialized in cardiac testing including ECG, stress tests, and echocardiography."
    },
    {
      id: 6,
      name: "Molecular Diagnostics",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Advanced genetic testing and molecular analysis for precision medicine."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-hospital-text mb-6">Our Laboratories</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore our state-of-the-art laboratory facilities equipped with the latest technology for accurate and efficient diagnostic services.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labsList.map((lab) => (
          <div key={lab.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src={lab.image} 
                alt={lab.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-hospital-text mb-2">{lab.name}</h3>
              <p className="text-gray-700">{lab.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laboratories;
