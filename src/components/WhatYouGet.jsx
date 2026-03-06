import React from 'react';

const WhatYouGet = () => {
  const categories = [
    {
      title: "Business & Productivity",
      count: 15,
      icon: "💼",
      items: ["Sales emails", "Marketing campaigns", "Business plans", "Meeting agendas", "Financial analysis"]
    },
    {
      title: "Content Creation",
      count: 10,
      icon: "✍️",
      items: ["Blog posts", "YouTube scripts", "Social media", "Email sequences", "Headlines"]
    },
    {
      title: "Research & Analysis",
      count: 10,
      icon: "🔍",
      items: ["Market research", "Competitor analysis", "Data interpretation", "Customer insights", "Trend analysis"]
    },
    {
      title: "Coding & Development",
      count: 5,
      icon: "💻",
      items: ["Code review", "Bug fixes", "API documentation", "Technical docs", "Debug assistance"]
    },
    {
      title: "AI & Automation",
      count: 5,
      icon: "🤖",
      items: ["Prompt chains", "Workflows", "AI agents", "RAG systems", "Safety checks"]
    },
    {
      title: "Copywriting & Sales",
      count: 5,
      icon: "📢",
      items: ["Landing pages", "Headlines", "Value propositions", "A/B tests", "Objection handlers"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-blue-800 relative overflow-hidden" id="whats-inside">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-neon-blue/20 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-semibold mb-4 font-syncopate tracking-wider">
            WHAT'S INSIDE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-extrabold text-white mb-4 tracking-wide">
            Exactly What You'll Get
          </h2>
          <p className="text-xl text-gray-400 font-rajdhani max-w-2xl mx-auto">
            50 professionally crafted prompts across 6 categories—ready to copy, paste, and get results
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-dark-blue-900 rounded-xl p-6 border border-dark-blue-700 hover:border-neon-purple/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h3 className="text-white font-bold font-orbitron">{category.title}</h3>
                  <p className="text-neon-purple text-sm font-rajdhani">{category.count} prompts</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400 font-rajdhani">
                    <svg className="w-4 h-4 text-neon-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-2xl p-8 border border-neon-purple/30">
          <h3 className="text-2xl font-orbitron font-bold text-white text-center mb-6">
            🎁 BONUS: Included Free
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-neon-purple/20 mb-3">
                <svg className="w-7 h-7 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-1 font-orbitron text-sm">Prompt Engineering Guide</h4>
              <p className="text-gray-400 text-sm font-rajdhani">Learn the principles behind great prompts</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-neon-blue/20 mb-3">
                <svg className="w-7 h-7 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-1 font-orbitron text-sm">Lifetime Updates</h4>
              <p className="text-gray-400 text-sm font-rajdhani">New prompts added monthly, yours free</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-neon-green/20 mb-3">
                <svg className="w-7 h-7 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-1 font-orbitron text-sm">Priority Support</h4>
              <p className="text-gray-400 text-sm font-rajdhani">Email help within 24 hours</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatYouGet;
