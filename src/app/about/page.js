import commitment from "@/assets/images/commitment.jpg";
import review from "@/assets/images/review.jpg";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

export const metadata = {
  title: "About Us || Land Living",
  description:
    "Discover the story behind Land & Living, a leading property management company specializing in land acquisition, development, and securing planning permissions.",
};
export default function About() {
  return (
    <div>
      <Breadcrumb title="About Us" bgImage={review} />
      <div className="">
        <div className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="section-title">Mission And Vision</h2>
                <p>
                  At Land & Living, we specialize in unlocking the full
                  potential of your land, ensuring you get the best value for
                  your property. Whether you’re looking to sell, explore
                  development opportunities, or secure planning permissions, our
                  expert team provides a smooth and efficient process every step
                  of the way. we expertised in land acquisition, property
                  development, and creating sustainable living spaces. Our team
                  of experts combines years of industry experience, in-depth
                  market knowledge, and a passion for transforming land into
                  thriving communities. Whether you are a landowner looking to
                  sell your property, an investor seeking opportunities, or
                  someone with a development vision, we’re here to guide you
                  through every step of the process.
                </p>
                <p>
                  our approach is simple: Maximize Value, Deliver Quality, and
                  Ensure Seamless Processing. We prioritize long-term
                  relationships with our clients, offering transparent,
                  efficient, and tailored solutions. From land acquisition to
                  securing planning permissions and managing construction, we
                  handle every step with care and professionalism.
                </p>
                <p>
                  We believe every piece of land holds potential. Our mission is
                  to unlock that potential, whether for small plots or
                  large-scale developments, creating lasting value and enhancing
                  communities.
                </p>
                <p>
                  We don’t just buy and sell land—we transform it. With
                  strategic planning, strong industry connections, and a
                  commitment to sustainable development, we help turn properties
                  into thriving communities.
                </p>
                <p>
                  Let us help you unlock your land&apos;s true value. Contact us
                  today for a free consultation!
                </p>
              </div>
            </div>

            <div className="row align-items-center mt-3 flex-xl-row-reverse">
              <div className="col-xl-6 mb-5">
                <Image
                  src={commitment}
                  alt="placeholder"
                  className="about-img"
                />
              </div>
              <div className="col-xl-6">
                <div>
                  <h2 className="mb-3 section-title">Our Commitment</h2>
                  <p className="commitment">
                    <strong>
                      <u>Client Satisfaction</u> :{" "}
                    </strong>
                    We prioritize client satisfaction by understanding their
                    needs and delivering beyond expectations.
                  </p>
                  <p className="commitment">
                    <strong>
                      <u>Top-Notch Services</u> :{" "}
                    </strong>
                    Our commitment is to provide exceptional, high-quality
                    services with precision and reliability.
                  </p>
                  <p className="commitment">
                    <strong>
                      <u>Maximizing Land Value </u>:{" "}
                    </strong>
                    we are committed to ensuring our clients receive the maximum
                    value for their land. We carefully assess each site,
                    leveraging market expertise and industry connections to
                    secure the best possible deal. Our goal is to create a
                    seamless and rewarding experience tailored to each
                    landowner&apos;s needs.
                  </p>
                </div>
                {/* <Link href="/about" className="ll-btn-primary">Learn More</Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="comprehensive">
          <div className="text-center mb-4">
            <h3 className="section-title">Comprehensive Services We Offer</h3>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 image-section">
                <Image src={review} alt="Real Estate" className="" />
              </div>
              <div className="col-lg-6 info-box">
                <div className="info-item">
                  <i class="bi bi-pin-map-fill icon"></i>
                  <div>
                    <h5>Land Acquisition and Sale</h5>
                    <p>
                      Assisting landowners in selling their land at the best
                      possible value through a smooth, transparent, and
                      hassle-free process. If you’re looking to buy land for
                      your dream home, we ensure seamless transactions with
                      expert guidance at every step.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="bi bi-buildings icon"></i>
                  <div>
                    <h5>Property Development</h5>
                    <p>
                      Taking your land and transforming it into high-quality,
                      sustainable developments.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="bi bi-map icon"></i>
                  <div>
                    <h5>Planning & Approvals</h5>
                    <p>
                      Assisting with obtaining planning permission and necessary
                      approvals, ensuring the project progresses smoothly.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <i class="bi bi-microsoft-teams icon"></i>
                  <div>
                    <h5>Construction Management</h5>
                    <p>
                      Overseeing the entire construction process, ensuring
                      quality, compliance, and timely completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
