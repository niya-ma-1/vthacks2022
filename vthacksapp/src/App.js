import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ImageUpload} from './pages/ImageUpload';
import {Map} from './pages/Map';
import NavbarBootstrap from './components/NavbarBS';


function App() {
  return (
    <>
    <head>
      <title>Shurming</title>
    </head>
    <Router>
      <NavbarBootstrap/>
      <Routes>
        <Route path="/" element ={<ImageUpload/>}/>
        <Route path="/Map" element ={<Map/>}/>
      </Routes>

    </Router>
    </>
  );
}

export default App;
