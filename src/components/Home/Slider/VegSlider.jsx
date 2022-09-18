import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FruitVeg.css'
import VegCard from './VegCard';

import img1 from './VegList/Brinjal.jpg'
import img2 from './VegList/Broccoli Rabe.jpg'
import img3 from './VegList/carrots.jpg'
import img4 from './VegList/cauliflower.jpg'
import img5 from './VegList/celery.jpg'
import img6 from './VegList/Lady_Finger.jpg'
import img7 from './VegList/Mint.jpg'
import img8 from './VegList/Potato.jpg'
import img9 from './VegList/radish.jpg'

export default function VegSlider() {
  return (
    <div className="container py-4 px-4 justify-content-center h-15vw">
        <h2> Healthy Vegetables! </h2>
        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
            0:{
                slidesPerView:1,
                spaceBetween:10
            },
            480:{
                slidesPerView:2,
                spaceBetween:10
            },
            768:{
                slidesPerView:3,
                spaceBetween:15
            },
            1024:{
                slidesPerView:4,
                spaceBetween:15
            },
            1280:{
                slidesPerView:5,
                spaceBetween:30
            }
        }
        }   
        //slidesPerView={5}
        //spaceBetween={30}
        >
            <SwiperSlide>
                <VegCard data={{imgSrc:img1, price:'Rs120', title:'Brinjal'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <VegCard data={{imgSrc:img2, price:'Rs120', title:'Broccoli'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <VegCard data={{imgSrc:img3, price:'Rs120', title:'Carrots'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <VegCard data={{imgSrc:img4, price:'Rs120', title:'Cauliflower'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <VegCard data={{imgSrc:img5, price:'Rs120', title:'Celery'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <VegCard data={{imgSrc:img6, price:'Rs120', title:'Lady Finger'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <VegCard data={{imgSrc:img7, price:'Rs120', title:'Mint'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <VegCard data={{imgSrc:img8, price:'Rs120', title:'Potato'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <VegCard data={{imgSrc:img9, price:'Rs120', title:'adish'}}/>
            </SwiperSlide>
        </Swiper>
       
    </div>
  )
}
