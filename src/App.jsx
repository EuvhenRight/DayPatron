import style from './App.module.css';
import Header from './components/Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import ProductsItems from './components/Products/Product-items';
import Product from './components/Products/Product';

function App() {
  return (
    <div className={style.main__container}>
      <Header />
      <div className={style.App}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsItems />} />
          <Route path="/products/:name/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
