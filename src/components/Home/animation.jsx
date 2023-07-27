import React from 'react';
import style from './Home.module.css';

const AnimationText = ({text}) => {
     const words = text.split(' ');

return (
  <div className={style.headline__text}>
    {words.map((word, index) => {
      const animationDelay = index * 0.5;
      return (
        <span key={index} style={{ animationDelay: `${animationDelay}s` }} className={style.animation__text}>
          {word}
        </span>
      );
    })}
  </div>
);
};

export default AnimationText;