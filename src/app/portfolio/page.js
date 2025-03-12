import product2 from "@/assets/images/Port-land-1.png";
import product4 from "@/assets/images/Port-land-2.png";
import product5 from "@/assets/images/Port-land-3.png";
import product1 from "@/assets/images/product1.png";
import product6 from "@/assets/images/product6.png";
import product3 from "@/assets/images/project3.png";
import PortfolioItem from "@/components/pages/portfolio/PortfolioItem";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "Portfolio || Land & Build",
  description:
    "Discover our portfolio showcasing - successful land acquisitions and transformative developments. We bring visionary projects to life with precision and expertise. with a focus on quality, sustainability, and community growth.",
};

export default function Portfolio() {
  const products = [
    {
      title: "Urban Elegance",
      description:
        "A modern city residence featuring stylish interiors and high-end finishes, perfect for contemporary living.",
      image: product1,
    },
    {
      title: "Prime Residential Spot",
      description:
        "Nestled in a well-developed community, this land offers the perfect foundation for a modern home.",
      image: product2,
    },
    {
      title: "Suburban Comfort",
      description:
        "A well-planned townhouse community with green spaces, ideal for families seeking a peaceful and connected lifestyle.",
      image: product3,
    },
    {
      title: "Scenic Countryside Retreat",
      description:
        "Expansive green fields with peaceful surroundings make this an ideal choice for rural living.",
      image: product4,
    },
    {
      title: "Elevated Investment Opportunity",
      description:
        "A well-maintained plot with breathtaking views, ready for a dream home or future development.",
      image: product5,
    },
    {
      title: "Scenic Retreat",
      description:
        "Cozy wooden chalets set in a lush natural landscape, offering a perfect getaway with breathtaking views.",
      image: product6,
    },
  ];

  return (
    <>
      <Breadcrumb title="Portfolio" bgImage={product2} />
      <main>
        <div className="container">
          <section className="projects-section">
            <h2>Our Land and Development Success Stories</h2>
            <p className="sec-des">
              Discover our portfolio showcasing - successful land acquisitions
              and transformative developments. We bring visionary projects to
              life with precision and expertise. with a focus on quality,
              sustainability, and community growth.
            </p>
            <div className="projects-grid">
              {products.map((product, index) => (
                <PortfolioItem key={product.title} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
