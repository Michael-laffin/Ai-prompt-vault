import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-dark-blue-900 overflow-hidden border-b border-neon-blue/30 animate-fade-in">
      <noscript>
        <div className="bg-red-800 text-white p-4 text-center mb-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">JavaScript Disabled</h2>
          <p className="text-lg mb-4">Please enable JavaScript to access the full experience. Alternatively, you can purchase the $5 AI Prompt Pack here:</p>
          <a
            href="https://6611101968303.gumroad.com/l/eruimz"
            className="inline-block bg-neon-purple text-white font-bold py-2 px-4 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
            aria-label="Purchase AI Prompt Pack"
          >
            Get the $5 AI Prompt Pack
          </a>
        </div>
      </noscript>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10 animate-background-shine"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue-900 via-dark-blue-800 to-dark-blue-900 opacity-70 animate-gradient-shift"></div>
      </div>

      <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-extrabold text-white leading-tight mb-4 animate-text-glow tracking-wide" aria-label="Stop Guessing—Use the $5 AI Prompt Pack That Works Every Time.">
        Stop Guessing—Use the <span className="text-neon-green">$5</span> AI Prompt Pack That Works Every Time.
      </h1>
      <p className="relative z-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-futuristic mb-8 max-w-3xl animate-fade-in delay-200 font-rajdhani" aria-label="Transform vague ideas into laser-focused instructions. Instant download.">
        Transform vague ideas into laser-focused instructions. <span className="text-neon-yellow">Instant download.</span>
      </p>
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in delay-400">
        <a
          href="https://6611101968303.gumroad.com/l/eruimz"
          className="inline-block bg-neon-purple text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-all duration-500 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-neon-glow-purple focus:outline-none focus:ring-2 focus:ring-neon-purple border border-transparent hover:border-neon-pink relative overflow-hidden group font-syncopate tracking-wider"
          aria-label="Buy Now on Gumroad"
          role="button"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative z-10">Buy Now on Gumroad</span>
          <span className="absolute top-0 left-0 w-full h-full border-2 border-neon-purple rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-pulse"></span>
        </a>
        <a
          href="https://aipromptvault.lemonsqueezy.com/buy/7bcdeccf-0137-41a9-851f-56dd309a8e42"
          className="inline-block bg-dark-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-all duration-500 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-neon-glow-blue focus:outline-none focus:ring-2 focus:ring-neon-blue border border-transparent hover:border-neon-green relative overflow-hidden group font-syncopate tracking-wider"
          aria-label="Buy Now on Lemon Squeezy"
          role="button"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative z-10">Buy Now on Lemon Squeezy</span>
          <span className="absolute top-0 left-0 w-full h-full border-2 border-neon-blue rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-pulse animation-delay-500"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;