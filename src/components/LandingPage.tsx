import React, { useState } from 'react';

interface LandingPageProps {
  onContinue: (isAthlete: boolean) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onContinue }) => {
  const [selected, setSelected] = useState<'coach' | 'athlete' | null>(null);

  const handleContinue = () => {
    if (selected === 'athlete') {
      onContinue(true);
    } else if (selected === 'coach') {
      // Show message that coach access is not available yet
      alert('Coach access is coming soon! Please check back later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-army-linen">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/konect-logo.jpeg" 
            alt="Konect Logo" 
            className="h-20 w-auto"
          />
        </div>
        
        <h1 className="text-2xl font-bold text-army-dark text-center mb-6">
          Welcome to Konect
        </h1>
        
        <p className="text-army-dark text-center mb-8">
          Please select how you would like to continue:
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            className={`p-4 rounded-lg border-2 transition-all ${
              selected === 'coach' 
                ? 'border-army-primary bg-army-light text-army-dark' 
                : 'border-gray-200 hover:border-army-secondary text-gray-700'
            }`}
            onClick={() => setSelected('coach')}
          >
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="font-semibold">Coach</span>
            </div>
          </button>
          
          <button
            className={`p-4 rounded-lg border-2 transition-all ${
              selected === 'athlete' 
                ? 'border-army-primary bg-army-light text-army-dark' 
                : 'border-gray-200 hover:border-army-secondary text-gray-700'
            }`}
            onClick={() => setSelected('athlete')}
          >
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-semibold">Athlete</span>
            </div>
          </button>
        </div>
        
        <button 
          className={`w-full py-3 rounded-lg font-semibold transition-all ${
            selected 
              ? 'bg-army-primary text-white hover:bg-army-secondary' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          onClick={handleContinue}
          disabled={!selected}
        >
          Continue
        </button>
      </div>

      <div className="mt-8 text-army-dark text-center">
        <p>Connect with elite coaches for personalized training.</p>
        <p>Your all-in-one fitness hub.</p>
      </div>
    </div>
  );
};

export default LandingPage; 