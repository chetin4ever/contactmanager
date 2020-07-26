import React from 'react';

import './App.css';
import Contact from './component/Contact';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header branding="Conatct Manager"/>
      <Contact name="john D" email="jhonDoe@gmail.com" phone="555-555-5555" />
      <Contact name="abc" email="abc@gmail.com" phone="555-555-5555"/>    
    </div>
  );
}

export default App;
