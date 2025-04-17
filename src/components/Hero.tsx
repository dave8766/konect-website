import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: '95vh' }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover bg-gradient-to-r from-army-primary to-army-secondary">
        <span className="w-full h-full absolute opacity-30 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold leading-tight mt-0 mb-2">
                Connect with Elite Coaches
              </h1>
              <p className="text-xl leading-normal mt-4 mb-8">
                Your all-in-one fitness hub for coaches and clients. Find mentors for fitness, nutrition, mobility, and sport-specific training.
              </p>
              <div className="mt-8">
                <button className="bg-army-light text-army-primary font-bold text-lg px-8 py-3 rounded-lg mr-4 hover:bg-army-linen transition duration-300">
                  Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-4 ml-auto mr-auto mt-12 lg:mt-0">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-army-dark">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-army-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h6 className="text-xl text-white font-semibold">Join Our Waitlist</h6>
                <form className="mt-6">
                  <div className="mb-4">
                    <input
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="bg-army-highlight text-white active:bg-army-gold text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="button"
                    >
                      Join Now
                    </button>
                  </div>
                </form>
                <p className="mt-4 text-sm text-army-light text-center">
                  Be the first to know when we launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 