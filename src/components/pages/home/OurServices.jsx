import sRight from "@/assets/images/section-right.png";
import { default as s1, default as s4 } from "@/assets/images/service-1.png";
import s2 from "@/assets/images/service-2.png";
import s3 from "@/assets/images/service-3.png";
import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  // Array of service data
  const services = [
    {
      id: 2,
      image: s2,
      alt: "property sell",
      title: "Land Sale",
      description:
        "We assist landowners in selling their properties with a seamless process and competitive market pricing. Our extensive network and industry expertise ensure optimal returns on every transaction.",
      link: "/how-we-work",
    },
    {
      id: 1,
      image: s1,
      alt: "property buy",
      title: "Land Accusation",
      description:
        "We identify and acquire prime land, ensuring maximum value and strategic growth for the community. Our expert team conducts thorough assessments to secure the best deals for landowners.",
      link: "/how-we-work",
    },
    
    {
      id: 3,
      image: s3,
      alt: "property sell",
      title: "Development",
      description:
        "From concept to completion, we specialize in transforming land into thriving developments. Our team manages planning, design, and construction to create sustainable and high-quality projects.",
      link: "/how-we-work",
    },
    {
      id: 4,
      image: s4,
      alt: "property sell",
      title: "Permission for House",
      description:
        "We navigate the complex process of obtaining city approvals for residential developments. Our expertise ensures a smooth, hassle-free experience, meeting all legal and zoning requirements.",
      link: "/how-we-work",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Services</h2>
          <p className="text-muted">
            Comprehensive Land & Property Solutions with Incredible Top Notch
            Services.
          </p>
        </div>

        <div className="row text-center position-relative z-1">
          {/* Map through the services array */}
          {services.map((service) => (
            <div className="col-md-6 col-lg-3" key={service.id}>
              <div className="service-item">
                <div className="icon mb-3">
                  <Image src={service.image} alt={service.alt} />
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted my-2">{service.description}</p>
                <Link href={service.link} className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="right-img">
          <Image src={sRight} alt="right-img" />
        </div>
      </div>
    </section>
  );
}