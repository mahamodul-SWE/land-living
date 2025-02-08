

const developmentSteps = [
  {
    title: "Site Assessment",
    description:
      "We begin by evaluating the land’s potential to ensure it’s suitable for your development goals.",
    iconClass: "bi bi-geo-alt"
  },
  {
    title: "Planning & Zoning Approvals",
    description:
      "We assist with securing necessary planning permissions and zoning approvals from local authorities, ensuring full regulatory compliance.",
    iconClass: "bi bi-file-earmark-text"
  },
  {
    title: "Design & Planning",
    description:
      "Working with architects and designers, we create detailed plans that align with your vision and development needs.",
    iconClass: "bi bi-rulers"
  },
  {
    title: "Construction Management",
    description:
      "Our project managers oversee every stage of construction, ensuring quality, efficiency, and timely completion.",
    iconClass: "bi bi-hammer"
  },
  {
    title: "Legal Documentation",
    description:
      "We handle all required contracts, permits, and paperwork, ensuring transparency and a smooth process from start to finish.",
    iconClass: "bi bi-file-earmark-check"
  },
];

export default function HouseDevelopmentProcess() {
  return (
    <div className="house-development-container">
      <h1 className="title">Our House Development Process</h1>
      <div className="container">
        <div className="steps-container">
          {developmentSteps.map((step, index) => (
            <div key={index} className="step-card">
              <h2 className="step-title">
                <i className={step.iconClass + " icon"}></i> {step.title}
              </h2>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
