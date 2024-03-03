import {
	Box,
	Container,
	Heading,
	Image,
	SimpleGrid,
	useBreakpointValue,
} from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
	allProductsDataSelector,
	allProductsStatus,
	fetchAllProductsData,
} from '../../redux/productsSlice'
import HelmetComponent from '../Helmet/helmet.js'
import { useLanguage } from '../Language/LanguageContext'
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner'
import logo from '../assets/logo.svg'
import BreadcrumbComponent from './Breadcrumb'
import style from './Product-items.module.css'

export default function ProductsItems() {
	const dispatch = useDispatch()
	const isLoading = useSelector(allProductsStatus)
	const productsData = useSelector(allProductsDataSelector)
	const { lang } = useParams()
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false })
	const { t } = useLanguage()

	const translate = useCallback(
		key => {
			return t(key)
		},
		[t]
	)

	useEffect(() => {
		dispatch(fetchAllProductsData(lang))
		window.scrollTo(0, 0)
	}, [lang, dispatch])

	const changeColor = category => {
		switch (category) {
			case 'Oil':
				return style.down__list__Oil
			case 'CLP':
				return style.down__list__Clp
			case 'Cleaner':
				return style.down__list__Cleaner
			default:
				return style.down__list__universal
		}
	}

	// Check if product exists before rendering.
	if (isLoading) {
		return (
			<Box minH='100dvh' alignItems='center'>
				<LoaderSpinner />
			</Box>
		)
	}

	if (!productsData) {
		return null // Don't render layout components if productsData is missing
	}

	return (
		<>
			<HelmetComponent
				title={translate('meta.products')}
				link={`${lang}/products`}
				description={translate('meta.description')}
				addPostFixTitle={true}
				noIndex={false}
				largeTwitterCard={true}
				imageCard={`/images/Facebook.jpg`}
			/>
			<Container maxW={'6xl'} mb={10} minH='100dvh'>
				{!isMobile && <BreadcrumbComponent lang={lang} page='Products' />}
				<SimpleGrid columns={[1, 2, 3]} gap={3}>
					{productsData.map(product => {
						return (
							<Link
								key={product.id}
								to={`/${lang}/products/${product.id}/${product.linkName}`}
							>
								<Box className={changeColor(product.category)}>
									<Box className={style.down__list__content}>
										<Heading
											as='h2'
											textAlign='center'
											className={style.down__list__content__text}
										>
											{product.name}
										</Heading>
										<Image
											className={style.down__list__content__img}
											src={logo}
											alt={product.name}
										/>
									</Box>
								</Box>
							</Link>
						)
					})}
				</SimpleGrid>
			</Container>
		</>
	)
}
