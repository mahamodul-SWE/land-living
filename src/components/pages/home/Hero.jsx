
import slider1 from "@/assets/images/slider-1.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  return (
    <div className="hero-home">

      {/* <!-- slider image --> */}
      <div className="slider-image-div">
        {/* <!-- slider progress --> */}
        <div className="slider-progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "100%" }}
          ></div>
        </div>
        <Image
          src={slider1}
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
              <h4 className="card-title">
                Unlock the <span className="heigh-light">Hidden Value</span> <br />
                 of Your Land
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
        <span className="slider-pagination-item active"></span>
        <span className="slider-pagination-item"></span>
        <span className="slider-pagination-item"></span>
      </div>

    </div>
  )
}