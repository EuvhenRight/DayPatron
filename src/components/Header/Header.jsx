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
            <Link className={style.logo__header__link} to="">
              <img className={style.logo__header} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={style.nav__right}>
            <div className={style.nav__right__wrapper}>
              <Link className={style.header__link} id="home" to="/products">
                <button className={style.header__button} id="home" to="/">
                  Products
                </button>
              </Link>
              <Link className={style.header__link} id="about" to="/about">
                <button className={style.header__button} id="home" to="/">
                  About
                </button>
              </Link>
              <Link className={style.header__link} id="contact" to="/contact">
                <button className={style.header__button} id="home" to="/">
                  where to buy?
                </button>
              </Link>
              <Link className={style.header__link} id="contact" to="/contact">
                <button className={style.header__button} id="home" to="/">
                  Contacts
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
