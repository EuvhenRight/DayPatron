import { motion } from 'framer-motion';
import style from './Animate_List_Item.module.css';
import React from 'react';
import { useLanguage } from '../language/LanguageContext';

const AnimatedListItem = ({ imageSrc, textKey }) => {
  const { t } = useLanguage();
  return (
    <motion.li
      className={style.list__item}
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

export default AnimatedListItem;
