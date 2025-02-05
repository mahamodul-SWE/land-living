import about from "@/assets/images/about.jpg";
import commitment from "@/assets/images/commitment.jpg";
import mission from "@/assets/images/mission.jpeg";
import Image from "next/image";
import Link from "next/link";
export default function About() {

  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5">
            <Image
              src={about}
              alt="placeholder"
              className="about-img"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">About Us & Who We Are</h2>
            <p>
              We are a dynamic and innovative land brokerage firm committed to providing the best solutions for buying and selling land. With a team of experts in real estate, land development, and property management, we help clients navigate the market with confidence, ensuring seamless transactions and maximum value.
            </p>
            <Link href="/about" className="ll-btn-primary">Learn More</Link>
          </div>
        </div>

        <div className="row align-items-center mt-3 flex-xl-row-reverse">
          <div className="col-xl-6 mb-5">
            <Image
              src={mission}
              alt="placeholder"
              className="about-img"
            />
          </div>

          <div className="col-xl-6">
            <h2 className="section-title">In Search of Land</h2>
            <p>
              Land & Living is always seeking new land opportunities. We specialize in acquiring potential land deals without planning permission in the South East of England but also consider sites with planning approval for development and construction. No project is too big or small—if you have land or a site and would like a free, no-obligation assessment, feel free to reach out. We’d love to hear from you!

            </p>
            <p>
              With a trusted network across the property development industry, we leverage deep market insights to evaluate every site effectively. Our commitment is to collaborate closely with landowners and agents across the UK to create sustainable developments where people want to live.
            </p>
            <p>
              We work diligently with vendors to maximize land value while tailoring transactions to align with their unique needs and aspirations.
            </p>

          </div>
        </div>

        <div className="row align-items-center mt-3">
          <div className="col-xl-6 mb-5">
            <Image
              src={mission}
              alt="placeholder"
              className="about-img"
            />
          </div>
          <div className="col-xl-6">
            <h2 className="section-title">Mission and vision</h2>
            <p>
              At Land & Living, our vision is to provide exceptional service by prioritizing strong relationships and community impact. We carefully assess each plot’s suitability, considering landowners' goals and the broader community’s needs.
            </p>
            <p>
              With a trusted network across the property development industry, we leverage deep market insights to evaluate every site effectively. Our commitment is to collaborate closely with landowners and agents across the UK to create sustainable developments where people want to live.
            </p>
            <p>
              We work diligently with vendors to maximize land value while tailoring transactions to align with their unique needs and aspirations.
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
                <strong><u>Client Satisfaction</u> : </strong>
                We prioritize client satisfaction by understanding their needs
                and delivering beyond expectations.
              </p>
              <p className="commitment">
                <strong><u>Top-Notch Services</u> : </strong>
                Our commitment is to provide exceptional, high-quality services with precision and reliability.
              </p>
              <p className="commitment">
                <strong><u>Maximizing Land Value </u>: </strong>
                we are committed to ensuring our clients receive the maximum value for their land. We carefully assess each site, leveraging market expertise and industry connections to secure the best possible deal. Our goal is to create a seamless and rewarding experience tailored to each landowner's needs.
              </p>
            </div>
            {/* <Link href="/about" className="ll-btn-primary">Learn More</Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}