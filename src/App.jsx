import React from 'react';
import Header from './components/Header/Header.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import ProductsItems from './components/Products/Product-items';
import Product from './components/Products/Product';
import WhereToBuy from './components/Where_To_Buy/Where_To_Buy';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import { LanguageProvider } from './components/Language/LanguageContext';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from './components/utils/theme';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <LanguageProvider>
      <ChakraBaseProvider theme={theme}>
        <HelmetProvider>
          <div>
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Navigate to="/ua" />} />
                <Route path="/:lang" element={<Home />} />
                <Route path="/:lang/products" element={<ProductsItems />} />
                <Route path="/:lang/products/:id/:name" element={<Product />} />
                <Route path="/:lang/about" element={<About />} />
                <Route path="/:lang/whereToBuy" element={<WhereToBuy />} />
                <Route path="/:lang/contact" element={<Contacts />} />
                <Route
                  path="/:lang/help/privacy-policy"
                  element={<PrivacyPolicy />}
                />
                <Route path="*" element={<NotFound to="/" />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </HelmetProvider>
      </ChakraBaseProvider>
    </LanguageProvider>
  );
}

export default App;
