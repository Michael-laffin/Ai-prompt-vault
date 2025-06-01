import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Purchase on Gumroad',
      description: 'Securely buy your AI Prompt Pack through Gumroad, our trusted e-commerce platform.',
      ariaLabel: 'Step 1: Purchase on Gumroad'
    },
    {
      id: 2,
      title: 'Instant Download of PDF',
      description: 'Receive an immediate download link to your comprehensive PDF guide after purchase.',
      ariaLabel: 'Step 2: Instant Download of PDF'
    },
    {
      id: 3,
      title: 'Follow Instructions',
      description: 'Easily follow the clear, step-by-step instructions within the PDF to implement your prompts.',
      ariaLabel: 'Step 3: Follow Instructions'
    },
    {
      id: 4,
      title: 'Get Consistent AI Results',
      description: 'Achieve reliable and high-quality AI outputs every time with our expertly crafted prompts.',
      ariaLabel: 'Step 4: Get Consistent AI Results'
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-dark-blue-900 sm:py-20 lg:py-24 relative overflow-hidden border-t border-neon-green/30" aria-labelledby="how-it-works-heading">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10 animate-spin-slow animation-delay-2000">
        <div className="w-40 h-40 bg-neon-orange rounded-full mix-blend-multiply filter blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 id="how-it-works-heading" className="text-3xl font-orbitron font-extrabold text-white text-center mb-12 sm:text-4xl lg:text-5xl animate-fade-in animate-text-glow tracking-wide" aria-label="How It Works Section">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center p-6 bg-dark-blue-800 rounded-lg shadow-lg shadow-neon-green/20 transition-all duration-500 transform hover:scale-105 hover:shadow-neon-glow-green border border-dark-blue-700 hover:border-neon-green animate-fade-in group overflow-hidden cursor-pointer"
              style={{ animationDelay: `${step.id * 100 + 400}ms` }}
              aria-label={step.ariaLabel}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/30 via-transparent to-neon-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-neon-purple text-white font-orbitron font-bold text-2xl mb-4 shadow-md shadow-neon-purple/40 animate-pulse-neon group-hover:bg-neon-pink transition-colors duration-300"
                aria-hidden="true"
              >
                {step.id}
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-neon-green mb-2 relative z-10 group-hover:text-neon-yellow transition-colors duration-300 tracking-wide" aria-labelledby={`step-${step.id}-title`}>
                <span id={`step-${step.id}-title`}>{step.title}</span>
              </h3>
              <p className="text-gray-futuristic relative z-10 font-rajdhani" aria-describedby={`step-${step.id}-description`}>
                <span id={`step-${step.id}-description`}>{step.description}</span>
              </p>
              {/* Decorative border on hover */}
              <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-neon-orange transition-all duration-300 animate-border-pulse animation-delay-500"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;