import React from 'react';
import style from './Home.module.css';
import AnimationTextWord from './Animation_Text';
import AnimationLogo from './Animation_Logo';
import HomeBenefitsInfo from '../Home_Benefits_Info/Home_Benefits_Info';
import { useLanguage } from '../language/LanguageContext';
import product from '../assets/carbon500.png';
import arGun from '../assets/ar15.svg';
import shotgun from '../assets/shotgun.svg';
import sniper from '../assets/sniper-rifle.svg';
import tank from '../assets/tank.svg';
import antiAir from '../assets/anti-aircraft-gun.svg';
import gun from '../assets/gun.svg';

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
            <div className={style.middle__left}>
              <h2 className={style.middle__left__text}>
                <strong>DayPatron - the best Gun Care line of products</strong>
              </h2>
            </div>
            <div className={style.middle__block__guns}>
              <div>
                <img src={gun} alt="gun" />
                <img src={arGun} alt="ar15" />
                <img src={shotgun} alt="sniper-rifle" />
              </div>
              <img src={product} className={style.middle__img} alt="product" />
              <div>
                <img src={sniper} alt="shotgun" />
                <img src={antiAir} alt="anti-aircraft-gun" />
                <img src={tank} alt="tank" />
              </div>
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
