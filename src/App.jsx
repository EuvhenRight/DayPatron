import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import ProductsItems from './components/Products/Product-items';
import Product from './components/Products/Product';
import { I18nextProvider } from 'react-i18next';
import i18n from './components/language/Translator.js';
import WhereToBuy from './components/Where_To_Buy/Where_To_Buy';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className={style.main__container}>
        <Header />
        <div className={style.App}>
          <Routes>
            <Route path="/" element={<Navigate to="/ua" />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/products" element={<ProductsItems />} />
            <Route path="/:lang/products/:id/:name" element={<Product />} />
            <Route path="/:lang/about" element={<About />} />
            <Route path="/:lang/whereToBuy" element={<WhereToBuy />} />
            <Route path="/:lang/contact" element={<Contacts />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound to="/" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
