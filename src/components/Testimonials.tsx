import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Konect transformed my approach to fitness. The personalized coaching and integrated platform makes it so easy to stay on track.",
      name: "Sarah Johnson",
      title: "Fitness Enthusiast",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "As a coach, Konect allows me to provide comprehensive training plans to my clients while tracking their progress all in one place.",
      name: "Michael Rodriguez",
      title: "Professional Trainer",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      quote: "The ability to communicate directly with my coach whenever I need guidance has been game-changing for my nutrition plan.",
      name: "Emily Chen",
      title: "Marathon Runner",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800">What People Are Saying</h2>
          <p className="text-xl text-gray-600 mt-4">Hear from our community of coaches and clients</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                <div className="flex-grow">
                  <svg className="h-8 w-8 text-indigo-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-4">
                  <img 
                    className="h-12 w-12 rounded-full mr-4"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 