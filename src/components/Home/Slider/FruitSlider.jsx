import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FruitVeg.css';
import FruitCard from './FruitCard';

import img1 from './FruitsList/apple.jpg'
import img2 from './FruitsList/banana.jpg'
import img3 from './FruitsList/Berry.jpg'
import img4 from './FruitsList/Grapes.jpg'
import img5 from './FruitsList/Avocado.jpg'
import img6 from './FruitsList/Cherry.jpg'
import img7 from './FruitsList/Kiwi.jpg'
import img8 from './FruitsList/Mulberry.jpg'
import img9 from './FruitsList/Strawberry.jpg'

export default function FruitSlider() {
  return (
    <div className="container py-4 px-4 justify-content-center ">
        <h2>Fresh & Best Quality Fruits ! </h2>
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
                <FruitCard data={{imgSrc:img1, price:'Rs120', title:'Apple'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <FruitCard data={{imgSrc:img2, price:'Rs120', title:'Banana'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <FruitCard data={{imgSrc:img3, price:'Rs120', title:'Berry'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <FruitCard data={{imgSrc:img4, price:'Rs120', title:'Grapes'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <FruitCard data={{imgSrc:img5, price:'Rs120', title:'Avocado'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <FruitCard data={{imgSrc:img6, price:'Rs120', title:'Cherry'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <FruitCard data={{imgSrc:img7, price:'Rs120', title:'Kiwi'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <FruitCard data={{imgSrc:img8, price:'Rs120', title:'Mulberry'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <FruitCard data={{imgSrc:img9, price:'Rs120', title:'Strawberry'}}/>
            </SwiperSlide>
        </Swiper>
       
    </div>
  )
}
