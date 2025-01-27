import aboutImg from "@/assets/images/mission.jpeg";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

export const metadata = {
  title: "How We Work || Land Living",
  description:
    "We are a dynamic, innovative, and dedicated agency that specializes in providing the best possible solutions to our clients real estate needs. Our team is made up of experts in various fields, including architecture, interior design, and property management.",
};
export default function HowWeWork() {
  return (
    <>
      <Breadcrumb title="How We Work" />
      {/* <!-- client satifaction--> */}
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center mt-3 flex-md-row-reverse">
            <div className="col-md-6 mb-5">
              <Image
                src={aboutImg}
                alt="placeholder"
                className="about-img"
                quality={100}
                placeholder="blur"
              />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">Client Satisfaction</h2>
              <p>
                We are a dynamic, innovative, and dedicated agency that
                specializes in providing the best possible solutions to our
                clients real estate needs. Our team is made up of experts in
                various fields, including architecture, interior design, and
                property management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container howWork">
          <div className="content">
            <h2 className="title">How We Work</h2>
            <p>
              Our process begins with understanding your needs and goals. We
              then work closely with you to develop a detailed project plan,
              ensuring that everything aligns with your vision and expectations.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- six step to implementation --> */}
      <section className="six-step-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="step">
                <div className="icon">01</div>
                <h4 className="playball-regular">Define Your Project</h4>
                <p>
                  We gather all the necessary information to create a detailed
                  project plan. This includes your location, budget, and goals.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="step">
                <div className="icon">02</div>
                <h4 className="playball-regular">Research and Select</h4>
                <p>
                  We research local properties, schools, and other relevant
                  factors to ensure a safe and enjoyable experience for your
                  clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="step">
                <div className="icon">03</div>
                <h4 className="playball-regular">Design and Plan</h4>
                <p>
                  We create a detailed plan that includes the layout, interior
                  design, and any necessary amenities for your clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="step">
                <div className="icon">04</div>
                <h4 className="playball-regular">Define Your Project</h4>
                <p>
                  We gather all the necessary information to create a detailed
                  project plan. This includes your location, budget, and goals.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="step">
                <div className="icon">05</div>
                <h4 className="playball-regular">Research and Select</h4>
                <p>
                  We research local properties, schools, and other relevant
                  factors to ensure a safe and enjoyable experience for your
                  clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="step">
                <div className="icon">06</div>
                <h4 className="playball-regular">Design and Plan</h4>
                <p>
                  We create a detailed plan that includes the layout, interior
                  design, and any necessary amenities for your clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- mission statement --> */}
      <section>
        <div className="container mission-statement">
          <div className="row align-items-center p-0">
            <div className="col-md-6 p-0">
              <div className="statement">
                <p>
                  We are a dynamic, innovative, and dedicated agency that
                  specializes in providing the best possible solutions to our
                  clients real estate needs. Our team is made up of experts in
                  various fields, including architecture, interior design, and
                  property management.
                </p>
                <h4 className="playball-regular">We are here to help</h4>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="statement">
                <p>
                  Our mission is to create a dynamic, innovative, and dedicated
                  agency that specializes in providing the best possible
                  solutions to our clients real estate needs. Our team is made
                  up of experts in various fields, including architecture,
                  interior design, and property management.
                </p>
                <h4 className="playball-regular">We are here to help</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
