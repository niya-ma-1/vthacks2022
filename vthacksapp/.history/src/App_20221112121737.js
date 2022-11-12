import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import {Map, GoogleApiWrapper} from "google-maps-react";
import {render} from '@testing-library/react';

function App() {
  return (
    <>
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<ImageUpload />} />
      </Routes>
    </Router>

    <Map
      google={this.props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{lat:0,lng:0}}
    />
    </>
  );
}

render() {
  
}

export default GoogleApiWrapper({
  apiKey: AIzaSyARRoVDhEJK8Ge_76u6_Tz7Am0Ad-Eh0Ug
})(MapContainer);
