import bannerImg from "@/assets/images/Feb-Business_9.jpg";
import Image from "next/image";

export const metadata = {
  title: "FAQ || Land Living",
  description:
    "Frequently asked questions about Land Living. We're here to help you find the information you need.",
};
export default function FAQ() {
  return (
    <>
      <section className="faq_banner">
        <div className="container">
          <div className="fac_banner_container">
            <div>
              <h3 className="title">FAQ</h3>
              <p className="des">
                Have questions? Here you&apos;ll find the answers most valued by
                our partners, along with access to step-by-step instructions and
                support.
              </p>
            </div>
            <figure className="d-flex justify-content-end">
              <Image
                src={bannerImg}
                style={{ width: "80%" }}
                alt=""
                placeholder="blur"
                quality={100}
              />
            </figure>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="wrapper">
            <div className="accordion pt-2" id="accordionExample">
              <div>
                <h3 className="acc_title">About</h3>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      What is the cooking station?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        A cooking station is a designated area in a kitchen
                        equipped with the necessary tools, appliances, and
                        workspace for preparing and cooking food.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What types of meals does Cooking Station offer?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cooking Station offers a diverse range of home-cooked
                      meals suitable for bachelors, professionals, and families.
                      Our menu includes a variety of dishes, from traditional
                      favorites to modern twists on classic recipes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How does Cooking Station ensure the freshness of their
                      ingredients?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We source only the finest ingredients for our dishes,
                      prioritizing freshness and quality. Our chefs carefully
                      select produce, meats, and other components to ensure that
                      every meal meets our high standards.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="acc_title">Delivery</h3>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What areas do Cooking Station deliver to?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We currently offer doorstep delivery to a wide range of
                      locations. Please check our website or contact our
                      customer service team for specific delivery areas and
                      availability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How does Cooking Station handle dietary restrictions or
                      allergies?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Your health and safety are our top priorities. We take
                      special care to accommodate dietary restrictions and
                      allergies. Simply let us know about any special
                      requirements when placing your order, and our team will
                      ensure that your meal meets your needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      How does Cooking Station ensure the freshness of their
                      ingredients?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We source only the finest ingredients for our dishes,
                      prioritizing freshness and quality. Our chefs carefully
                      select produce, meats, and other components to ensure that
                      every meal meets our high standards.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="acc_title">Payment</h3>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      What areas do Cooking Station deliver to?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We currently offer doorstep delivery to a wide range of
                      locations. Please check our website or contact our
                      customer service team for specific delivery areas and
                      availability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      How does Cooking Station handle dietary restrictions or
                      allergies?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Your health and safety are our top priorities. We take
                      special care to accommodate dietary restrictions and
                      allergies. Simply let us know about any special
                      requirements when placing your order, and our team will
                      ensure that your meal meets your needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      How does Cooking Station ensure the freshness of their
                      ingredients?
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We source only the finest ingredients for our dishes,
                      prioritizing freshness and quality. Our chefs carefully
                      select produce, meats, and other components to ensure that
                      every meal meets our high standards.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="acc_title">Others</h3>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      What areas do Cooking Station deliver to?
                    </button>
                  </h2>
                  <div
                    id="collapseTen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We currently offer doorstep delivery to a wide range of
                      locations. Please check our website or contact our
                      customer service team for specific delivery areas and
                      availability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                    >
                      How does Cooking Station handle dietary restrictions or
                      allergies?
                    </button>
                  </h2>
                  <div
                    id="collapseEleven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Your health and safety are our top priorities. We take
                      special care to accommodate dietary restrictions and
                      allergies. Simply let us know about any special
                      requirements when placing your order, and our team will
                      ensure that your meal meets your needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwelve"
                      aria-expanded="false"
                      aria-controls="collapseTwelve"
                    >
                      How does Cooking Station ensure the freshness of their
                      ingredients?
                    </button>
                  </h2>
                  <div
                    id="collapseTwelve"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We source only the finest ingredients for our dishes,
                      prioritizing freshness and quality. Our chefs carefully
                      select produce, meats, and other components to ensure that
                      every meal meets our high standards.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
