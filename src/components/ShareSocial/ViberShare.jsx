import { ViberShareButton, ViberIcon } from 'react-share';
import React from 'react';

const ViberShare = () => {
  return (
    <ViberShareButton
      url={'http://localhost:3000/products/Carbon%20Killer/4'}
      quote={'Best Day Patrons'}
      hashtag={'#DayPatron'}
    >
      <ViberIcon size={50} round={true} />
    </ViberShareButton>
  );
};

export default ViberShare;
