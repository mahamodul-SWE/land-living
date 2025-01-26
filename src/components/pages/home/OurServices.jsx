import sRight from "@/assets/images/section-right.png";
import { default as s1, default as s4 } from "@/assets/images/service-1.png";
import s2 from "@/assets/images/service-2.png";
import s3 from "@/assets/images/service-3.png";
import Image from "next/image";

export default function OurServices() {

  return (
    <section className="services-section">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="section-title">Our Services</h2>
        <p className="text-muted">We’ll Find It, Fix It And Make It Your Home.</p>
      </div>

      <div className="row text-center position-relative z-1">
        {/* <!-- Service Item --> */}
        <div className="col-md-6 col-lg-3">
          <div className="service-item">
            <div className="icon mb-3">
              <Image src={s1} alt="property buy" />
            </div>
            <h5 className="fw-bold">Property To Buy</h5>
            <p className="text-muted my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>

        {/* <!-- Repeat for each service --> */}
        <div className="col-md-6 col-lg-3">
          <div className="service-item">
            <div className="icon mb-3">
              <Image src={s2} alt="property sell" />
            </div>
            <h5 className="fw-bold">Property To Sell</h5>
            <p className="text-muted my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="service-item">
            <div className="icon mb-3">
              <Image src={s3} alt="property sell" />
            </div>
            <h5 className="fw-bold">Property To Rent</h5>
            <p className="text-muted my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="service-item">
            <div className="icon mb-3">
              <Image src={s4} alt="property sell" />
            </div>
            <h5 className="fw-bold">Property Lease</h5>
            <p className="text-muted my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </div>

      <div className="right-img">
        <Image src={sRight} alt="right-img" />
      </div>
    </div>
  </section>
  )
}