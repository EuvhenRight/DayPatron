import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {
  Navigation,
  Zoom,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { productStatus } from '../../redux/productsSlice';
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner';

export default function SwiperComponent({ product, activeVolume }) {
  const isLoading = useSelector(productStatus);
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  const [displayedImages, setDisplayedImages] = useState([]);
  useEffect(() => {
    const filteredImages = activeVolume
      ? product.image.filter((image, index) => {
          return (
            (activeVolume === 0 && index === 0) ||
            (activeVolume === 1 && index === 3) ||
            (activeVolume === 2 && index === 5)
          );
        })
      : [...product.image];
    console.log(activeVolume);

    setDisplayedImages(filteredImages);
  }, [activeVolume, product.image]);

  if (isLoading) {
    return (
      <Box minH="100dvh" alignItems="center">
        <LoaderSpinner />
      </Box>
    );
  }

  return (
    <>
      <Swiper
        initialSlide={0}
        style={{
          '--swiper-pagination-color': 'red',
          '--swiper-navigation-color': 'red',
          '--swiper-pagination-bottom': '-5px',
        }}
        navigation={isMobile ? false : true}
        zoom={true}
        cssMode={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Zoom, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
      >
        {displayedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <Image src={`/images/${image.url}`} alt={product.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
