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
          <SwiperSlide><img src="/assets/logos/DellTech_Logo_Prm_Blue_rgb.png" alt="Logo 1" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Kopia Kopia Kopia P_G logo - Paula Polańczyk.png" alt="Logo 2" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/KPMG_NoCP_RGB_279 - Karolina Forkasiewicz.jpg" alt="Logo 4" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Nussknacker logo full purple.png" alt="Logo 5" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/syrenka.jpg" alt="Logo 6" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/wp logo png.png" alt="Logo 7" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/DXC Logo_Purple+Black RGB.png" alt="Logo 8" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Essembli Logo tlo kolor duze.jpg" alt="Logo 9" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/images.png" alt="Logo 10" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Inter Cars 2015 logo_hor_podstawowe_poziome_RGB.png" alt="Logo 11" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/MicrosoftTeams-image (1).png" alt="Logo 12" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Obszar roboczy 2 (2).png" alt="Logo 13" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/P72_Logo_Primary.png" alt="Logo 14" /></SwiperSlide>
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
