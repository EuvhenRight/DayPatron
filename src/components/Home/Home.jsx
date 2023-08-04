import React from 'react';
import style from './Home.module.css';
import logo from '../assets/logo.svg';
import tradeMark from '../assets/DayLogo.svg';
import AnimationText from './animation';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [rotate, setRotate] = React.useState(false);
  const { t } = useTranslation();

  const mainTextSlogan = t('home.mainTextSlogan');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={style.section__gradient}>
        <div className={style.gradient__wrapper}>
          <div className={style.gradient}></div>
        </div>
        <div className={style.headline__wrapper}>
          <AnimationText text={mainTextSlogan} />
          {/* animation logo */}
          <img
            className={`${rotate ? style.rotateTrademark : style.tradeMark}`}
            src={tradeMark}
            alt="logo"
          />
          <img className={style.logo} src={logo} alt="logo" />
        </div>
      </div>
      <div className={style.section__middle}>
        <div className={style.container}>
          <div className={style.middle__wrapper}>
            <div className={style.middle__left}>
              <h2 className={style.middle__left__text}>
                <strong>DayPatron - the best Gum Care line of products</strong>
                <br />
                Live-Shopping.
              </h2>
            </div>
            <div className={style.middle__right}>
              <p className={style.middle__right__text}>
                I hope you like our products
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.section__down}>
        <div className={style.container}>
          <div className={style.down_list__wrapper}>
            <div className={style.down_list__item}></div>
            <div className={style.down_list__item}></div>
            <div className={style.down_list__item}></div>
            <div className={style.down_list__item}></div>
            <div className={style.down_list__item}></div>
            <div className={style.down_list__item}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
