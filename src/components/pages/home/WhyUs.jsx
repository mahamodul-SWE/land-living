import whyUs1 from "@/assets/images/why-us-1.jpg";
import whyUs2 from "@/assets/images/why-us-2.webp";
import Image from "next/image";
export default function WhyUs() {
  const WhyUsData = [
    {
      title: "Expertise & Market Knowledge",
      description: "Our industry experience ensures accurate valuations, strategic insights, and seamless transactions.",
      image: whyUs1
    },
    {
      title: "Maximizing Land Value",
      description: "We leverage market trends and industry connections to secure the highest possible returns for your land.",
      image: whyUs2
    },
    {
      title: "Top-Notch Services",
      description: "From consultation to final execution, we provide exceptional service at every stage of the buying, selling, and development process.",
      image: whyUs1
    },
    {
      title: "Best Development Services",
      description: "Our expert team transforms land into high-quality, sustainable developments, ensuring long-term value and community growth.",
      image: whyUs1
    },
    {
      title: "End-to-End Solutions",
      description: "We handle everything, including acquisition, development, and planning permissions, for a hassle-free experience.",
      image: whyUs2
    },
    {
      title: "Tailored Approach",
      description: "We customize transactions to align with each landowner’s goals, ensuring the best outcome for their property.",
      image: whyUs1
    },
    {
      title: "Commitment to Sustainability",
      description: "Our developments focus on responsible growth, creating thriving communities for the future.",
      image: whyUs1
    },
    {
      title: "Smooth Processing with Transparency",
      description: "We ensure a hassle-free experience with clear communication and honest dealings at every step.",
      image: whyUs1
    }
  ];


  return (
    <section className="our_team_sec">
      <div className="container">
        <div className="text-center">
          <h3 className="section-title">
          Why Land & Living
          </h3>
        </div>
        <div className="our_team_container">
          {
            WhyUsData.map(({title, description, image}, index) => (
              <div className="team" key={title}>
                <figure>
                  <Image src={image} alt="Management team"/>
                </figure>

                <div className="team_body">
                  <h3 className="team_count">{title}</h3>
                  <p className="team_name">{description}</p>
                </div>

              </div>
            ))
          }
          
        </div>
      </div>
    </section>

  )
}