import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/Product2.png";
import product4 from "@/assets/images/product4.png";
import product5 from "@/assets/images/product5.png";
import product6 from "@/assets/images/product6.png";
import product3 from "@/assets/images/project3.png";
import PortfolioItem from "@/components/pages/portfolio/PortfolioItem";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "Portfolio || Land Living",
  description:
    "Discover our portfolio showcasing - successful land acquisitions and transformative developments. We bring visionary projects to life with precision and expertise. with a focus on quality, sustainability, and community growth.",
};

export default function Portfolio() {
  const products = [
    {
      title: "Premium Product 1",
      description:
        "High-quality and durable product designed for modern needs.",
      image: product1,
    },
    {
      title: "Luxury Product 2",
      description: "A stylish and elegant product perfect for premium users.",
      image: product2,
    },
    {
      title: "Innovative Product 3",
      description: "A state-of-the-art product with advanced features.",
      image: product3,
    },
    {
      title: "Classic Product 4",
      description: "A timeless piece that blends tradition with technology.",
      image: product4,
    },
    {
      title: "Eco-Friendly Product 5",
      description:
        "Sustainable and environment-friendly, built for a better future.",
      image: product5,
    },
    {
      title: "Smart Product 6",
      description:
        "A next-generation smart device with cutting-edge technology.",
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
