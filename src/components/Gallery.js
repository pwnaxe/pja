import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const images = [
  process.env.PUBLIC_URL + '/assets/images/1.jpg',
  process.env.PUBLIC_URL + '/assets/images/2.jpg',
  process.env.PUBLIC_URL + '/assets/images/3.jpg',
  process.env.PUBLIC_URL + '/assets/images/4.jpg',
  process.env.PUBLIC_URL + '/assets/images/5.jpg',
  process.env.PUBLIC_URL + '/assets/images/6.jpg',
  process.env.PUBLIC_URL + '/assets/images/7.jpg',
  process.env.PUBLIC_URL + '/assets/images/8.jpg',
  process.env.PUBLIC_URL + '/assets/images/9.jpg',
  process.env.PUBLIC_URL + '/assets/images/10.jpg',
  process.env.PUBLIC_URL + '/assets/images/11.jpg',
];

function Gallery() {
  const { t } = useTranslation();
  return (
    <>
      <Typography id="galeria" variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', ml: "auto", mr: "auto", mb: 2, mt: 5, }}>
        {t('galeria')}
      </Typography>
      <div id="gallery">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ maxWidth: '85vw', height: '600px', maxHeight: '85vh' }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={image} alt={`Slide ${index}`} style={{ maxWidth: '90%', maxHeight: '100%', height: '100%', objectFit: 'contain' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Gallery;
