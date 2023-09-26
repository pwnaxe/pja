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
            backgroundImage: `url(${require('../assets/pagegd/partners.webp')})`,
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
          <SwiperSlide><img src="/assets/logos/500x225.webp" alt="Logo 1" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Artboard 1.webp" alt="Logo 2" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Artboard 2.webp" alt="Logo 3" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/asse_datasys.webp" alt="Logo 4" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Kopia blue-horizontal.webp" alt="Logo 5" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Kopia Kopia Kopia asseco_data_sys - Marta.webp" alt="Logo 6" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Kopia Kopia Kopia EPAM_LOGO_Primary - Agnieszka Krzepkowska.webp" alt="Logo 7" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Kopia Kopia Kopia HAYS-ARROW_LOGO_STRAPLINE_COL_CMYK - Gabriela S..webp" alt="Logo 8" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Kopia Kopia Kopia logo NetWorks! PMS - Agnieszka Dziedzic.webp" alt="Logo 9" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Kopia Kopia Kopia Logo_BEC Poland (1) - Weronika Winiarek.webp" alt="Logo 10" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Kopia Kopia Kopia P_G logo - Paula Polańczyk.webp" alt="Logo 11" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/KPMG_NoCP_CMYK_Euro_281.webp" alt="Logo 12" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Master_Logo_RGB (1).webp" alt="Logo 13" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Obszar roboczy 2.webp" alt="Logo 14" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/Redge_Technologies_logo_png_czarne.webp" alt="Logo 15" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/rsz_2021_xperi_4brands-cmyk.webp" alt="Logo 16" /></SwiperSlide>
          <SwiperSlide><img src="/assets/logos/wp logo png (1).webp" alt="Logo 17" /></SwiperSlide>
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
