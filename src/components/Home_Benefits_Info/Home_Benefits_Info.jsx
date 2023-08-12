import React from 'react';
import style from '../Home_Benefits_Info/Home_Benefits_Info.module.css';
import PH from '../assets/phbalanced.png';
import Ukraine from '../assets/made_in_Ukraine.png';
import hand from '../assets/hand.png';
import CLP from '../assets/clp_tr.svg';
import { useLanguage } from '../language/LanguageContext';
import { motion } from 'framer-motion';

const listItems = [
  { imageSrc: PH, textKey: 'ph' },
  { imageSrc: Ukraine, textKey: 'ukraine' },
  { imageSrc: hand, textKey: 'hand_care' },
  { imageSrc: CLP, textKey: 'clp' },
];

const AnimatedListItem = ({ imageSrc, textKey }) => {
  const { t } = useLanguage();
  return (
    <motion.li
      className={style.down_list__item}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      key={textKey}
    >
      <div className={style.list__content}>
        <div>
          <img src={imageSrc} alt={imageSrc} />
        </div>
        <p>{t(`home_benefits.${textKey}`)}</p>
      </div>
    </motion.li>
  );
};

const Home_Benefits_Info = () => {
  const { t } = useLanguage();
  return (
    <div className={style.container}>
      <ul className={style.down_list__wrapper}>
        {listItems.map((item) => (
          <AnimatedListItem
            key={item.textKey}
            imageSrc={item.imageSrc}
            textKey={item.textKey}
            t={t}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home_Benefits_Info;
