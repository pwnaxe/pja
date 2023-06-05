import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Typography from '@mui/material/Typography';

const images = [
  './Assets/images/IMG_20221020_095239.webp',
  './Assets/images/IMG_20221020_095252.webp',
  './Assets/images/IMG_20221020_095305.webp',
  './Assets/images/IMG_20221020_095329.webp',
  './Assets/images/IMG_20221020_100109.webp',
  './Assets/images/IMG_20221020_104332.webp',
  './Assets/images/IMG_20221020_111020.webp',
  './Assets/images/IMG_20221020_111204.webp',
  './Assets/images/IMG_20221020_111626.webp',
  './Assets/images/IMG_20221020_111705.webp',
  './Assets/images/IMG_20221020_112147.webp',
  './Assets/images/IMG_20221020_153644.webp'
];

function Gallery() {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', ml: "auto", mr: "auto", mb: 2, mt: 5, }}>
        Galeria
      </Typography>
      <div id="gallery">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ maxWidth: '90vw', height: 'auto', minHeight: 'auto', maxHeight: '100vh' }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={image} alt={`Slide ${index}`} style={{ maxWidth: '90%', maxHeight: '100%', objectFit: 'contain' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Gallery;
