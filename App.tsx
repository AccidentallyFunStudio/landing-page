import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import ValueProp from './components/Sections/ValueProp';
import Services from './components/Sections/Services';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;