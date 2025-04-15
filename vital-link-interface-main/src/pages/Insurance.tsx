
import React from 'react';

const Insurance = () => {
  const insuranceCompanies = [
    {
      id: 1,
      name: "Blue Cross Blue Shield",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Anthem_Inc_logo.svg/512px-Anthem_Inc_logo.svg.png",
      description: "Comprehensive coverage for individuals and families."
    },
    {
      id: 2,
      name: "UnitedHealthcare",
      logo: "https://www.uhc.com/content/dam/uhcdotcom/en/responsive/UHC-Logo.png",
      description: "Wide network of providers and specialized health plans."
    },
    {
      id: 3,
      name: "Aetna",
      logo: "https://1000logos.net/wp-content/uploads/2021/04/Aetna-logo.png",
      description: "Flexible health insurance options with wellness programs."
    },
    {
      id: 4,
      name: "Cigna",
      logo: "https://1000logos.net/wp-content/uploads/2021/04/Cigna-logo.png",
      description: "Global health service company with personalized care."
    },
    {
      id: 5,
      name: "Humana",
      logo: "https://1000logos.net/wp-content/uploads/2021/04/Humana-logo.png",
      description: "Specializing in Medicare Advantage and prescription drug plans."
    },
    {
      id: 6,
      name: "Kaiser Permanente",
      logo: "https://1000logos.net/wp-content/uploads/2021/04/Kaiser-Permanente-logo.png",
      description: "Integrated managed care with a focus on preventive healthcare."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-hospital-text mb-6">Insurance Information</h1>
      <p className="text-lg text-gray-600 mb-8">
        We accept a wide range of insurance plans to ensure accessible healthcare for all our patients. Below are some of the major insurance providers we work with.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insuranceCompanies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="h-32 flex items-center justify-center mb-4">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-hospital-text mb-2 text-center">{company.name}</h3>
            <p className="text-gray-700 text-center">{company.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-hospital-primary bg-opacity-10 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-hospital-text mb-4">Insurance Verification</h2>
        <p className="text-gray-700 mb-4">
          We recommend verifying your insurance coverage before your appointment. Our patient services team can help you understand your benefits and coverage details.
        </p>
        <p className="text-gray-700 mb-4">
          For insurance verification, please contact our insurance department at:
        </p>
        <div className="font-medium">
          <p className="text-hospital-primary">Phone: (555) 123-4567</p>
          <p className="text-hospital-primary">Email: insurance@healthcarecenter.com</p>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
