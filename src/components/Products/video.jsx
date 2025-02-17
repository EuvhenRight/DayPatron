import React from 'react';
import YouTube from 'react-youtube';
import style from './Product.module.css';

const YoutubeVideo = () => {
  const videoId = 'p33qMGs_-Vo'; // Replace this with the YouTube video ID you want to watch

  // Optional: You can also provide player options
  const opts = {
    height: '450px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className={style.video}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubeVideo;
