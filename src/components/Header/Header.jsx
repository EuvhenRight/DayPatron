import style from './Header.module.css';
import logo from '../assets/DayLogo.svg';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { useLanguage } from '../Language/LanguageContext';
import { Container, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const { colorMode, toggleColorMode } = useColorMode();

  const changeColorLanguageClick = (lang) => {
    return currentLanguage === lang
      ? style.lang__wrapper__button__active
      : style.lang__wrapper__button;
  };

  return (
    <>
      <Container
        maxW={'6xl'}
        centerContent
        as="header"
        className={style.main_container}
        flexDirection="row"
        justifyContent="space-between"
      >
        <nav className={style.nav__wrapper}>
          <div className={style.nav__left}>
            <Link className={style.logo__link} to={`/${currentLanguage}`}>
              <img className={style.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={style.nav__right}>
            <div className={style.nav__right__wrapper}>
              <Link
                className={style.__link}
                id="home"
                to={`/${currentLanguage}/products`}
              >
                <button className={style.button} id="home">
                  {t('header.products')}
                </button>
              </Link>
              <Link
                className={style.link}
                id="about"
                to={`/${currentLanguage}/about`}
              >
                <button className={style.button} id="home">
                  {t('header.about')}
                </button>
              </Link>
              <Link
                className={style.link}
                id="home"
                to={`/${currentLanguage}/whereToBuy`}
              >
                <button className={style.button} id="home">
                  {t('header.whereToBuy')}
                </button>
              </Link>
              <Link
                className={style.link}
                id="home"
                to={`/${currentLanguage}/contact`}
              >
                <button className={style.button} id="home">
                  {t('header.contacts')}
                </button>
              </Link>
            </div>
            <div className={style.lang__wrapper}>
              <button
                className={changeColorLanguageClick('en')}
                onClick={() => changeLanguage('en')}
              >
                {t('header.en')}
              </button>
              <button
                className={changeColorLanguageClick('ua')}
                onClick={() => changeLanguage('ua')}
              >
                {t('header.ua')}
              </button>
            </div>
            <div className={style.mobile__navbar__wrapper}>
              <Navbar />
            </div>
            <button className={style.button__theme} onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Header;
