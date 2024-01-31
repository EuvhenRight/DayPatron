import {
	Avatar,
	Box,
	Container,
	SimpleGrid,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	allProductsDataSelector,
	allProductsStatus,
	fetchAllProductsData,
} from '../../redux/productsSlice'
import WithScrollAnimation from '../Animate/Animate'
import HelmetComponent from '../Helmet/helmet.js'
import { useLanguage } from '../Language/LanguageContext'
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner'
import product from '../assets/CLP-500ml.png'
import ammoniaFree from '../assets/ammonia_free.png'
import bgPattern from '../assets/bg-pattern.svg'
import safety_barrel from '../assets/safety_barrel.png'
import userFriendly from '../assets/user_friendly.png'
import CardComponent from './Card'
import SwiperHC from './SwiperHC'
import './styles.css'

export default function Home() {
	const isLoading = useSelector(allProductsStatus)
	const productsData = useSelector(allProductsDataSelector)
	const dispatch = useDispatch()
	const { t } = useLanguage()
	const titles = ['home.title_one', 'home.title_two', 'home.title_three']
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false })
	const { lang } = useParams()

	React.useEffect(() => {
		window.scrollTo(0, 0)
		console.log('useEffect is running')
		dispatch(fetchAllProductsData(lang))
	}, [dispatch, lang])

	const translate = React.useCallback(
		key => {
			return t(key)
		},
		[t]
	)

	const translateArray = titles.map(item => translate(item))

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
				title={translate('meta.title')}
				description={translate('meta.description')}
				addPostFixTitle={true}
				noIndex={true}
				keyWords={('Gun_Care', 'carbon_cleaner', 'CLP')}
				largeTwitterCard={true}
				imageCard={
					'https://www.daypatron.com.ua/static/media/DayLogo.671b16c7b8f9b78cb5de3763dd57fbc3.svg'
				}
			/>
			<Container
				key={product.id}
				maxW={'6xl'}
				minH='100dvh'
				fontSize={{ base: 'sm', sm: 'md' }}
			>
				<SwiperHC translateArray={translateArray} />
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-around'
					flexDirection='row'
					flexWrap='wrap'
					borderRadius='2em'
					bg='linear-gradient(90deg, rgba(197,197,198,1) 45%, rgba(120,119,119,1) 100%);'
					my={4}
				>
					<Box
						display='flex'
						alignItems='center'
						flexDirection={isMobile ? 'column' : 'row'}
						my={4}
					>
						<Avatar
							name='user-friendly'
							src={userFriendly}
							alt='user-friendly'
						/>
						USER FRIENDLY
					</Box>
					<Box
						display='flex'
						alignItems='center'
						flexDirection={isMobile ? 'column' : 'row'}
					>
						<Avatar name='safety' src={safety_barrel} alt='safety' />
						SAFETY
					</Box>
					<Box
						display='flex'
						alignItems='center'
						flexDirection={isMobile ? 'column' : 'row'}
					>
						<Avatar name='ammonia' src={ammoniaFree} alt='ammonia-free' />
						AMMONIA FREE
					</Box>
				</Box>
				<Box
					bg='black'
					height={isMobile ? '250px' : '400px'}
					borderRadius='2em'
					display='flex'
					alignItems='center'
					bgImage={bgPattern}
				>
					<WithScrollAnimation triggerPosition={200} resetPosition={150}>
						<Text
							color='white'
							fontSize={isMobile ? '13px' : '26px'}
							fontStyle='italic'
							textAlign='justify'
							px={isMobile ? 5 : 10}
						>
							{t('home.about')}
						</Text>
					</WithScrollAnimation>
				</Box>
				<SimpleGrid my={4} columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
					{productsData.map(product => {
						return (
							<CardComponent
								image={`/images/${product.image[3].url}`}
								key={product.id}
								name={product.name}
								benefits={product.UTP}
								product={product}
							/>
						)
					})}
				</SimpleGrid>
			</Container>
		</>
	)
}
