import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <>
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<ImageUpload />} />
        <Route path="/test" element={<test />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
