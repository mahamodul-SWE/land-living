"use client";

import slider1 from "@/assets/images/hero-slider-1.jpg";
import slider2 from "@/assets/images/hero-slider-2.jpg";
import slider3 from "@/assets/images/hero-slider-3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliders = [
  {
    image: slider1,
    title: (
      <>
        Build Your <span className="highlight">Dream Home</span> <br />
        Reach Us, and we will do the rest
      </>
    ),
    caption: `Beautiful Lake View`,
  },
  {
    image: slider2,
    title: (
      <>
        Build Your <span className="highlight">Dream Home</span> <br />
        Reach Us, and we will do the rest
      </>
    ),
    caption: `Amazing Street View`,
  },
  {
    image: slider3,
    title: (
      <>
        Sell Your land With <span className="highlight">maximized value.</span>
      </>
    ),
    caption: `Land Picture`,
  },
];

export default function Hero() {
  const progressValues = useRef(new Map());

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressValues.current.get(s.activeIndex)?.style.setProperty(
      "width",
      `${(1 - progress) * 100}%`
    );
  };

  return (
    <Swiper
      spaceBetween={30}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{
        clickable: true,

      }}
      modules={[Autoplay, Pagination]}
      className="hero-home"
      onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index}>
         
          <div className="slider-image-div">
            <Image
              src={slide.image}
              alt="placeholder"
              quality={80} // Reduced from 100 for performance
              placeholder="blur"
              priority
            />
          </div>
          <div className="hero-content">
          <div className="slider-progress">
            <div
              className="progress-bar"
              ref={(el) => progressValues.current.set(index, el)}
            ></div>
          </div>
            <div className="container position-relative">
              <div className="card real-estate-card">
                <div className="card-body">
                  <h4 className="card-title">{slide.title}</h4>
                  <p className="card-text">
                    Build Your Dream Home, Reach Us, and we will do the rest.
                  </p>
                  <Link href="/contact" className="ll-btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
