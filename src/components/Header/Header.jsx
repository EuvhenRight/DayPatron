import style from './Header.module.css';
import logo from '../assets/DayLogo.svg';
import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [lang, setLang] = React.useState('ua');
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLanguage = location.pathname.split('/')[1]; // Get the current language from the URL
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    const newPath = location.pathname.replace(
      `/${currentLanguage}`,
      `/${lang}`
    );
    navigate(newPath);
    setLang(lang);
  };
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav__wrapper}>
          <div className={style.nav__left}>
            <Link
              className={style.logo__header__link}
              to={`/${currentLanguage}`}
            >
              <img className={style.logo__header} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={style.nav__right}>
            <div className={style.nav__right__wrapper}>
              <Link
                className={style.header__link}
                id="home"
                to={`/${currentLanguage}/products`}
              >
                <button className={style.header__button} id="home">
                  {t('header.products')}
                </button>
              </Link>
              <Link
                className={style.header__link}
                id="about"
                to={`/${currentLanguage}/about`}
              >
                <button className={style.header__button} id="home">
                  {t('header.about')}
                </button>
              </Link>
              <Link
                className={style.header__link}
                id="home"
                to={`/${currentLanguage}/whereToBuy`}
              >
                <button className={style.header__button} id="home">
                  {t('header.whereToBuy')}
                </button>
              </Link>
              <Link
                className={style.header__link}
                id="home"
                to={`/${currentLanguage}/contact`}
              >
                <button className={style.header__button} id="home">
                  {t('header.contacts')}
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className={style.lang__wrapper}>
          <button
            className={style.lang__wrapper__button}
            onClick={() => changeLanguage('en')}
          >
            {t('header.en')}
          </button>

          <button
            className={style.lang__wrapper__button}
            onClick={() => changeLanguage('ua')}
          >
            {t('header.ua')}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
