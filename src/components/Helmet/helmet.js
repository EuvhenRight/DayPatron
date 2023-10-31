import React from 'react';
import Head from 'react-helmet';

const DOMAIN = 'https://www.daypatron.com.ua/';
const MAIN_KEYWORDS = 'GUN CARE, carbon cleaner, CLP';

const DEFAULT_IMAGE_CARD =
  'https://www.daypatron.com.ua/static/media/All_Cleaners.4b3365b0cc7f72411747.jpg';

const DEFAULT_TITLE = 'THE BEST GUN CARE PRODUCTS';
const DEFAULT_DESCRIPTION = "DayPatron's gun care products";

const POST_FIX_TITLE = ' | DayPatron';

export default function Helmet({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  link,
  keywords = '',
  imageCard = DEFAULT_IMAGE_CARD,
  addPostFixTitle,
  noIndex,
  largeTwitterCard,
  children,
}) {
  let metaTitle;

  if (addPostFixTitle) {
    metaTitle = `${title}${POST_FIX_TITLE}`;
  } else {
    metaTitle = title;
  }

  const metaDesc = description;
  const metaLink = DOMAIN + link;
  const metaKeywords =
    keywords.length > 0 ? MAIN_KEYWORDS + ',' + keywords : MAIN_KEYWORDS;

  let metaImageCard;

  if (imageCard.startsWith('https')) {
    metaImageCard = imageCard;
  } else {
    metaImageCard = DOMAIN + imageCard;
  }

  const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow';
  const twitterCard = largeTwitterCard ? 'summary_large_image' : 'summary';

  return (
    <Head>
      <html lang="en" />
      <title>{metaTitle}</title>
      <link rel="canonical" href={metaLink} />
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaLink} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image:secure_url" content={metaImageCard} />
      <meta property="og:site_name" content="DayPatron" />
      {/* Twitter Card */}
      <meta property="twitter:site" content="DayPatron" />
      <meta property="twitter:url" content={metaLink} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:image" content={metaImageCard} />
      <meta property="twitter:creator" content="creator" />
      <meta property="twitter:cart" content={twitterCard} />

      <meta name="referrer" content="origin-when-cross-origin" />
      {children}
    </Head>
  );
}
