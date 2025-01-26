import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/Product2.png";
import product4 from "@/assets/images/product4.png";
import product5 from "@/assets/images/product5.png";
import product6 from "@/assets/images/product6.png";
import product3 from "@/assets/images/project3.png";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <Breadcrumb title="Portfolio" />
      <main>
        <div class="container">
          <section class="projects-section">
            <h2>We&#39;re More Than Just A Number</h2>
            <p class="sec-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div class="projects-grid">
              <div class="project-card">
                <Image src={product1} alt="Project 1" />
                <div class="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button class="view-project-btn">View Project</button>
                </div>
              </div>
              <div class="project-card">
                <Image src={product2} alt="Project 2" />
                <div class="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button class="view-project-btn">View Project</button>
                </div>
              </div>
              <div class="project-card">
                <Image src={product3} alt="Project 3" />
                <div class="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button class="view-project-btn">View Project</button>
                </div>
              </div>
              <div class="project-card">
                <Image src={product4} alt="Project 4" />
                <div class="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button class="view-project-btn">View Project</button>
                </div>
              </div>
              <div class="project-card">
                <Image src={product5} alt="Project 5" />
                <div class="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button class="view-project-btn">View Project</button>
                </div>
              </div>
              <div class="project-card">
                <Image src={product6} alt="Project 6" />
                <div class="project-info">
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button class="view-project-btn">View Project</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
