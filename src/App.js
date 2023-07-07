import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage'
import Calculator from './pages/Calculator'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/calculator" element={<Calculator />} />
    
    </Routes>
    </>
  );
}

export default App;
