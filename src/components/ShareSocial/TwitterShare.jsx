import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const TwitterShare = () => {
  return (
    <TwitterShareButton
      url={'http://localhost:3000/products/Carbon%20Killer/4'}
      quote={'Best Day Patrons'}
      hashtag={'#DayPatron'}
    >
      <TwitterIcon size={50} round={true} />
    </TwitterShareButton>
  );
};

export default TwitterShare;
