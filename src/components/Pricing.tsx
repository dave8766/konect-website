import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Get started with basic features",
      features: [
        "Profile creation",
        "Coach discovery",
        "Limited messaging",
        "Community access",
        "Basic progress tracking"
      ],
      cta: "Get Started",
      isPopular: false
    },
    {
      name: "Pro",
      price: "$39",
      period: "/month",
      description: "Perfect for dedicated fitness enthusiasts",
      features: [
        "All Basic features",
        "Unlimited coach messaging",
        "Personalized workout plans",
        "Nutrition guidance",
        "Advanced progress analytics",
        "Training video library"
      ],
      cta: "Join Waitlist",
      isPopular: true
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      description: "For those seeking comprehensive coaching",
      features: [
        "All Pro features",
        "1-on-1 video coaching sessions",
        "Priority support",
        "Customized meal plans",
        "Mobility assessments",
        "Sport-specific training",
        "Weekly progress reviews"
      ],
      cta: "Join Waitlist",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mt-4">Choose the plan that's right for your fitness journey</p>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className={`h-full rounded-lg shadow-lg overflow-hidden bg-white ${plan.isPopular ? 'border-2 border-indigo-500 transform scale-105' : 'border border-gray-200'}`}>
                {plan.isPopular && (
                  <div className="bg-indigo-500 text-white text-center py-2 px-4 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="h-5 w-5 text-indigo-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    className={`w-full py-3 font-semibold rounded-md ${
                      plan.isPopular 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition duration-150`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 