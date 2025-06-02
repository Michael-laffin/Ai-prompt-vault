import Header from './components/Header';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import Testimonials from './components/Testimonials';
import EmailSubscription from './components/EmailSubscription';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

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

      <Header aria-label="Site Header" />

      <main id="main-content" className="relative z-10 flex flex-col items-center justify-center w-full overflow-hidden">
        <Hero aria-label="Hero Section" />
        <KeyFeatures aria-label="Key Features Section" />
        <Testimonials aria-label="Testimonials Section" />
        <EmailSubscription aria-label="Email Subscription Section" />
        <HowItWorks aria-label="How It Works Section" />
      </main>

      <Footer aria-label="Site Footer" />
    </div>
  );
};

export default App;