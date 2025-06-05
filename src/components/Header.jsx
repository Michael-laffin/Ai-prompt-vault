import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark-blue-800 text-white p-4 shadow-lg shadow-neon-purple/30 relative z-50 animate-fade-in border-b border-neon-blue/40 backdrop-blur-sm" role="banner">
      <noscript>
        <div className="bg-red-800 text-white p-2 text-center text-sm">
          Please enable JavaScript or use the fallback link in the main section.
        </div>
      </noscript>
      <div className="container mx-auto flex justify-center items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-3xl font-orbitron font-bold text-neon-purple hover:text-neon-blue transition-all duration-300 transform hover:scale-105 animate-text-glow tracking-wider" aria-label="AI Prompt Vault Home">
            AI Prompt Vault
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;