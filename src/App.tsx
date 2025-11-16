import React from 'react';
import Navbar from './components/Navbar';
import CompanyGrid from './components/CompneyGrid';
import Hero from './components/Hero';
import About from './components/About';
import WorkWithMe from './components/WorkWithMe';
import Footer from './components/Footer';
import CTA from './components/CTAButton';
import StickyButton from './components/StickyButton';
import SkillPills from './components/SkillPill';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CompanyGrid/>
<CTA />
        <WorkWithMe />
        
        <SkillPills/>
        <CTA />
        <About />
        
      </main>
      <Footer />
      <StickyButton />
    </div>
  );
};

export default App;
