import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center py-16 px-4 sm:py-20 lg:py-24 bg-dark-blue-900 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue-900 via-dark-blue-800 to-dark-blue-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Trust Badge */}
      <div className="relative z-10 mb-6 animate-fade-in">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-dark-blue-700 border border-neon-purple/30 text-neon-purple text-sm font-medium">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Used by 1,000+ professionals
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold text-white leading-tight mb-6 animate-fade-in px-4">
        Stop Writing Prompts.
        <br />
        <span className="text-neon-green">Start Getting Results.</span>
      </h1>

      {/* Subheadline with specific value */}
      <p className="relative z-10 text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl animate-fade-in delay-100 font-rajdhani">
        <span className="text-neon-yellow font-semibold">50+ tested prompts</span> that give you 
        professional-grade AI outputs in seconds, not hours.
      </p>

      {/* Social Proof Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 mb-8 text-gray-400 text-sm animate-fade-in delay-200">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-neon-purple/30 border-2 border-dark-blue-800"></div>
            <div className="w-8 h-8 rounded-full bg-neon-blue/30 border-2 border-dark-blue-800"></div>
            <div className="w-8 h-8 rounded-full bg-neon-green/30 border-2 border-dark-blue-800"></div>
          </div>
          <span>1,247 customers</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-neon-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-1">4.9/5 rating</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>30-day money-back guarantee</span>
        </div>
      </div>

      {/* Primary CTA */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in delay-300">
        <a
          href="https://6611101968303.gumroad.com/l/eruimz"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon-glow-purple font-syncopate tracking-wider overflow-hidden"
          aria-label="Get Instant Access for $5"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>Get Instant Access</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>

      {/* Price & What You Get */}
      <div className="relative z-10 text-center mb-8 animate-fade-in delay-400">
        <div className="inline-flex flex-col items-center gap-2 px-6 py-4 bg-dark-blue-800/50 rounded-lg border border-neon-blue/30">
          <div className="flex items-baseline gap-2">
            <span className="text-gray-400 line-through text-lg">$47</span>
            <span className="text-5xl font-bold text-white font-orbitron">$5</span>
            <span className="text-gray-400 text-lg">one-time</span>
          </div>
          <p className="text-gray-300 text-sm">10 proven prompt frameworks + lifetime updates</p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 animate-fade-in delay-500">
        <div className="flex items-center gap-2 text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-sm">Secure Payment</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="text-sm">Instant Download</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-sm">30-Day Guarantee</span>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-dark-blue-900/95 backdrop-blur-sm border-t border-neon-purple/30 z-50 sm:hidden">
        <a
          href="https://6611101968303.gumroad.com/l/eruimz"
          className="block w-full py-4 text-center text-lg font-bold text-white bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg font-syncopate tracking-wider"
        >
          Get Instant Access — $5
        </a>
      </div>
    </section>
  );
};

export default Hero;
