import React from 'react';
import './App.css';

function App() {
  return (
    <div className="hero-bg">
      <nav className="nav-minimal">
        <a href="#home">HOME</a>
        <a href="#apparel">APPAREL</a>
        <a href="#accessories">ACCESSORIES</a>
        <a href="#lifestyle">LIFESTYLE</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <main className="hero-content">
        <h1 className="brand-title">BLACK RABBIT</h1>
        <h2 className="brand-tagline">Defy Ordinary. Own Success.</h2>
        <p className="brand-desc">
          The luxury minimalist lifestyle and e-commerce destination for men who demand more. Launching soon.
        </p>
        <a href="#notify" className="cta-btn">BECOME A MEMBER</a>
      </main>
    </div>
  );
}

export default App;
