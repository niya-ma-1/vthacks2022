import React from 'react';
import "../components/Navbar.css";
import { NavLink } from 'react-router-dom';
const style = {
    nav: `bg-blue-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
  return (
    <div className={style.nav}>
      <h1 className='nav-links'>Shurming</h1>
      <ul className='nav-menu'>
              <NavLink to='/'
                className='nav-links'>
                Image Upload
              </NavLink>
      </ul>
    </div>
    
  );
};

export default Navbar;