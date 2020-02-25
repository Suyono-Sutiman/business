import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Intro from './Component/Intro';
import Vision from './Component/Vision';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Intro/>
      <Vision/>
    </div>
  );
}

export default App;
