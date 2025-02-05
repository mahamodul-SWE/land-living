
"use client"

import slider1 from "@/assets/images/hero-slider-1.jpg";
import slider2 from "@/assets/images/hero-slider-2.jpg";
import slider3 from "@/assets/images/hero-slider-3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const sliders = [
  {
    image: slider1,
    title: `Build Your <span class="heigh-light">Dream Home</span> <br />
      Reach Us, and we will do the rest`,
    caption: `Beautiful Lake View`,
  },
  {
    image: slider2,
    title: `Build Your <span class="heigh-light">Dream Home</span> <br />
      Reach Us, and we will do the rest`,
    caption: `Amazing Street View`,
  },
  {
    image: slider3,
    title: `Sell Your land With <span class="heigh-light"> maximized value.</span>`,
    caption: `Land Picture`,
  },

]

export default function Hero() {

  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => prev === sliders.length - 1 ? 0 : prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])


  const handleClick = (value) => {
    setProgress(value)
    setActive(value)
  }

  console.log(progress)

  return (
    <div className="hero-home">
      {/* <!-- slider progress --> */}
      <div className="slider-progress">
        <div
          className={`progress-bar `}
          role="progressbar"
          style={{ width: `${100}%` }}
        ></div>
      </div>

      {/* <!-- slider image --> */}
      <div className="slider-image-div">
        <Image
          src={sliders[active].image}
          alt="placeholder"
          quality={100}
          placeholder="blur"
          priority
        />
      </div>

      {/* <!-- hero content --> */}
      <div className="container position-relative h-100">
        <div className="hero-content">
          <div className="card real-estate-card">
            <div className="card-body">
              {/* <h5 className="card-price">$1 200 000</h5> */}
              <h4 className="card-title" dangerouslySetInnerHTML={{
                __html: sliders[active].title,
              }}>

              </h4>
              <p className="card-text">
                Build Your Dream Home, Reach Us, and we will do the rest.
              </p>
              <Link href="#" className="ll-btn-primary">
                Contact Us
              </Link>
            </div>


          </div>
        </div>
      </div>

      {/* <!-- slider pagination --> */}
      <div className="slider-pagination">
        {
          sliders.map((slide, index) => (
            <span
              key={index}
              className={`slider-pagination-item ${index === active ? "active" : ""}`}
              onClick={() => handleClick(index)}
            ></span>
          ))
        }

      </div>

    </div>
  )
}