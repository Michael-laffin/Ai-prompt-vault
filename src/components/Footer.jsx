import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue-800 text-white py-8 px-4 sm:px-6 lg:px-8 relative z-10 shadow-inner shadow-neon-blue/20 animate-fade-in border-t border-neon-purple/30 backdrop-blur-sm" role="contentinfo">
      <noscript>
        <div className="bg-red-800 text-white p-2 text-center text-sm mt-8">
          Full functionality requires JavaScript.
        </div>
      </noscript>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm text-gray-futuristic font-rajdhani">
            &copy; {currentYear} AI Prompt Vault. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-futuristic hover:text-neon-blue transition-all duration-300 transform hover:scale-125 hover:shadow-neon-glow-blue rounded-full p-1 relative group"
            aria-label="Visit us on Twitter"
          >
            <svg className="h-7 w-7 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.107 4.107 0 001.27 5.477A4.072 4.072 0 012 10.77v.058a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.844" />
            </svg>
            <span className="absolute inset-0 rounded-full bg-neon-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse-neon"></span>
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-futuristic hover:text-neon-blue transition-all duration-300 transform hover:scale-125 hover:shadow-neon-glow-blue rounded-full p-1 relative group"
            aria-label="Visit us on Facebook"
          >
            <svg className="h-7 w-7 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
            </svg>
            <span className="absolute inset-0 rounded-full bg-neon-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse-neon animation-delay-200"></span>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-futuristic hover:text-neon-blue transition-all duration-300 transform hover:scale-125 hover:shadow-neon-glow-blue rounded-full p-1 relative group"
            aria-label="Visit us on LinkedIn"
          >
            <svg className="h-7 w-7 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            <span className="absolute inset-0 rounded-full bg-neon-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse-neon animation-delay-400"></span>
          </a>
        </div>

        {/* Privacy Policy Link */}
        <div className="text-center md:text-right">
          <a
            href="/privacy-policy"
            className="text-sm text-gray-futuristic hover:text-neon-blue transition-all duration-300 relative group overflow-hidden font-syncopate tracking-wide"
            aria-label="Read our Privacy Policy"
          >
            <span className="relative z-10">Privacy Policy</span>
            <span className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
