import {
	Box,
	Container,
	Image,
	Link,
	SimpleGrid,
	useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import { useLanguage } from '../Language/LanguageContext'
import BreadcrumbComponent from '../Products/Breadcrumb'

const WhereToBuy = () => {
	const { lang } = useLanguage()
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false })
	return (
		<Container maxW='6xl' minH='100dvh'>
			{!isMobile && <BreadcrumbComponent lang={lang} page='whereToBuy' />}
			<SimpleGrid
				columns={{ base: 1, sm: 2, md: 4 }}
				spacing={8}
				mt={10}
				alignItems='center'
			>
				<Box>
					<Link
						isExternal
						href='https://motorsport.com.ua/index.php?match=all&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=&dispatch=products.search&security_hash=577899a94e1535a213ecbdaf7bb39696&features_hash=316-10608'
					>
						<Image
							src={`${process.env.PUBLIC_URL}/images/motorsport.png`}
							alt='Motosport'
						/>
					</Link>
				</Box>
				<Box>
					<Link isExternal href='https://stvol.ua/catalog/day-patron/b942'>
						<Image
							src={`${process.env.PUBLIC_URL}/images/stvol.png`}
							alt='stvol'
						/>
					</Link>
				</Box>
				<Box>
					<Link isExternal href='https://epicentrk.ua/ua/search/?q=daypatron'>
						<Image
							src={`${process.env.PUBLIC_URL}/images/Epicentr_logo.svg`}
							alt='stvol'
						/>
					</Link>
				</Box>
			</SimpleGrid>
		</Container>
	)
}

export default WhereToBuy
