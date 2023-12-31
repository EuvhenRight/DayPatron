import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import { useLanguage } from '../../Language/LanguageContext';
import { useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const { colorMode, toggleColorMode } = useColorMode();
  const menuRef = useRef();

  const toggleNavItems = () => {
    setShowMenu(!showMenu);
  };

  const navLinks = [
    { id: 'products', to: 'products', label: 'header.products' },
    { id: 'about', to: 'about', label: 'header.about' },
    { id: 'whereToBuy', to: 'whereToBuy', label: 'header.whereToBuy' },
    { id: 'contact', to: 'contact', label: 'header.contacts' },
  ];

  useEffect(() => {
    // Function to close the menu when clicking outside
    const closeMenuOnClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', closeMenuOnClickOutside);
    return () => {
      document.removeEventListener('mousedown', closeMenuOnClickOutside);
    };
  }, []);

  return (
    <div className={style.main_container}>
      <div type="button" className={style.menu__icon} onClick={toggleNavItems}>
        {t('header.menu')}
      </div>
      <nav ref={menuRef} className={showMenu ? style.list_active : style.list}>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            className={style.link}
            id={link.id}
            to={`/${currentLanguage}/${link.to}`}
            onClick={toggleNavItems}
          >
            {t(link.label)}
          </Link>
        ))}
        <div className={style.lang__wrapper}>
          <button
            className={
              currentLanguage === 'en'
                ? style.lang__wrapper__button__active
                : style.lang__wrapper__button
            }
            onClick={() => {
              changeLanguage('en');
              setShowMenu(false);
            }}
          >
            {t('header.en')}
          </button>
          <button
            className={
              currentLanguage === 'ua'
                ? style.lang__wrapper__button__active
                : style.lang__wrapper__button
            }
            onClick={() => {
              changeLanguage('ua');
              setShowMenu(false);
            }}
          >
            {t('header.ua')}
          </button>
          <button
            className={style.lang__wrapper__button}
            onClick={() => {
              toggleColorMode();
              setShowMenu(false);
            }}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
