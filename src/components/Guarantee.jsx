import React from 'react';

const Guarantee = () => {
  return (
    <section className="py-16 sm:py-20 bg-dark-blue-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-dark-blue-800 to-dark-blue-700 rounded-2xl p-8 sm:p-12 border border-neon-green/30 relative overflow-hidden">
          
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neon-green/20 border-4 border-neon-green">
                <svg className="w-12 h-12 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white text-center mb-4 tracking-wide">
              30-Day Money-Back Guarantee
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 text-center font-rajdhani mb-8 max-w-2xl mx-auto">
              Try AI Prompt Vault risk-free. If it doesn't save you at least 10 hours in the first 30 days, 
              I'll refund every penny—no questions asked.
            </p>

            {/* What We Promise */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-neon-green/20 mb-3">
                  <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-1 font-orbitron text-sm">Full Refund</h3>
                <p className="text-gray-400 text-sm font-rajdhani">100% of your money back</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-neon-green/20 mb-3">
                  <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-1 font-orbitron text-sm">30 Days</h3>
                <p className="text-gray-400 text-sm font-rajdhani">Plenty of time to test</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-neon-green/20 mb-3">
                  <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-1 font-orbitron text-sm">No Questions</h3>
                <p className="text-gray-400 text-sm font-rajdhani">Just email us and it's done</p>
              </div>
            </div>

            {/* Personal Message */}
            <div className="bg-dark-blue-900/50 rounded-lg p-6 text-center">
              <p className="text-gray-300 font-rajdhani italic">
                "I built AI Prompt Vault because I was tired of wasting hours tweaking prompts that never worked. 
                I'm confident these will save you time—<span className="text-neon-green font-bold">but if they don't, you shouldn't pay</span>. 
                That's my promise to you."
              </p>
              <p className="text-neon-purple font-bold mt-3 font-orbitron">— Mike Laffin, Creator</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Guarantee;
