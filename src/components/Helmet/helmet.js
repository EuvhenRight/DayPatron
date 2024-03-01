import React from 'react'
import { Helmet } from 'react-helmet-async'

const DOMAIN = 'https://daypatron.com.ua/'
const POST_FIX_TITLE = ' | DayPatron'

export default function HelmetComponent({
	title,
	description,
	link,
	imageCard,
	addPostFixTitle,
	noIndex,
	largeTwitterCard,
	children,
}) {
	let metaTitle

	if (addPostFixTitle) {
		metaTitle = `${title}${POST_FIX_TITLE}`
	} else {
		metaTitle = title
	}

	const metaDesc = description
	const metaLink = link ? DOMAIN + link : DOMAIN

	let metaImageCard

	if (imageCard.startsWith('https://')) {
		metaImageCard = imageCard
	} else {
		metaImageCard = DOMAIN + imageCard
	}

	const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow'
	const twitterCard = largeTwitterCard ? 'summary_large_image' : 'summary'

	return (
		<Helmet>
			<title>{metaTitle}</title>
			<link rel='canonical' href={metaLink} />
			<meta name='title' content={metaTitle} />
			<meta name='image' content={metaImageCard} />
			<meta name='description' content={metaDesc} />
			<meta name='robots' content={metaRobots} />
			{/* Open Graph */}
			<meta property='og:image' content={metaImageCard} />
			<meta property='og:image:secure_url' content={metaImageCard} />
			<meta property='og:image:alt' content={metaTitle} />
			<meta property='og:image:type' content='image/jpeg' />
			<meta property='og:image:width' content='400' />
			<meta property='og:image:height' content='300' />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={metaLink} />
			<meta property='og:title' content={metaTitle} />
			<meta property='og:description' content={metaDesc} />
			<meta property='og:site_name' content='DayPatron' />
			{/* Twitter Card */}
			<meta name='twitter:site' content='Daypatron.com.ua' />
			<meta name='twitter:url' content={metaLink} />
			<meta name='twitter:title' content={metaTitle} />
			<meta name='twitter:description' content={metaDesc} />
			<meta name='twitter:image' content={metaImageCard} />
			<meta name='twitter:creator' content='@daypatron' />
			<meta name='twitter:card' content={twitterCard} />
			<meta name='referrer' content='origin-when-cross-origin' />
			{children}
		</Helmet>
	)
}
