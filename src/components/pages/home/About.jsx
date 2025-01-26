import about from "@/assets/images/about.jpg"
import mission from "@/assets/images/mission.jpeg"
import Image from "next/image"
export default function About() {

  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5">
            <Image
              src={about}
              alt="placeholder"
              className="about-img"
            />
          </div>
          <div className="col-md-6">
            <h2 className="section-title">About Our Real Estate Agency</h2>
            <p>
              We are a dynamic, innovative, and dedicated agency that
              specializes in providing the best possible solutions to our
              clients' real estate needs. Our team is made up of experts in
              various fields, including architecture, interior design, and
              property management.
            </p>
            <a href="#" className="ll-btn-primary">Learn More</a>
          </div>
        </div>

        <div className="row align-items-center mt-3 flex-md-row-reverse">
          <div className="col-md-6 mb-5">
            <Image
              src={mission}
              alt="placeholder"
              className="about-img"
            />
          </div>
          <div className="col-md-6">
            <h2 className="section-title">Mission and vision</h2>
            <p>
              We are a dynamic, innovative, and dedicated agency that
              specializes in providing the best possible solutions to our
              clients' real estate needs. Our team is made up of experts in
              various fields, including architecture, interior design, and
              property management.
            </p>
            <div>
              <h2 className="mb-3">Our Commitment</h2>
              <p className="commitment">
                <strong>Client Satisfaction:</strong>
                We prioritize client satisfaction by understanding their needs
                and delivering beyond expectations.
              </p>
              <p className="commitment">
                <strong>Top-Notch Services:</strong>
                Our commitment is to provide exceptional, high-quality services
                with precision and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}