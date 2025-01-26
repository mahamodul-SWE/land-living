
import test4 from "@/assets/images/test4.png"
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
          <h3 className="section-title">Testimonials</h3>
          <p className="section-subtitle">The only thing matters to us!</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-item">
              <figure>
                <Image src={test4} alt="user1" />
              </figure>
              <p className="user-name">John Doe</p>
              <p className="profession">Doctor</p>
              <p className="user-review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, arcu id viverra tristique, quam velit semper dolor, id
                maximus enim velit non velit. Donec vel turpis at arcu
                condimentum pulvinar.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-item">
              <figure>
                <Image src={test4} alt="user1" />
              </figure>
              <p className="user-name">John Doe</p>
              <p className="profession">Doctor</p>
              <p className="user-review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, arcu id viverra tristique, quam velit semper dolor, id
                maximus enim velit non velit. Donec vel turpis at arcu
                condimentum pulvinar.
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