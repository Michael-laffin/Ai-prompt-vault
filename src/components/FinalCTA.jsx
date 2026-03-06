import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-dark-blue-900 to-dark-blue-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgency Banner */}
        <div className="inline-flex items-center px-4 py-2 bg-neon-red/20 border border-neon-red/30 rounded-full text-neon-red text-sm font-semibold mb-8 font-syncopate tracking-wider animate-pulse">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
          PRICE INCREASING SOON — LOCK IN $5 NOW
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-extrabold text-white mb-6 tracking-wide leading-tight">
          Ready to Stop Wasting Time
          <br />
          <span className="text-neon-green">on Bad AI Prompts?</span>
        </h2>

        {/* Value Stack */}
        <div className="mb-8 text-left max-w-xl mx-auto">
          <p className="text-xl text-gray-300 font-rajdhani mb-4 text-center">
            For just $5, you'll get:
          </p>
          <ul className="space-y-2">
            {[
              "50+ battle-tested prompts (not generic ones)",
              "Works with ChatGPT, Claude, Gemini, and more",
              "Copy-paste ready in 60 seconds",
              "Instant PDF download",
              "Lifetime updates (new prompts monthly)",
              "30-day money-back guarantee",
              "Priority email support"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-neon-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 font-rajdhani text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Box */}
        <div className="bg-dark-blue-800 rounded-2xl p-8 border border-neon-purple/30 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-gray-400 line-through text-2xl">$47</span>
            <span className="text-6xl font-bold text-white font-orbitron">$5</span>
          </div>
          <p className="text-neon-green font-semibold mb-4 font-syncopate tracking-wider">
            89% OFF — LIMITED TIME
          </p>
          <a
            href="https://6611101968303.gumroad.com/l/eruimz"
            className="block w-full py-5 text-center text-xl font-bold text-white bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon-glow-purple font-syncopate tracking-wider"
          >
            GET INSTANT ACCESS NOW
          </a>
          <p className="text-gray-400 text-sm mt-4 font-rajdhani">
            🔒 Secure payment via Gumroad • Instant download
          </p>
        </div>

        {/* Risk Reversal */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 font-rajdhani">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>30-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Instant download</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secure checkout</span>
          </div>
        </div>

        {/* P.S. */}
        <p className="mt-8 text-gray-500 font-rajdhani text-sm italic max-w-xl mx-auto">
          P.S. Remember: If these prompts don't save you at least 10 hours in the next 30 days, 
          email me and I'll refund every penny. You have nothing to lose.
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;
