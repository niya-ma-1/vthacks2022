import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ImageUpload} from './pages/ImageUpload';
import Map from './pages/Map';
import Sustainability from './pages/Sustainability';
import Recipe from './pages/Recipe';
import Plant from './pages/Plant';
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
        <Route path="/Sustainability" element ={<Sustainability/>}/>
        <Route path="/Recipe" element ={<Recipe/>}/>
        <Route path="/Plant" element ={<Plant/>}/>
      </Routes>

    </Router>
    </>
  );
}

export default App;
