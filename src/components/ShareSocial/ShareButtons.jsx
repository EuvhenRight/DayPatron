import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';
import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';

const ShareButtonsComponent = ({ product }) => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  const title = `${product.name} | ${product.specification.text}`;
  const url = window.location.href;
  const iconSize = isMobile ? 32 : 48;
  const hashtag = '#DayPatron';
  const imageUrl = `https://www.daypatron.com.ua/images/${product.image.url}';`;

  return (
    <>
      <Box sx={{ ml: 2 }}>
        <TwitterShareButton
          url={url}
          title={title}
          hashtag={hashtag}
          media={imageUrl}
          style={{ marginRight: 5 }}
        >
          <TwitterIcon size={iconSize} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          url={url}
          quote={title}
          hashtag={hashtag}
          media={imageUrl}
          style={{ marginRight: 5 }}
        >
          <FacebookIcon size={iconSize} round={true} />
        </FacebookShareButton>
        <TelegramShareButton url={url} title={title} media={imageUrl}>
          <TelegramIcon size={iconSize} round />
        </TelegramShareButton>
      </Box>
    </>
  );
};

export default ShareButtonsComponent;
