import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/"><img className='logo' src="src/Utils/logo1.png" alt="" /></Link>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/favs">Favoritos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>     
    </nav>
  );
};

export default Navbar;
