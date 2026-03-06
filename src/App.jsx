export const dynamic = 'force-static';
import React, { lazy, Suspense } from 'react';

// Load all components
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/HeroV2'));
const SamplePrompt = lazy(() => import('./components/SamplePrompt'));
const WhatYouGet = lazy(() => import('./components/WhatYouGet'));
const Testimonials = lazy(() => import('./components/TestimonialsV2'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FAQ = lazy(() => import('./components/FAQ'));
const Guarantee = lazy(() => import('./components/Guarantee'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className="min-h-screen bg-dark-blue-900 text-white font-rajdhani antialiased relative overflow-hidden">
      {/* Futuristic Grid Background with enhanced effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-fade-in"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-blue-900/50 to-dark-blue-900 opacity-80"></div>
        {/* Additional subtle glow elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-neon"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-neon animation-delay-1000"></div>
      </div>
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>

      <Suspense fallback={<div>Loading Header...</div>}>
        <Header aria-label="Site Header" />
      </Suspense>

      <main id="main-content" className="relative z-10 flex flex-col items-center justify-center w-full overflow-hidden">
        <Suspense fallback={<div>Loading Main Content...</div>}>
          {/* 1. HERO - Hook with clear value proposition */}
          <Hero aria-label="Hero Section" />
          
          {/* 2. SAMPLE PROMPT - Show the difference (try before you buy) */}
          <SamplePrompt aria-label="Sample Prompt Section" />
          
          {/* 3. WHAT YOU GET - Detailed breakdown of what's included */}
          <WhatYouGet aria-label="What You Get Section" />
          
          {/* 4. TESTIMONIALS - Social proof */}
          <Testimonials aria-label="Testimonials Section" />
          
          {/* 5. PRICING - 3 tiers with comparison */}
          <PricingSection aria-label="Pricing Section" />
          
          {/* 6. FAQ - Handle objections */}
          <FAQ aria-label="FAQ Section" />
          
          {/* 7. GUARANTEE - Risk reversal */}
          <Guarantee aria-label="Guarantee Section" />
          
          {/* 8. FINAL CTA - Urgency + last chance */}
          <FinalCTA aria-label="Final CTA Section" />
        </Suspense>
      </main>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer aria-label="Site Footer" />
      </Suspense>
    </div>
  );
};

export default App;
