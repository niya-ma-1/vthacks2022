import React from 'react';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ImageUpload from './components/ImageUpload';
import {ImageUpload} from './pages/ImageUpload';
import NavbarBootstrap from './components/NavbarBS';
import {Home} from "./pages/Map";


function App() {
  return (
    // <>
    // <Router>
      
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<ImageUpload />} />
    //     <Route path="/test" element={<test />} />
    //   </Routes>
    // </Router>
    // </>
    <>
    <Router>
      <NavbarBootstrap/>
      <Routes>
        <Route path="/" element ={<ImageUpload/>}/>
        <Route path="/Map" element ={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
