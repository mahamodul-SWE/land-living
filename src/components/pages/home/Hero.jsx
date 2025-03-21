"use client";

import slider3 from "@/assets/images/approval_2.jpg";
import slider1 from "@/assets/images/Hero-land-1.jpg";
import slider2 from "@/assets/images/hero-land-2.jpeg";
import slider4 from "@/assets/images/hero-slider-2.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliders = [
  {
    id: "hero-slide-1",
    image: <Image
      src={slider1}
      alt="placeholder"
      quality={80} // Reduced from 100 for performance
      placeholder="blur"
      priority
      style={{
        objectFit: "cover",
      }}
    />,
    title: (
      <>
        Sell Your land With <br />
        <span className="highlight">maximized value.</span>
      </>
    ),
    description: <>
      Turn your land into a valuable opportunity with our <br />  expert guidance. We ensure seamless transactions, <br />  top market value, and sustainable development.
    </>,
    caption: `Land Picture`,
  },

  {
    id: "hero-slide-2",
    image: <Image
      src={slider2}
      alt="placeholder"
      quality={80} // Reduced from 100 for performance
      placeholder="blur"
      priority
      style={{
        objectFit: "cover",

      }}
    />,
    title: (
      <>
        Seamless  <span className="highlight">Land Transactions</span>
      </>
    ),
    description: <>
      Experience a hassle-free buying and selling process with our expert guidance. We ensure smooth, transparent, and secure land transactions, maximizing value for both buyers and sellers
    </>,
    caption: `Amazing Street View`,
  },

  {
    id: "hero-slide-3",
    image: <Image
      src={slider4}
      alt="placeholder"
      quality={80} // Reduced from 100 for performance
      placeholder="blur"
      priority
      style={{
        objectFit: "cover",
        objectPosition: "50% 80%"
      }}
    />,
    title: (
      <>
        Build Your <span className="highlight">Dream Home</span> <br />
        Reach Us, and we will do the rest
      </>
    ),
    description: " From planning to construction, we handle every step of your home development journey. Trust us to create a seamless, hassle-free experience tailored to your vision.",
    caption: `Beautiful Lake View`,
  },
  {
    id: "hero-slide-4",
    image: <Image
      src={slider3}
      alt="placeholder"
      quality={80} // Reduced from 100 for performance
      placeholder="blur"
      priority

    />,
    title: (
      <>
        Hassle-Free  <span className="highlight">Permissions & Approvals</span>
      </>
    ),
    description: "We manage the entire approval process, securing permits and meeting all legal requirements for your project. Let us handle the paperwork while you focus on your vision.",
    caption: `Beautiful Lake View`,
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
        <SwiperSlide key={slide.id}>

          <div className="slider-image-div">
            {slide.image}
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
                    {slide.description}
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
