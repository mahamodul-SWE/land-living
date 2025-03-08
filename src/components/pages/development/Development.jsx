"use client"
import image1 from "@/assets/images/slider-1.jpg";
import image2 from "@/assets/images/slider-2.jpg";
import image3 from "@/assets/images/slider-3.jpg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const categories = [
  {
    name: "Residential Properties",
    images: [
      image1,
      image2,
      image3,
    ],
  },
  {
    name: "Commercial Properties",
    images: [
      image1,
      image2,
      image3,
    ],
  },
  {
    name: "Industrial Properties",
    images: [
      image1,
      image2,
      image3,
    ],
  },
];

export default function DevelopmentPage() {
  return (
    <div className="development-page">
      <div className="container">
        <div className="wrapper">
          <div className="title-container">
            <h1 className="section-title">Property Development Showcase</h1>
          </div>
          <div className="content-container">
            {categories.map((category) => (
              <div key={category.name} className="category">
                <h2 className="category-title">
                  <i className="bi bi-card-list"></i> {category.name}
                </h2>
                <div className="swiper-container">
                  <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay className="project-slide">
                    {category.images.map((image, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <Image
                          src={image}
                          alt={`${category.name} Slide ${index + 1}`}
                          className="slide-image"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
