import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';
import { Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Image, useBreakpointValue } from '@chakra-ui/react';

import All_Oils from '../../components/assets/All_Oils.jpg';
import All_Cleaners from '../../components/assets/All_Cleaners.jpg';
import All_CLP from '../../components/assets/All_CLP.jpg';

import All_Oils_m from '../../components/assets/All_Oils-mobile.jpg';
import All_Cleaners_m from '../../components/assets/All_Cleaners-mobile.jpg';
import All_CLP_m from '../../components/assets/All_CLP-mobile.jpg';

export default function SwiperHC({ translateArray }) {
  const slideArray = [All_Oils, All_Cleaners, All_CLP];
  const slideArrayMobile = [All_Oils_m, All_Cleaners_m, All_CLP_m];
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

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
        {isMobile
          ? slideArrayMobile.map((image, index) => (
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
            ))
          : slideArray.map((image, index) => (
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
