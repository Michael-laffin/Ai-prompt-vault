import React from 'react';

const TestimonialsV2 = () => {
  const testimonials = [
    {
      quote: "I used to spend 45 minutes writing one sales email. With these prompts, I wrote 12 emails in an hour—and they actually converted better.",
      name: "Sarah Chen",
      title: "Founder, SaaS Startup",
      company: "Austin, TX",
      metric: "3x faster email creation",
      avatar: "SC"
    },
    {
      quote: "These aren't generic prompts you find on Twitter. They're battle-tested frameworks that actually work. I've already saved 20+ hours this month.",
      name: "Marcus Johnson",
      title: "Marketing Director",
      company: "Agency, 50 employees",
      metric: "20+ hours saved",
      avatar: "MJ"
    },
    {
      quote: "I was skeptical about paying for prompts, but this paid for itself in the first hour. The YouTube script prompt alone is worth 10x the price.",
      name: "Emily Rodriguez",
      title: "Content Creator",
      company: "150K YouTube subscribers",
      metric: "10x ROI in 1 hour",
      avatar: "ER"
    },
    {
      quote: "Finally, prompts that don't need 15 rounds of tweaking. I copy, paste, get results. Simple as that. My whole team uses them now.",
      name: "David Park",
      title: "Engineering Manager",
      company: "Series B startup",
      metric: "Team-wide adoption",
      avatar: "DP"
    },
    {
      quote: "I'm new to AI and was overwhelmed. These prompts gave me professional results on my first try. Now I look like an AI expert to my clients.",
      name: "Jennifer Walsh",
      title: "Freelance Consultant",
      company: "Business strategy",
      metric: "Day 1 results",
      avatar: "JW"
    },
    {
      quote: "The competitor analysis prompt revealed opportunities I completely missed. I've already closed 2 deals using insights from these prompts.",
      name: "Alex Thompson",
      title: "Sales Rep",
      company: "B2B software",
      metric: "2 deals closed",
      avatar: "AT"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-blue-900 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-extrabold text-white mb-4 tracking-wide">
            What Real Users Say
          </h2>
          <p className="text-xl text-gray-400 font-rajdhani">
            Join 1,247+ professionals who've transformed their AI workflow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-dark-blue-800 rounded-xl p-6 border border-dark-blue-700 hover:border-neon-purple/50 transition-all duration-300 flex flex-col"
            >
              {/* Quote */}
              <p className="text-gray-300 font-rajdhani mb-6 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Metric Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-neon-green/20 text-neon-green text-sm font-semibold font-syncopate tracking-wider">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {testimonial.metric}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold font-orbitron text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-bold font-orbitron text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm font-rajdhani">{testimonial.title}</p>
                  <p className="text-gray-500 text-xs font-rajdhani">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-white font-orbitron">1,247+</p>
            <p className="text-gray-400 font-rajdhani">Happy customers</p>
          </div>
          <div className="h-12 w-px bg-dark-blue-700 hidden sm:block"></div>
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-neon-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-400 font-rajdhani">4.9/5 average rating</p>
          </div>
          <div className="h-12 w-px bg-dark-blue-700 hidden sm:block"></div>
          <div>
            <p className="text-4xl font-bold text-white font-orbitron">50+</p>
            <p className="text-gray-400 font-rajdhani">5-star reviews</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsV2;
