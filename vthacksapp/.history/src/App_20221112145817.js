import React from 'react';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ImageUpload from './components/ImageUpload';
import {ImageUpload} from './pages/ImageUpload';
import NavbarBootstrap from './components/NavbarBS';
import 


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
      </Routes>
    </Router>
    </>
  );
}

export default App;
