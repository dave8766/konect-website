import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up and create your profile with your fitness goals, experience level, and preferences.'
    },
    {
      number: '02',
      title: 'Find Your Coach',
      description: 'Browse our network of expert coaches and find the perfect match for your specific needs.'
    },
    {
      number: '03',
      title: 'Get Personalized Plans',
      description: 'Receive custom workout and nutrition plans designed specifically for your goals.'
    },
    {
      number: '04',
      title: 'Track Your Progress',
      description: 'Monitor your progress, communicate with your coach, and adjust your plans as needed.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-army-dark">How Konect Works</h2>
          <p className="text-xl text-army-dark mt-4">Simple steps to transform your fitness journey</p>
        </div>

        <div className="flex flex-wrap">
          {steps.map((step, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-army-primary opacity-10 rounded-lg"></div>
                <div className="relative p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-army-primary rounded-full text-white text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-army-dark">{step.title}</h3>
                  <p className="text-army-dark">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-army-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-army-highlight text-white font-bold px-8 py-3 rounded-lg hover:bg-army-gold transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 