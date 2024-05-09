import {
	Box,
	Button,
	Container,
	Grid,
	GridItem,
	Heading,
	Link,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import {
	fetchProduct,
	productDataSelector,
	productStatus,
} from '../../redux/productsSlice'
import HelmetComponent from '../Helmet/helmet.js'
import { useLanguage } from '../Language/LanguageContext'
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner'
import ShareButtonsComponent from '../ShareSocial/ShareButtons'
import AccordionComponent from './AccordionComponent'
import BreadcrumbComponent from './Breadcrumb'
import SwiperComponent from './Swiper'
import TabsComponent from './TabsComponent'
import VolumeToggleComponent from './VolumeToggleComponent'

export default function Product() {
	const isLoading = useSelector(productStatus)
	const productData = useSelector(productDataSelector)
	const product = productData?.product
	const metaData = productData?.metaData
	const dispatch = useDispatch()
	const isMobile = useBreakpointValue({
		base: true,
		sm: true,
		md: true,
		lg: false,
	})
	const { id, lang } = useParams()
	const [activeVolume, setActiveVolume] = React.useState(0)
	const { t } = useLanguage()
	const location = useLocation()
	const [mainLink, setMainLink] = React.useState(null)
	const currentLink = [
		{
			path:
				lang === 'ua'
					? '/ua/products/1/universal-oil-CLP-3-in-1'
					: '/en/products/1/universal-oil-CLP-3-in-1',
			link: 'https://motorsport.com.ua/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=CLP&dispatch=products.search&security_hash=aa42b415556c6f9740e12188004ce152',
		},
		{
			path:
				lang === 'ua'
					? '/ua/products/2/neutral-synthetic-oil'
					: '/en/products/2/neutral-synthetic-oil',
			link: 'https://motorsport.com.ua/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=Synthetic+Neutral+Oil&dispatch=products.search&security_hash=aa42b415556c6f9740e12188004ce152',
		},
		{
			path:
				lang === 'ua'
					? '/ua/products/3/rust-protection'
					: 'en/products/3/rust-protection',
			link: 'https://motorsport.com.ua/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=DAY+PATRON+Rust+Protection+Oil&dispatch=products.search&security_hash=aa42b415556c6f9740e12188004ce152',
		},
		{
			path:
				lang === 'ua'
					? '/ua/products/4/carbon-killer'
					: '/en/products/4/carbon-killer',
			link: 'https://motorsport.com.ua/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=DAY+PATRON+Carbon+Killer&dispatch=products.search&security_hash=aa42b415556c6f9740e12188004ce152',
		},
		{
			path:
				lang === 'ua'
					? '/ua/products/5/copper-killer'
					: '/en/products/5/copper-killer',
			link: 'https://motorsport.com.ua/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=DAY+PATRON+Copper+Killer&dispatch=products.search&security_hash=aa42b415556c6f9740e12188004ce152',
		},
		{
			path:
				lang === 'ua'
					? '/ua/products/6/liquidator'
					: '/en/products/6/liquidator',
			link: 'https://motorsport.com.ua/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=DAY+PATRON+Liquidator&dispatch=products.search&security_hash=aa42b415556c6f9740e12188004ce152',
		},
	]
	useEffect(() => {
		const foundLink = currentLink.find(linkItem =>
			linkItem.path.includes(location.pathname)
		)
		setMainLink(foundLink)
	}, [location.pathname])

	const translate = React.useCallback(
		key => {
			return t(key)
		},
		[t]
	)

	React.useEffect(() => {
		window.scrollTo(0, 0)
		dispatch(fetchProduct({ lang, id }))
	}, [lang, dispatch, id])

	// Check if product exists before rendering.
	if (isLoading) {
		return (
			<Box minH='100dvh' alignItems='center'>
				<LoaderSpinner />
			</Box>
		)
	}

	if (!product) {
		return null // Don't render layout components if productsData is missing
	}

	return (
		<>
			<HelmetComponent
				title={metaData.title}
				addPostFixTitle={true}
				description={metaData.description}
				keyWords
				imageCard={`/images/${metaData.image}`}
				noIndex={false}
				largeTwitterCard={true}
			/>
			<Container key={product.id} maxW={'6xl'} minH='100dvh' mb={5}>
				{isMobile ? (
					<>
						<Container p='0'>
							<SwiperComponent product={product} activeVolume={activeVolume} />
						</Container>
						<VolumeToggleComponent
							product={product}
							activeVolume={activeVolume}
							setActiveVolume={setActiveVolume}
						/>
						<Box
							p={5}
							display='flex'
							flexDirection='column'
							justifyContent='center'
							alignItems='flex-end'
						>
							<Box display='flex' alignItems='center' my={4}>
								<Text>{translate('product.share')}:</Text>
								<ShareButtonsComponent product={product} />
							</Box>
							<Heading as='h2' size={isMobile ? 'lg' : 'xl'} textAlign='right'>
								{product.name}
							</Heading>
							<Text>
								{translate('product.article')}: {product.article}
							</Text>
							<Box
								my={5}
								display='flex'
								alignItems='center'
								justifyContent='flex-between'
								gap={8}
							>
								<Heading as='h2' color={'green.500'}>
									{translate('product.sale')}
								</Heading>
								<Link isExternal href={mainLink?.link}>
									<Button
										variant='shopPrimary'
										leftIcon={<TbShoppingCartPlus />}
									>
										{translate('product.shop_button')}
									</Button>
								</Link>
							</Box>
						</Box>
						<AccordionComponent translate={translate} product={product} />
					</>
				) : (
					<>
						<BreadcrumbComponent lang={lang} product={product} />
						<Grid
							templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
							gap={3}
						>
							<GridItem colSpan={1}>
								<Container p='0'>
									<SwiperComponent
										product={product}
										activeVolume={activeVolume}
									/>
								</Container>
								<VolumeToggleComponent
									product={product}
									activeVolume={activeVolume}
									setActiveVolume={setActiveVolume}
								/>
							</GridItem>
							<GridItem
								colSpan={isMobile ? 1 : 2}
								sx={
									isMobile
										? {}
										: {
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'flex-end',
										  }
								}
							>
								<Box my={4} display='flex' alignItems='center'>
									<Text>{translate('product.share')}:</Text>
									<ShareButtonsComponent product={product} />
								</Box>
								<Heading
									as='h2'
									size={isMobile ? 'md' : 'xl'}
									textAlign='right'
								>
									{product.name}
								</Heading>
								<Text>
									{translate('product.article')}: {product.article}
								</Text>
								<Box
									my={5}
									display='flex'
									alignItems='center'
									justifyContent='flex-between'
									gap={8}
								>
									<Heading as='h2' color={'green.500'}>
										{translate('product.sale')}
									</Heading>
									<Link isExternal href={mainLink?.link}>
										<Button
											variant='shopPrimary'
											size='lg'
											leftIcon={<TbShoppingCartPlus />}
										>
											{translate('product.shop_button')}
										</Button>
									</Link>
								</Box>

								<TabsComponent translate={translate} product={product} />
							</GridItem>
						</Grid>
					</>
				)}
			</Container>
		</>
	)
}
