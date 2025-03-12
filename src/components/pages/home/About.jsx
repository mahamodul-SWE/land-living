import about from "@/assets/images/About_us-1.png";
import commitment from "@/assets/images/commitment.jpg";
import inSearch from "@/assets/images/inSearch.jpg";
import mission from "@/assets/images/mission.jpg";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  // Array of about sections
  const aboutSections = [
    {
      id: "about-sec-1",
      image: about,
      alt: "About Us",
      title: "About Us & Who We Are",
      content: (
        <p>
          We are a dynamic and innovative land brokerage firm committed to providing the best solutions for buying and selling land. With a team of experts in real estate, land development, and property management, we help clients navigate the market with confidence, ensuring seamless transactions and maximum value.
        </p>
      ),
      link: "/about",
      linkText: "Learn More",
      reverse: false,
    },
    {
      id: "about-sec-2",
      image: inSearch,
      alt: "In Search of Land",
      title: "In Search of Land: Buy and Sale",
      content: (
        <>
          <p>
            Looking to sell your land? We make the process simple, transparent, and rewarding. For landowners, we ensure maximum value by providing fair offers and a hassle-free selling experience. For buyers, we help identify the perfect plot for investment or development, backed by expert market analysis and competitive pricing. Our team handles all legal paperwork, due diligence, and negotiations, ensuring a smooth transaction from start to finish.
          </p>
          <p>
            With our strong industry network, we connect sellers with the right buyers with prime opportunities.
          </p>
          <p>
            We work diligently with vendors to maximize land value while tailoring transactions to align with their unique needs and aspirations.
          </p>
        </>
      ),
      reverse: true,
    },
    {
      id: "about-sec-3",
      image: mission,
      alt: "Mission and Vision",
      title: "Mission and Vision",
      content: (
        <>
          <p className="mb-3">
            At <strong>Land & Build</strong>, our mission is to provide seamless, transparent, and value-driven land buying and selling services. We strive to maximize opportunities for landowners and investors by offering expert guidance, fair valuations, and efficient transactions. When assessing land suitability, we consider the owner’s goals and community impact to ensure responsible and beneficial development.
          </p>
          <p className="mb-3">
            Our vision is to lead in land acquisition, sales, and development, bridging landowners and developers with integrity and innovation. We create sustainable spaces where people can live, work, and thrive.
          </p>
          <p className="mb-3">
            We work diligently with vendors to maximize land value while tailoring transactions to align with their unique needs and aspirations.
          </p>
        </>
      ),
      reverse: false, // Default layout (image on the left)
    },
    {
      id: "about-sec-4",
      image: commitment,
      alt: "Our Commitment",
      title: "Our Commitment",
      content: (
        <>
          <p className="commitment">
            <strong><u>Maximizing Land Value</u>: </strong>
            We are committed to ensuring our clients receive the maximum value for their land. We carefully assess each site, leveraging market expertise and industry connections to secure the best possible deal. Our goal is to create a seamless and rewarding experience tailored to each landowner's needs.
          </p>
          <p className="commitment">
            <strong><u>Client Satisfaction</u>: </strong>
            We prioritize client satisfaction by understanding their needs and delivering beyond expectations.
          </p>
          <p className="commitment">
            <strong><u>Top-Notch Services</u>: </strong>
            Our commitment is to provide exceptional, high-quality services with precision and reliability.
          </p>
        </>
      ),
      reverse: true,
    },
  ];

  return (
    <section className="about-section">
      <div className="container">
        {/* Map through the aboutSections array */}
        {aboutSections.map((section) => (
          <div
            key={section.id}
            className={`row align-items-center mt-3 ${section.reverse ? "flex-xl-row-reverse" : ""}`}
          >
            <div className="col-xl-6 mb-5">
              <Image
                src={section.image}
                alt={section.alt}
                className="about-img"
              />
            </div>
            <div className="col-xl-6">
              <h2 className="section-title">{section.title}</h2>
              {section.content}
              {section.link && (
                <Link href={section.link} className="ll-btn-primary">
                  {section.linkText}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}