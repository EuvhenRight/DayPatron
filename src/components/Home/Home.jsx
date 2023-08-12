import React from 'react';
import style from './Home.module.css';
import logo from '../assets/logo.svg';
import AnimationTextWord from './Animation_Text';
import { useTranslation } from 'react-i18next';
import AnimationLogo from './Animation_Logo';

const Home = () => {
  const [rotate, setRotate] = React.useState(false);
  const { t } = useTranslation();

  const mainTextSlogan = t('home.mainTextSlogan');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [t]);

  return (
    <>
      <div className={style.section__gradient}>
        <div className={style.gradient__wrapper}>
          <div className={style.gradient}></div>
        </div>
        <div className={style.headline__wrapper}>
          <AnimationLogo rotate={rotate} />
          <div className={style.headline__text}>
            <AnimationTextWord Text text={mainTextSlogan} />
          </div>
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
