import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Pagination ,EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './css/main.css'


function Section01(){
    useEffect(()=>{
        AOS.init();
    });

 return (
    <section className="section01">
        <div className="sub-inner">
            <Swiper className="main-slide"
                modules={[Pagination, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                effect="fade"
                >
                <SwiperSlide>
                    <div className="slide-text">
                        <span>oh summer~!</span>
                        <p>청량하고 시원한 여름이야기</p>
                        <Link to="/">메뉴보러가기</Link>
                    </div>
                    <div className="slide-img">
                        <img src={process.env.PUBLIC_URL + './assets/main/main01.png'} alt="main01" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-text">
                        <span>oh summer~!</span>
                        <p>이 여름을 함께하는 <br/>달콤한 빙수 3종!</p>
                        <Link to="/">스토리 보러가기</Link>
                    </div>
                    <div className="slide-img">
                        <img src={process.env.PUBLIC_URL + './assets/main/main02.png'} alt="main02" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-text">
                        <span>Easy & Quick!</span>
                        <p>간편하고 편리한 액상커피 세트 출시</p>
                        <Link to="/">구매하러가기</Link>
                    </div>
                    <div className="slide-img">
                        <img src={process.env.PUBLIC_URL + './assets/main/main03.png'} alt="main03" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="main-text">
                <h1 className="face" data-aos="fade-up" data-aos-easing="ease">Dal.Komm</h1>
                <h1 className="face" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="200">Life Happens</h1>
                <h1 className="line" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Coffee Helps</h1>
            </div>
        </div>
    </section>
 );
}

export default Section01;