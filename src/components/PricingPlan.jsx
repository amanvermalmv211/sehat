import React from 'react';

const pricingData = [
  {
    plan: 'Hospital License',
    type: 'B2B Subscription',
    price: '₹15,000–25,000/month',
    ideal: 'Clinics, Hospitals, PHCs',
  },
  {
    plan: 'API Access',
    type: 'Usage-based',
    price: '₹2/user/month',
    ideal: 'Health apps, telemedicine, labs',
  },
  {
    plan: 'Premium Patient Plan',
    type: 'B2C Subscription',
    price: '₹99/month',
    ideal: 'Chronic users, rural patients',
  },
  {
    plan: 'Research/Grants',
    type: 'Project-based',
    price: '₹5–10 lakhs/project',
    ideal: 'NGOs, Universities, Govt bodies',
  },
];

const PricingPlans = () => {
  return (
    <div className="min-h-screen px-4 py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Our Pricing Plans</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs—whether you're a hospital, health app, patient, or researcher.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {pricingData.map((item, idx) => (
            <div key={idx} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md hover:scale-105 transition-transform text-left text-gray-300">
              <h3 className="text-2xl font-semibold text-white mb-2">{item.plan}</h3>
              <p className="font-medium mb-1">Type: <span>{item.type}</span></p>
              <p className="font-medium mb-1">Price: <span>{item.price}</span></p>
              <p className="font-medium">Ideal For: <span>{item.ideal}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;