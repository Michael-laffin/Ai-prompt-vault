import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What AI tools do these prompts work with?",
      a: "All prompts work with ChatGPT (GPT-4, GPT-3.5), Claude (all versions), Gemini, and other major AI assistants. They're designed to be platform-agnostic and work across different AI models."
    },
    {
      q: "How do I receive the prompts after purchase?",
      a: "Immediately after purchase, you'll get a download link on the confirmation page and via email. The prompts come in a professionally formatted PDF that you can save, print, or access from any device."
    },
    {
      q: "What if the prompts don't work for my use case?",
      a: "No problem! We offer a 30-day money-back guarantee. If you're not satisfied for any reason, just email us and we'll refund you immediately—no questions asked."
    },
    {
      q: "Are these prompts really worth $5? Why so cheap?",
      a: "Great question! We believe in making AI accessible to everyone. At $5, it's less than a coffee but can save you hours of trial and error. Plus, the low price allows us to help more people. The value you get far exceeds the cost."
    },
    {
      q: "Can I share the prompts with my team?",
      a: "The Starter and Pro packs are for personal use only. For teams, we recommend the Business Pack which includes a 5-user license. Need more licenses? Contact us for custom pricing."
    },
    {
      q: "Will I get updates if you add more prompts?",
      a: "Yes! Pro and Business pack buyers get lifetime updates. When we add new prompts or improve existing ones, you'll receive an email with the updated PDF at no extra cost."
    },
    {
      q: "I'm new to AI. Are these too advanced for me?",
      a: "Not at all! The Starter Pack is specifically designed for beginners. Each prompt includes clear instructions on how to use it and what to expect. You'll be getting professional results within minutes of your first use."
    },
    {
      q: "What makes these prompts different from free ones online?",
      a: "Free prompts are usually hit-or-miss. Our prompts have been tested across hundreds of real-world scenarios. They use proven frameworks that consistently produce high-quality outputs. You're paying for reliability and time savings, not just the prompts themselves."
    },
    {
      q: "How quickly will I see results?",
      a: "Immediately. The prompts are designed to work on your first try. Most users report getting their best-ever AI outputs within the first 5 minutes of using our prompts."
    },
    {
      q: "Is my payment information secure?",
      a: "Absolutely. We use Gumroad for payments, which is trusted by millions of creators worldwide. We never see or store your credit card information. All transactions are encrypted and secure."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-blue-900 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-extrabold text-white mb-4 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 font-rajdhani">
            Everything you need to know before you buy
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-blue-800 rounded-lg border border-dark-blue-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-dark-blue-700/50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-semibold font-rajdhani text-lg pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-6 h-6 text-neon-purple flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 font-rajdhani leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-rajdhani mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:support@aipromptvault.dev"
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact Support</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
