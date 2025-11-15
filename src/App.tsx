import React from 'react';
import Navbar from './components/Navbar';
import CompanyGrid from './components/CompneyGrid';
import Hero from './components/Hero';
import About from './components/About';
import WorkWithMe from './components/WorkWithMe';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CompanyGrid/>
        <WorkWithMe />
        <About />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
