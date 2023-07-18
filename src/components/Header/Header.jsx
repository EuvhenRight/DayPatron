import style from './Header.module.css';
import logo from '../assets/DayLogo.svg';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <nav>
          <Link to="">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
