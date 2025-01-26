
import slider1 from "@/assets/images/slider-1.jpg";
import Image from "next/image";

export default function Hero() {

  return (
    <div className="hero-home">
        <div className="container">
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
            <Image src={slider1} alt="placeholder" />
          </div>

          {/* <!-- hero content --> */}
          <div className="hero-content">
            <div className="card real-estate-card">
              <div className="card-body">
                <h5 className="card-price">$1 200 000</h5>
                <h4 className="card-title">550 W 51 Te, Miami Beach FL</h4>
                <p className="card-text">
                  What can be more exciting than a combination of modern
                  architecture with traditional supplies and techniques?
                </p>
              </div>

              <div className="card-footer">
                <div className="card-details">
                  <span>
                    <i className="bi bi-house-door"></i> 3
                  </span>
                  <span>
                    <i className="bi bi-bathtub"></i> 2
                  </span>
                  <span>
                    <i className="bi bi-car-front"></i> 2
                  </span>
                </div>
                <p className="card-size">1 689 Sq Ft</p>
                <a href="#" className="btn btn-warning card-btn">
                  DETAILS
                </a>
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
      </div>
  )
}