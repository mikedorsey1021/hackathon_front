import React from 'react';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { ContactForm } from './components/form/ContactForm';
import { HomePage } from './screens/HomePage';

function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <HomePage/>

    </BrowserRouter>
  );
}

export default App;
