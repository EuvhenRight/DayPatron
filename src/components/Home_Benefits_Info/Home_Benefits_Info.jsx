import React from 'react';
import style from '../Home_Benefits_Info/Home_Benefits_Info.module.css';
import PH from '../assets/phbalanced.png';
import Ukraine from '../assets/made_in_Ukraine.png';
import hand from '../assets/hand.png';
import CLP from '../assets/clp_tr.svg';
import { useLanguage } from '../language/LanguageContext';
import AnimatedListItem from '../Animate/Animate_List_Item';

const listItems = [
  { imageSrc: PH, textKey: 'ph' },
  { imageSrc: Ukraine, textKey: 'ukraine' },
  { imageSrc: hand, textKey: 'hand_care' },
  { imageSrc: CLP, textKey: 'clp' },
];

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
