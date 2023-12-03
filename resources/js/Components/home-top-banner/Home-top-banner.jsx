import MediaQuery from "react-responsive";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay } from "swiper";

import topBannerTwo from "../../../images/1.jpg";
import topBannerThree from "../../../images/2.jpg";
import topBannerFour from "../../../images/3.jpg";
import topBannerFive from "../../../images/4.jpg";
import topBannerSix from "../../../images/Blue.jpg";
import topBannerSeven from "../../../images/White6.jpg";
//Mobile

import MobileBanner from "../../../images/MobileBanner/Мобильный баннер  (1).png"
import MobileBannderTwo from "../../../images/MobileBanner/Мобильный баннер  (1) (2).jpg"
import MobileBannerThree from "../../../images/MobileBanner/Мобильный баннер .jpg"
import MobileBannerFour from "../../../images/MobileBanner/Мобильный баннер  (1) (2).png"
import MobileBannerFive from "../../../images/MobileBanner/Мобильный баннер  (2) (2).png"
import MobileBannerSix from "../../../images/MobileBanner/Мобильный баннер  (3).png"

export default function HomeTopBanner() {

    return (
        <div className="p-0">
            <div className="top-banner text-center">

            <Swiper
                loop={true}
                speed={1000}
                scrollbar={{
                    hide: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <MediaQuery minWidth={575.98}>
                        <img src={topBannerTwo} alt="banner" className="img-fluid" />
                    </MediaQuery>
                    <MediaQuery maxWidth={575.98}>
                        <img src={MobileBanner} alt="banner" className="img-fluid" />
                    </MediaQuery>
                </SwiperSlide>
                <SwiperSlide>
                    <MediaQuery minWidth={575.98}>
                        <img src={topBannerThree} alt="banner" className="img-fluid" />
                    </MediaQuery>
                    <MediaQuery maxWidth={575.98}>
                        <img src={MobileBannderTwo} alt="banner" className="img-fluid" />
                    </MediaQuery>
                </SwiperSlide>
                <SwiperSlide>
                    <MediaQuery minWidth={575.98}>
                        <img src={topBannerFour} alt="banner" className="img-fluid" />
                    </MediaQuery>
                    <MediaQuery maxWidth={575.98}>
                        <img src={MobileBannerThree} alt="banner" className="img-fluid" />
                    </MediaQuery>
                </SwiperSlide>
                <SwiperSlide>
                    <MediaQuery minWidth={575.98}>
                        <img src={topBannerFive} alt="banner" className="img-fluid" />
                    </MediaQuery>
                    <MediaQuery maxWidth={575.98}>
                        <img src={MobileBannerFour} alt="banner" className="img-fluid" />
                    </MediaQuery>
                </SwiperSlide>
                <SwiperSlide>
                    <MediaQuery minWidth={575.98}>
                        <img src={topBannerSix} alt="banner" className="img-fluid" />
                    </MediaQuery>
                    <MediaQuery maxWidth={575.98}>
                        <img src={MobileBannerFive} alt="banner" className="img-fluid" />
                    </MediaQuery>
                </SwiperSlide>
                <SwiperSlide>
                    <MediaQuery minWidth={575.98}>
                        <img src={topBannerSeven} alt="banner" className="img-fluid" />
                    </MediaQuery>
                    <MediaQuery maxWidth={575.98}>
                        <img src={MobileBannerSix} alt="banner" className="img-fluid" />
                    </MediaQuery>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
}

