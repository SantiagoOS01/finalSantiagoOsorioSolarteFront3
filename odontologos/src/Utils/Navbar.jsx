import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../Utils/ThemeButton';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/favs">Favoritos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>     
    </nav>
  );
};

export default Navbar;
