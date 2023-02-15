import React from 'react';
import './App.css';
import About from './Components/Home/About';
import Counter from './Components/Home/Counter';
import Home from './Components/Home/Home';
import LetsConnect from './Components/Home/LetsConnect';
import Navbar from './Components/Home/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Counter />
    <About />
    <LetsConnect />
    </>
  );
}

export default App;
