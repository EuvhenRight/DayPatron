import { FacebookShareButton, FacebookIcon } from 'react-share';
import React from 'react';

const FacebookShare = () => {
  return (
    <FacebookShareButton
      url={'http://localhost:3000/products/Carbon%20Killer/4'}
      quote={'Best Day Patrons'}
      hashtag={'#DayPatron'}
    >
      <FacebookIcon size={50} round={true} />
    </FacebookShareButton>
  );
};

export default FacebookShare;
