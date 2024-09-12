import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import BMICalculator from './components/BMICalculator'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallary from './components/Gallary'
import Hero from './components/Hero'
import WorkoutSessions from './components/WorkoutSessions'
import Pricing from './components/Pricing'

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Hero />
        <WorkoutSessions />
        <Gallary />
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  );
};

export default App