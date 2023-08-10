import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.css';

const Navbar = ({ currentLanguage, changeLanguage }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { t } = useTranslation();

  const toggleNavItems = () => {
    setShowMenu(!showMenu);
  };

  console.log(currentLanguage);

  const navLinks = [
    { id: 'products', to: 'products', label: 'header.products' },
    { id: 'about', to: 'about', label: 'header.about' },
    { id: 'whereToBuy', to: 'whereToBuy', label: 'header.whereToBuy' },
    { id: 'contact', to: 'contact', label: 'header.contacts' },
  ];

  return (
    <div className={style.main_container}>
      <div type="button" className={style.menu__icon} onClick={toggleNavItems}>
        {t('header.menu')}
      </div>
      <nav className={showMenu ? style.list_active : style.list}>
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
            className={style.lang__wrapper__button}
            onClick={() => {
              changeLanguage('en');
              setShowMenu(false);
            }}
          >
            {t('header.en')}
          </button>
          <button
            className={style.lang__wrapper__button}
            onClick={() => {
              changeLanguage('ua');
              setShowMenu(false);
            }}
          >
            {t('header.ua')}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <div className={style.lang__wrapper}></div>; */
}
