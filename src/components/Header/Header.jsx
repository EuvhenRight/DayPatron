import style from './Header.module.css';
import logo from '../assets/DayLogo.svg';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav__wrapper}>
          <div className={style.nav__left}>
            <Link to="">
              <img className={style.logo__header} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={style.nav__right}>
            <div className={style.nav__right__wrapper}>
              <button className={style.header__button} id="home" to="/">
                <Link className={style.header__link} id="home" to="/products">
                  Products
                </Link>
              </button>
              <button className={style.header__button} id="home" to="/">
                <Link className={style.header__link} id="about" to="/about">
                  About
                </Link>
              </button>
              <button className={style.header__button} id="home" to="/">
                <Link className={style.header__link} id="contact" to="/contact">
                  Contact
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
