import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Box, Image } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function SwiperComponent({ product }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {product.image.map((image, index) => (
            <Image
              src={`/images/${image.url}`}
              alt={product.name}
              key={index}
            />
          ))}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
