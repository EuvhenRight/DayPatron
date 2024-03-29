import { Stack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaTelegram } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import {
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
} from 'react-share'

export default function ShareButtonsComponent({ product }) {
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false })
	const title = `${product.name}`
	const url = window.location.href
	const iconSize = isMobile ? 24 : 32
	const hashtag = '#DayPatron'
	const imageUrl = `/images/${product.image.url}';`

	return (
		<>
			<Stack direction={'row'} spacing={6} w>
				<TwitterShareButton
					url={url}
					title={title}
					hashtag={hashtag}
					media={imageUrl}
					style={{ marginRight: 5 }}
				>
					<RiTwitterXFill label='Twitter' size={iconSize} />
				</TwitterShareButton>
				<FacebookShareButton
					url={url}
					quote={title}
					hashtag={hashtag}
					media={imageUrl}
					style={{ marginRight: 5 }}
				>
					<FaFacebook size={iconSize} />
				</FacebookShareButton>
				<TelegramShareButton url={url} title={title} media={imageUrl}>
					<FaTelegram size={iconSize} />
				</TelegramShareButton>
			</Stack>
		</>
	)
}
