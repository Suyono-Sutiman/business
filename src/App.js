import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Intro from './Component/Intro';
import Vision from './Component/Vision';
import Mision from './Component/Mision';
import Service from './Component/Service';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Intro/>
      <div className='v-m'>
      <Vision/>
      <Mision/>
      </div>
      <Service/>
    </div>
  );
}

export default App;
