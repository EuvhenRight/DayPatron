import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';
import { Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Image } from '@chakra-ui/react';

import All_Oils from '../../components/assets/All_Oils.jpg';
import All_Cleaners from '../../components/assets/All_Cleaners.jpg';
import All_CLP from '../../components/assets/All_CLP.jpg';

export default function SwiperHC({ translateArray }) {
  const slideArray = [All_Oils, All_Cleaners, All_CLP];
  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': 'red',
          '--swiper-pagination-bullet-inactive-color': 'red',
          '--swiper-pagination-bullet-inactive-opacity': 0.5,
          '--swiper-pagination-bullet-width': '12px',
          '--swiper-pagination-bullet-height': '12px',
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
      >
        {slideArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={`title ${
                index === 0
                  ? 'one'
                  : index === 1
                  ? 'two'
                  : index === 2
                  ? 'three'
                  : ''
              }`}
            >
              {translateArray[index]}
            </div>
            <Image src={image} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
