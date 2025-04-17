import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Stay hard! Konect pushes me to be uncommon amongst uncommon people. Their platform doesn't let me make excuses and keeps me accountable.",
      name: "David Goggins",
      title: "Ultra-Marathon Runner & Former Navy SEAL",
      avatar: "/david-goggins.jpg",
      featured: true
    },
    {
      quote: "Konect has been a game-changer for my training. The platform helps me maintain my regimen even with my intense Olympic preparation schedule.",
      name: "Conor Ferguson",
      title: "Irish Olympic Swimmer",
      avatar: "/conor-ferguson.jpg",
      featured: false
    },
    {
      quote: "As an Olympic coach, Konect allows me to monitor my athletes' progress in real-time and adjust their training plans instantly, no matter where we are competing in the world.",
      name: "Ian Thompson",
      title: "Olympic Swimming Coach",
      avatar: "/Ian.jpeg",
      featured: false
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-army-linen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-army-dark">What People Are Saying</h2>
          <p className="text-xl text-army-dark mt-4">Hear from our community of coaches and clients</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className={`bg-white rounded-lg shadow-lg p-8 h-full flex flex-col ${testimonial.featured ? 'border-2 border-army-primary' : ''}`}>
                <div className="flex-grow">
                  <svg className="h-8 w-8 text-army-secondary mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-army-dark mb-6 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-4">
                  <img 
                    className={`rounded-full mr-4 object-cover ${testimonial.featured ? 'h-16 w-16' : 'h-12 w-12'}`}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <p className={`font-bold text-army-dark ${testimonial.featured ? 'text-lg' : ''}`}>{testimonial.name}</p>
                    <p className="text-army-secondary text-sm">{testimonial.title}</p>
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