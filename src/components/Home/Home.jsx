import React from 'react';
import style from './Home.module.css';
import AnimationTextWord from '../Animate/Animation_Text';
import AnimationLogo from '../Animate/Animation_Logo';
import HomeBenefitsInfo from '../Home_Benefits_Info/Home_Benefits_Info';
import { useLanguage } from '../language/LanguageContext';
import product from '../assets/carbon500.png';
import arGun from '../assets/ar15.svg';
import shotgun from '../assets/shotgun.svg';
import sniper from '../assets/sniper-rifle.svg';
import tank from '../assets/tank.svg';
import antiAir from '../assets/anti-aircraft-gun.png';
import gun from '../assets/gun.svg';
import knife from '../assets/knife.png';
import paintball from '../assets/paintball.png';

const Home = () => {
  const [rotate, setRotate] = React.useState(false);
  const { t } = useLanguage();

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
            <div className={style.middle__up}>
              <h2 className={style.middle__up__text}>
                <strong>{t('home.middleTextSlogan')}</strong>
              </h2>
            </div>
            <div className={style.middle__guns__container}>
              <img src={gun} className={style.gun__img} alt="gun" />
              <img src={arGun} className={style.gun__img} alt="ar15" />
              <img src={knife} className={style.gun__img} alt="knife" />
              <img src={paintball} className={style.gun__img} alt="paintball" />
              <img
                src={shotgun}
                className={style.gun__img}
                alt="sniper-rifle"
              />
              <img
                src={product}
                className={style.product__block__img}
                alt="product"
              />
              <img src={sniper} className={style.gun__img} alt="shotgun" />
              <img
                src={antiAir}
                className={style.gun__img}
                alt="anti-aircraft-gun"
              />
              <img src={tank} className={style.gun__img} alt="tank" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.section__down}>
        <div className={style.down__wrapper}>
          <div className={style.down__background}>
            <h1>GUN CARE PRODUCTS</h1>
          </div>
          <HomeBenefitsInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
