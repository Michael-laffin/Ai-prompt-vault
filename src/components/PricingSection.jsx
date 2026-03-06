import React from 'react';

const PricingSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-blue-900 relative overflow-hidden" id="pricing">
      {/* Background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-extrabold text-white mb-4 tracking-wide">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 font-rajdhani">
            Choose the option that fits your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Starter Pack */}
          <div className="relative bg-dark-blue-800 rounded-2xl p-8 border border-dark-blue-700 hover:border-neon-blue/50 transition-all duration-300">
            <h3 className="text-xl font-orbitron font-bold text-white mb-2">Starter Pack</h3>
            <p className="text-gray-400 mb-6 font-rajdhani">Perfect for beginners</p>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white font-orbitron">$5</span>
                <span className="text-gray-400">one-time</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                '10 battle-tested prompts',
                'Works with ChatGPT, Claude, Gemini',
                'Copy-paste ready',
                'PDF instant download',
                'Basic email support'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 font-rajdhani">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://6611101968303.gumroad.com/l/eruimz"
              className="block w-full py-3 text-center text-white font-bold bg-dark-blue-700 hover:bg-dark-blue-600 border border-neon-blue/30 rounded-lg transition-all duration-300 font-syncopate tracking-wider"
            >
              Get Started
            </a>
          </div>

          {/* Pro Pack - FEATURED */}
          <div className="relative bg-gradient-to-b from-neon-purple/10 to-dark-blue-800 rounded-2xl p-8 border-2 border-neon-purple shadow-lg shadow-neon-purple/20 transform md:-translate-y-4">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-neon-purple text-white text-sm font-bold px-4 py-1 rounded-full font-syncopate tracking-wider">
                MOST POPULAR
              </span>
            </div>

            <h3 className="text-xl font-orbitron font-bold text-white mb-2 mt-2">Pro Pack</h3>
            <p className="text-gray-400 mb-6 font-rajdhani">For power users</p>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400 line-through text-lg">$97</span>
                <span className="text-5xl font-bold text-white font-orbitron">$20</span>
                <span className="text-gray-400">one-time</span>
              </div>
              <p className="text-neon-green text-sm mt-1">Save 79% — Limited time</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Everything in Starter',
                'PLUS: 50 advanced prompts',
                'Prompt engineering tips',
                'Advanced frameworks',
                'Priority email support',
                'Lifetime updates'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 font-rajdhani">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://6611101968303.gumroad.com/l/qsgqdi"
              className="block w-full py-4 text-center text-white font-bold bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon-glow-purple font-syncopate tracking-wider"
            >
              Get Pro Pack
            </a>
          </div>

          {/* Business Pack */}
          <div className="relative bg-dark-blue-800 rounded-2xl p-8 border border-dark-blue-700 hover:border-neon-yellow/50 transition-all duration-300">
            <h3 className="text-xl font-orbitron font-bold text-white mb-2">Business Pack</h3>
            <p className="text-gray-400 mb-6 font-rajdhani">For teams & agencies</p>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400 line-through text-lg">$247</span>
                <span className="text-5xl font-bold text-white font-orbitron">$47</span>
                <span className="text-gray-400">one-time</span>
              </div>
              <p className="text-neon-yellow text-sm mt-1">Best value — 81% off</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Everything in Pro Pack',
                'PLUS: 100 business prompts',
                'Team license (5 users)',
                'Sales & marketing prompts',
                'Operations automation',
                'Custom request (1 prompt)',
                '1-on-1 setup call (30 min)'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neon-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 font-rajdhani">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://6611101968303.gumroad.com/l/oqowny"
              className="block w-full py-3 text-center text-white font-bold bg-dark-blue-700 hover:bg-dark-blue-600 border border-neon-yellow/30 rounded-lg transition-all duration-300 font-syncopate tracking-wider"
            >
              Get Business Pack
            </a>
          </div>

        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-rajdhani">
            <span className="text-neon-green">✓</span> 30-day money-back guarantee
            <span className="mx-4">•</span>
            <span className="text-neon-green">✓</span> Instant download
            <span className="mx-4">•</span>
            <span className="text-neon-green">✓</span> Secure payment via Gumroad
          </p>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
