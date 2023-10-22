import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css';

import './styles.css';

// import required modules
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Image } from '@chakra-ui/react';

export default function SwiperComponent({ product }) {
  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#38a169',
          '--swiper-navigation-color': '#38a169',
        }}
        cssMode={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
      >
        {product.image.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={`/images/${image.url}`} alt={product.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
