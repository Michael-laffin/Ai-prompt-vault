import React from 'react';

const KeyFeatures = () => {
  const features = [
    {
      title: 'Structured Meta-Directives',
      description: 'Define precise, reusable instructions for AI models, ensuring consistent and high-quality outputs across diverse tasks.',
      ariaLabel: 'Structured Meta-Directives feature description'
    },
    {
      title: 'Orchestrator Workflow',
      description: 'Automate complex AI interactions with a seamless workflow, guiding prompts through multiple stages for optimal results.',
      ariaLabel: 'Orchestrator Workflow feature description'
    },
    {
      title: 'Self-Evaluation Loop',
      description: 'Enable AI models to critically assess their own outputs, refining responses through iterative feedback for continuous improvement.',
      ariaLabel: 'Self-Evaluation Loop feature description'
    },
  ];

  return (
    <section className="py-16 bg-dark-blue-900 sm:py-20 lg:py-24 relative overflow-hidden border-t border-neon-purple/30" aria-labelledby="key-features-heading">
      {/* Subtle background animation */}
      <div className="absolute inset-0 z-0 opacity-20 animate-spin-slow">
        <div className="w-48 h-48 bg-neon-green rounded-full mix-blend-multiply filter blur-xl absolute top-1/4 left-1/4 animate-float"></div>
        <div className="w-48 h-48 bg-neon-yellow rounded-full mix-blend-multiply filter blur-xl absolute bottom-1/4 right-1/4 animate-float animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 id="key-features-heading" className="text-3xl font-orbitron font-extrabold text-white text-center mb-12 sm:text-4xl lg:text-5xl animate-fade-in animate-text-glow tracking-wide">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-dark-blue-800 rounded-lg shadow-lg shadow-neon-blue/20 p-6 flex flex-col items-center text-center transition-all duration-500 transform hover:scale-105 hover:shadow-neon-glow-blue border border-dark-blue-700 hover:border-neon-blue animate-fade-in group overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100 + 600}ms` }}
              aria-label={feature.ariaLabel}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 via-transparent to-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="mt-4 text-xl font-orbitron font-semibold text-neon-blue sm:text-2xl relative z-10 group-hover:text-neon-pink transition-colors duration-300 tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-futuristic sm:text-lg relative z-10 font-rajdhani">
                {feature.description}
              </p>
              {/* Decorative border on hover */}
              <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-neon-green transition-all duration-300 animate-border-pulse"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;