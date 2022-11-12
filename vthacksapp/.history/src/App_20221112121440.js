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
      </Routes>
    </Router>
    </>

    <Map
    google={this.props.google}
    zoom={8}
    style={mapStyles}
    initialCenter={{lat:0,lng:0}}
    />
  );
}

export default App;
