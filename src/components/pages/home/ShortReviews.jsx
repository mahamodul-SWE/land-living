
import bg from "@/assets/images/testimonial-banner-min.jpg"
import Image from "next/image"

export default function ShortReviews() {

  return (
    <section className="testimonials-section">
      <Image
        src={bg}
        alt="background"
        className="bg-image"
        sizes="100vw"
        quality={100}
        fill
        placeholder="blur"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="container">
        <div className="section-top">
          <h3 className="section-title">Success Stories from Our Clients</h3>
          <p className="section-subtitle">The only thing matters to us!</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-item">
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </figure>
              <p className="user-name">James R. – Smooth & Profitable Experience</p>
              {/* <p className="profession">Doctor</p> */}
              <p className="user-review">
                "Selling my land to Land Profits was a seamless experience. Their team handled everything with transparency and professionalism, ensuring I got the best value for my property. The entire process was stress-free, and I felt confident in every step. Highly recommend!"
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-item">
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </figure>
              <p className="user-name">Sarah L. – Exceptional Service & Fair Pricing</p>
              {/* <p className="profession">Doctor</p> */}
              <p className="user-review">
              "I was unsure about selling my land, but Land Profits guided me through the process with expert advice and market insights. They offered a fair price and took care of all the paperwork, making the transaction quick and hassle-free. A truly outstanding team!"

              </p>
            </div>
          </div>
        </div>
        <div className="section-bottom">
          <div className="slider-pagination">
            <span className="slider-pagination-item active"></span>
            <span className="slider-pagination-item"></span>
            <span className="slider-pagination-item"></span>
          </div>
          <a href="#" className="load-more ll-btn-primary">See full review</a>
        </div>
      </div>
    </section>
  )
}