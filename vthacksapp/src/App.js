import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ImageUpload} from './pages/ImageUpload';
import {Map} from './pages/Map';
import NavbarBootstrap from './components/NavbarBS';


function App() {
  return (
    <>
    <Router>
      <NavbarBootstrap/>
      <Routes>
        <Route path="/" element ={<ImageUpload/>}/>
        <Route path="/map" element ={<Map/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
