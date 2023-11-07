import React from 'react';
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
import { Image, useBreakpointValue } from '@chakra-ui/react';

export default function SwiperComponent({ product }) {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  return (
    <>
      <Swiper
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
        {product.image.map((image, index) => {
          console.log(index);
          return (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <Image src={`/images/${image.url}`} alt={product.name} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
