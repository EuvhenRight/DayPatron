import style from './Footer.module.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DayLogo_footer.svg';

const Footer = () => {
  return (
    <footer>
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.content__left}>
              <div className={style.content__logo}>
                <img className={style.logo} src={logo} alt="logo" />
              </div>
              <div className={style.content__text}>
                © 2023, DayPatron LTD, Ukraine
              </div>
            </div>
            <div>
              <nav className={style.content__links}>
                <Link to="*">Facebook</Link>
                <Link to="*">Instagram</Link>
                <Link to="*">Telegram</Link>
                <Link to="*">Viber</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
