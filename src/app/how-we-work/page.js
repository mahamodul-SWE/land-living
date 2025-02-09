import howWeWork from "@/assets/images/howWork.jpeg";
import aboutImg from "@/assets/images/mission.jpeg";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

export const metadata = {
  title: "How We Work || Land Living",
  description:
    "We are a dynamic, innovative, and dedicated agency that specializes in providing the best possible solutions to our clients real estate needs. Our team is made up of experts in various fields, including architecture, interior design, and property management.",
};
export default function HowWeWork() {
  const services = [
    {
      title: "Unlock Maximum Land Value",
      description:
        "At Land & Living, we specialize in identifying and acquiring prime land opportunities. Our experienced team evaluates each plot based on location, potential, and market trends to ensure maximum value. We offer a smooth, transparent process, from initial consultation to final transaction, making sure that landowners receive the best offer for their property. Whether you're looking to sell land with or without planning permission, we help guide you through every step with confidence. Just reach out to us, and we’ll handle the rest.",
      image: aboutImg,
    },
    {
      title: "Transforming Vision into Reality",
      description:
        "We bring our customer's potential to life through expert development services. From concept to completion, our team manages every phase of the development process, including design, planning, and construction. We work closely with architects, engineers, and contractors to create high-quality, sustainable properties that meet community needs and your vision. Our focus is on delivering exceptional developments that maximize land value while creating lasting, positive impacts on the surrounding area.",
      image: howWeWork,
    },
    {
      title: "Hassle-Free Approvals & Permits",
      description:
        "Navigating planning and zoning regulations can be complex, but our team simplifies the process. We assist our customers in obtaining the necessary approvals and permits from local authorities to ensure smooth development. From securing planning permission to managing environmental assessments, we handle all aspects of the approval process. With our in-depth knowledge of local regulations and strong relationships with municipal authorities, we ensure that your project progresses without delays or hurdles.",
      image: howWeWork,
    },
  ];

  console.log(services);

  return (
    <>
      <Breadcrumb title="How We Work" bgImage={howWeWork} />
      {/* <!-- client satifaction--> */}

      <section className="about-section py-5 howWorkPage">
        <div className="text-center mb-4">
          <h2 className="section-title">
            Our Seamless Process: Land Acquisition, Development, and Approvals
          </h2>
        </div>
        <div className="container">
          {services.map((service, index) => (
            <div
              key={index}
              className={`row align-items-center mt-5 ${
                index % 2 !== 1 ? "flex-lg-row-reverse" : ""
              }`}
            >
              <div className="col-lg-6 mb-4">
                <Image
                  src={service.image}
                  alt="placeholder"
                  className="about-img"
                  quality={100}
                  placeholder="blur"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="section-title">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
    </>
  );
}
