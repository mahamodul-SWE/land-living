
export default function FreeServices() {

  const freeServices = [
    {
      service: "Free Land Evaluation",
      description: "Get a no-obligation assessment of your land’s potential and market value.",
      icon: "bi-geo-alt"
    },
    {
      service: "Market Insights & Consultation",
      description: "Receive expert advice on market trends and investment opportunities.",
      icon: "bi-graph-up-arrow"
    },
    {
      service: "Planning & Zoning Guidance",
      description: "Understand local regulations and zoning requirements before selling or developing.",
      icon: "bi-map"
    },
    {
      service: "Buyer & Seller Matching",
      description: "Connect with the right buyers or sellers through our extensive network.",
      icon: "bi-people"
    },
    {
      service: "Legal & Documentation Support",
      description: "Get assistance in understanding paperwork, contracts, and legal requirements.",
      icon: "bi-file-earmark-text"
    },
    {
      service: "Development Feasibility Study",
      description: "Receive insights into the best use of your land for maximum profitability.",
      icon: "bi-bar-chart-line"
    }
  ];

  return (
    <section className="free-service-section">
      <div className="container">
        <div className="text-center">
        <h2 className="section-title">Free Additional Services</h2>
        </div>
        <div className="features-container">
          {
            freeServices.map(({ service, description, icon }, index) => (
              <div key={service} className="feature-item">
                <div className="icon">
                  <i className={`bi ${icon}`}></i>
                </div>
                <div>
                  <h3>{service} </h3>
                  <p>{description}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}