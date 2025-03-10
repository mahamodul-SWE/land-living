export default function WhyUs() {
  const WhyUsData = [
    {
      title: "Expertise & Market Knowledge",
      description: "Our industry experience ensures accurate valuations, strategic insights, and seamless transactions.",
      image: "expertise.jpg",
      icon: "bi bi-bar-chart-line"
    },
    {
      title: "Maximizing Land Value",
      description: "We leverage market trends and industry connections to secure the highest possible returns for your land.",
      image: "maximizing-value.jpg",
      icon: "bi bi-graph-up-arrow"
    },
    {
      title: "Top-Notch Services",
      description: "From consultation to final execution, we provide exceptional service at every stage of the buying, selling, and development process.",
      image: "top-notch-services.jpg",
      icon: "bi bi-trophy"
    },
    {
      title: "Best Development Services",
      description: "Our expert team transforms land into high-quality, sustainable developments, ensuring long-term value and community growth.",
      image: "best-development.jpg",
      icon: "bi bi-building"
    },
    {
      title: "End-to-End Solutions",
      description: "We handle everything, including acquisition, development, and planning permissions, for a hassle-free experience.",
      image: "end-to-end-solutions.jpg",
      icon: "bi bi-diagram-3"
    },
    {
      title: "Tailored Approach",
      description: "We customize transactions to align with each landowner’s goals, ensuring the best outcome for their property.",
      image: "tailored-approach.jpg",
      icon: "bi bi-sliders"
    },
    {
      title: "Commitment to Sustainability",
      description: "Our developments focus on responsible growth, creating thriving communities for the future.",
      image: "sustainability.jpg",
      icon: "bi bi-flower1"
    },
    {
      title: "Smooth Processing with Transparency",
      description: "We ensure a hassle-free experience with clear communication and honest dealings at every step.",
      image: "smooth-processing.jpg",
      icon: "bi bi-check2-circle"
    }
  ];

  return (
    <section className="our_team_sec">
      <div className="container">
        <div className="text-center">
          <h3 className="section-title">
            Why Land & Build
          </h3>
        </div>
        <div className="our_team_container">
          {
            WhyUsData.map(({ title, description, icon }, index) => (
              <div className="team" key={title}>
                <div className="team_body">
                <div className="text-center">
                  <i className={icon}></i>
                </div>
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