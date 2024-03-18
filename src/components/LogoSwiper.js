import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div id="logoimg">
        <Swiper
          style={{
            backgroundImage: `url(${require('../assets/page/partners.webp')})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}
          spaceBetween={30}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
          loop={true}
          initialSlide={4}
        >
          <SwiperSlide><img src="/assets/logos/Capgemini_Logo1.png" alt="Logo 1" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Inter Cars 2015 logo_hor_podstawowe_poziome_RGB (1).png" alt="Logo 2" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/logo BGK.png" alt="Logo 3" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Logo_BEC Poland_RGB.png" alt="Logo 4" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Logo_ING_Hubs_Poland.png" alt="Logo 5" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Logo_UKNF_granatowe_na_bialym_tle (1).png" alt="Logo 6" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Logo.png" alt="Logo 7" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Master_Logo_RGB (1) (2).png" alt="Logo 8" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Obszar roboczy 2 (3).png" alt="Logo 9" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/PwC_fl_c (1).png" alt="Logo 10" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Warszawa_znak_CMYK_kolorowy_Urzad_Miasta (1)-1.png" alt="Logo 11" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/wp logo png (1) (1).png" alt="Logo 12" /></SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div >
    </>
  );
}
