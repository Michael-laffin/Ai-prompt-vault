import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-dark-blue-900 relative overflow-hidden border-t border-neon-blue/30" aria-labelledby="testimonials-heading">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10 animate-bounce-slow">
        <div className="w-32 h-32 bg-neon-pink rounded-full mix-blend-multiply filter blur-xl absolute top-1/3 left-1/3 animate-float animation-delay-500"></div>
        <div className="w-32 h-32 bg-neon-red rounded-full mix-blend-multiply filter blur-xl absolute bottom-1/3 right-1/3 animate-float animation-delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 id="testimonials-heading" className="text-3xl font-orbitron font-extrabold text-white text-center mb-10 sm:text-4xl lg:text-5xl animate-fade-in animate-text-glow tracking-wide">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Testimonial 1 */}
          <div className="relative bg-dark-blue-800 p-6 rounded-lg shadow-lg shadow-neon-purple/30 flex flex-col justify-between border border-dark-blue-700 hover:border-neon-purple transition-all duration-500 transform hover:scale-105 animate-fade-in group overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 via-transparent to-neon-pink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg text-gray-futuristic italic mb-4 relative z-10 font-rajdhani">
              “Saved me 10 hours of trial-and-error!”
            </p>
            <p className="text-base font-semibold text-neon-blue text-right relative z-10 group-hover:text-neon-yellow transition-colors duration-300 font-syncopate">
              – AI Dev Team Lead
            </p>
            <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-neon-purple transition-all duration-300 animate-border-pulse"></span>
          </div>

          {/* Testimonial 2 */}
          <div className="relative bg-dark-blue-800 p-6 rounded-lg shadow-lg shadow-neon-blue/30 flex flex-col justify-between border border-dark-blue-700 hover:border-neon-blue transition-all duration-500 transform hover:scale-105 animate-fade-in delay-200 group overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 via-transparent to-neon-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg text-gray-futuristic italic mb-4 relative z-10 font-rajdhani">
              “Finally, a prompt pack I don’t have to tweak 20 times.”
            </p>
            <p className="text-base font-semibold text-neon-purple text-right relative z-10 group-hover:text-neon-pink transition-colors duration-300 font-syncopate">
              – Freelance Writer
            </p>
            <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-neon-blue transition-all duration-300 animate-border-pulse animation-delay-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;