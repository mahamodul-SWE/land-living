import hassle from "@/assets/images/hassle.jpg";
import howWeWork from "@/assets/images/howWork.jpeg";
import transform from "@/assets/images/transform.jpg";
import unlock from "@/assets/images/unlock.jpg";
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
        "At Land & Build, we specialize in identifying and acquiring prime land opportunities. Our experienced team evaluates each plot based on location, potential, and market trends to ensure maximum value. We offer a smooth, transparent process, from initial consultation to final transaction, making sure that landowners receive the best offer for their property. Whether you're looking to sell land with or without planning permission, we help guide you through every step with confidence. Just reach out to us, and we’ll handle the rest.",
      image: unlock,
    },
    {
      title: "Transforming Vision into Reality",
      description:
        "We bring our customer's potential to life through expert development services. From concept to completion, our team manages every phase of the development process, including design, planning, and construction. We work closely with architects, engineers, and contractors to create high-quality, sustainable properties that meet community needs and your vision. Our focus is on delivering exceptional developments that maximize land value while creating lasting, positive impacts on the surrounding area.",
      image: transform,
    },
    {
      title: "Hassle-Free Approvals & Permits",
      description:
        "Navigating planning and zoning regulations can be complex, but our team simplifies the process. We assist our customers in obtaining the necessary approvals and permits from local authorities to ensure smooth development. From securing planning permission to managing environmental assessments, we handle all aspects of the approval process. With our in-depth knowledge of local regulations and strong relationships with municipal authorities, we ensure that your project progresses without delays or hurdles.",
      image: hassle,
    },
  ];

  // console.log(services);

  const steps = [
    {
      step: "Land Acquisition",
      description:
        "We start by identifying and acquiring the ideal land, ensuring it aligns with your project goals and investment strategy.",
      icon: "geo-alt-fill",
      color: "#2D9F89",
    },
    {
      step: "Define Your Project",
      description:
        "We gather all essential details to craft a comprehensive project plan, considering your location, budget, and objectives.",
      icon: "clipboard-data-fill",
      color: "#FFB806",
    },
    {
      step: "Approvals & Permits",
      description:
        "We handle all the necessary approvals and permits, ensuring that your project meets local zoning laws and regulatory requirements for a smooth development process.",
      icon: "file-earmark-check-fill",
      color: "#FF6F06",
    },
    {
      step: "Research & Selection",
      description:
        "We conduct thorough research on local properties, schools, and other key factors to ensure an optimal and enjoyable experience for your clients.",
      icon: "search",
      color: "#59CA00",
    },
    {
      step: "Design & Planning",
      description:
        "We develop a detailed design plan, outlining the layout, interior features, and any necessary amenities to meet your clients' needs.",
      icon: "pen-fill",
      color: "#007BFF",
    },
    {
      step: "Building & Delivering the Project",
      description:
        "Our expert team manages the construction process from start to finish, ensuring timely delivery, quality craftsmanship, and compliance with all regulations.",
      icon: "hammer",
      color: "#DC3545",
    },
  ];

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
      {/* <section className="six-step-section">
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
      </section> */}

      <section className="step-container-sec container">
        <div
          className="row row-cols-1 row-cols-lg-3 "
          style={{ height: "fit-content" }}
        >
          {/* <!-- Step 1 --> */}

          {/* <!-- Step 2 --> */}
          {steps?.map((step, ind) => (
            <div
              key={step.color}
              className={`col step-container step-container-${ind}`}
            >
              <h1 className="text-overlay ">{ind + 1}</h1>
              <div className="px-3 position-relative">
                <div className="border-dashed"></div>
                <div className="step-icon" style={{ background: step.color }}>
                  <i className={`bi bi-${step.icon}`}></i>
                </div>
                {/* <div className="border-dashed"></div> */}
                <div className="mt-4">
                  <h2 className="step-title">{step.step}</h2>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
