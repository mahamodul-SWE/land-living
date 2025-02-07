import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/Product2.png";
import product4 from "@/assets/images/product4.png";
import product5 from "@/assets/images/product5.png";
import product6 from "@/assets/images/product6.png";
import product3 from "@/assets/images/project3.png";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

export const metadata = {
  title: "Portfolio || Land Living",
  description:
    "Discover our portfolio showcasing - successful land acquisitions and transformative developments. We bring visionary projects to life with precision and expertise. with a focus on quality, sustainability, and community growth.",
};

export default function Portfolio() {
  return (
    <>
      <Breadcrumb title="Portfolio" />
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
              <div className="project-card">
                <Image src={product1} alt="Project 1" />
                <div className="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-card">
                <Image src={product2} alt="Project 2" />
                <div className="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-card">
                <Image src={product3} alt="Project 3" />
                <div className="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-card">
                <Image src={product4} alt="Project 4" />
                <div className="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-card">
                <Image src={product5} alt="Project 5" />
                <div className="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-card">
                <Image src={product6} alt="Project 6" />
                <div className="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
