import React from 'react';

const SamplePrompt = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-blue-800 relative overflow-hidden" id="sample">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-neon-purple/20 border border-neon-purple/30 rounded-full text-neon-purple text-sm font-semibold mb-4 font-syncopate tracking-wider">
            TRY BEFORE YOU BUY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-extrabold text-white mb-4 tracking-wide">
            See the Difference Yourself
          </h2>
          <p className="text-xl text-gray-400 font-rajdhani max-w-2xl mx-auto">
            Here's an actual prompt from our pack. Compare what most people do vs. our framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* ❌ BEFORE - Bad Prompt */}
          <div className="bg-dark-blue-900 rounded-2xl p-6 border border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">❌</span>
              <h3 className="text-xl font-bold text-red-400 font-orbitron">What Most People Do</h3>
            </div>
            
            <div className="bg-dark-blue-800 rounded-lg p-4 mb-4">
              <p className="text-gray-400 font-mono text-sm">
                "Write me a sales email for my product"
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-300 font-rajdhani">
                <span className="text-red-400 font-bold">Result:</span> Generic, 500-word email that sounds robotic
              </p>
              <p className="text-gray-300 font-rajdhani">
                <span className="text-red-400 font-bold">Time wasted:</span> 20 minutes rewriting it yourself
              </p>
              <p className="text-gray-300 font-rajdhani">
                <span className="text-red-400 font-bold">Problem:</span> No context, no structure, no guidance
              </p>
            </div>
          </div>

          {/* ✅ AFTER - Good Prompt */}
          <div className="bg-dark-blue-900 rounded-2xl p-6 border border-neon-green/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <h3 className="text-xl font-bold text-neon-green font-orbitron">Our Framework</h3>
            </div>
            
            <div className="bg-dark-blue-800 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-neon-green font-mono text-sm whitespace-pre-wrap">
{`Write a sales email for [PRODUCT] targeting [AUDIENCE].

Include:
1. Attention-grabbing subject line (3 options)
2. Personalized opening (reference [PAIN POINT])
3. Product benefits (3 max, specific)
4. Social proof ([TESTIMONIAL TYPE])
5. Clear CTA (one action)

Tone: Professional but conversational
Length: Under 150 words
Goal: Get them to [NEXT STEP]`}
              </pre>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-300 font-rajdhani">
                <span className="text-neon-green font-bold">Result:</span> Ready-to-send email in 60 seconds
              </p>
              <p className="text-gray-300 font-rajdhani">
                <span className="text-neon-green font-bold">Time saved:</span> 19 minutes per email
              </p>
              <p className="text-gray-300 font-rajdhani">
                <span className="text-neon-green font-bold">Why it works:</span> Structured, specific, customizable
              </p>
            </div>
          </div>

        </div>

        {/* Sample Output */}
        <div className="mt-12 bg-dark-blue-900 rounded-2xl p-6 border border-neon-blue/30">
          <h3 className="text-xl font-bold text-white mb-4 font-orbitron flex items-center gap-3">
            <span className="text-2xl">🤖</span>
            Sample AI Output Using Our Framework
          </h3>
          
          <div className="bg-dark-blue-800 rounded-lg p-6 font-rajdhani text-gray-300 space-y-4">
            <div>
              <p className="text-neon-blue font-semibold mb-2">Subject Lines (A/B test these):</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-400">
                <li>Quick question about your [pain point]</li>
                <li>How [company like theirs] solved [problem]</li>
                <li>[Their name], got 2 minutes?</li>
              </ol>
            </div>
            
            <div className="border-t border-dark-blue-700 pt-4">
              <p className="text-gray-300">
                Hi [First name],<br /><br />
                I noticed [specific observation about their company/challenge]. You're not alone—most [audience type] struggle with [pain point].<br /><br />
                [Product name] helps [audience] [benefit 1], [benefit 2], and [benefit 3].<br /><br />
                [Testimonial snippet with specific result]<br /><br />
                Want to see if it would work for you? Reply "yes" and I'll send a 2-minute demo.<br /><br />
                [Your name]
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mt-6 font-rajdhani">
            This is just <span className="text-neon-purple font-bold">one of 50+ prompts</span> you'll get instant access to.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://6611101968303.gumroad.com/l/eruimz"
            className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon-glow-purple font-syncopate tracking-wider"
          >
            Get All 50+ Prompts — $5
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default SamplePrompt;
