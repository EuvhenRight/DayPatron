import { ChakraBaseProvider } from '@chakra-ui/react'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import { LanguageProvider } from './components/Language/LanguageContext'
import NotFound from './components/NotFound/NotFound.jsx'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import Product from './components/Products/Product'
import ProductsItems from './components/Products/Product-items'
import WhereToBuy from './components/Where_To_Buy/Where_To_Buy'
import GoogleAnalyticsScript from './components/utils/GoogleAnalytics.js'
import { theme } from './components/utils/theme'
import store from './redux/store.js'

export default function App() {
	return (
		<HelmetProvider>
			<LanguageProvider>
				<Provider store={store}>
					<ChakraBaseProvider theme={theme}>
						<GoogleAnalyticsScript />
						<>
							<Header />
							<main>
								<Routes>
									<Route path='/' element={<Navigate to='/ua' />} />
									<Route path='/:lang' element={<Home />} />
									<Route path='/:lang/products' element={<ProductsItems />} />
									<Route
										path='/:lang/products/:id/:name'
										element={<Product />}
									/>
									<Route path='/:lang/about' element={<About />} />
									<Route path='/:lang/whereToBuy' element={<WhereToBuy />} />
									<Route path='/:lang/contact' element={<Contacts />} />
									<Route
										path='/:lang/help/privacy-policy'
										element={<PrivacyPolicy />}
									/>
									<Route path='*' element={<NotFound to='/' />} />
								</Routes>
							</main>
							<Footer />
						</>
					</ChakraBaseProvider>
				</Provider>
			</LanguageProvider>
		</HelmetProvider>
	)
}
