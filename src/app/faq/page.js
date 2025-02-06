import bannerImg from "@/assets/images/Feb-Business_9.jpg";
import Image from "next/image";

export const metadata = {
  title: "FAQ || Land Living",
  description:
    "Frequently asked questions about Land Living. We're here to help you find the information you need.",
};

const faqData = [
  {
    category: "For Land Sellers",
    questions: [
      {
        question: "How do I know if my land is worth selling?",
        answer:
          "Our team provides a free, no-obligation land evaluation to assess the potential value of your property based on current market trends, location, and zoning.",
      },
      {
        question: "What is the process for selling my land to Land Profits?",
        answer:
          "We begin with a consultation, followed by a thorough assessment of your land’s value. If you agree to the offer, we handle all the paperwork and close the deal smoothly, ensuring maximum value for you.",
      },
      {
        question: "How quickly can I sell my land?",
        answer:
          "The process can be completed in as little as a few weeks, depending on the complexity of the transaction. We prioritize quick and efficient dealings for a hassle-free experience.",
      },
      {
        question: "Do I need to have planning permission to sell my land?",
        answer:
          "Not necessarily. We buy land with and without planning permission. However, planning permission can increase the value of your land, and we can assist you in exploring those options.",
      },
    ],
  },
  {
    category: "For Land Buyers",
    questions: [
      {
        question: "How do I find the right piece of land to buy?",
        answer:
          "We help guide you through our extensive database of land opportunities, matching your needs with suitable plots. Whether for investment or development, we provide personalized recommendations.",
      },
      {
        question: "Do you offer financing options for land purchases?",
        answer:
          "While we do not directly provide financing, we work closely with reputable financial institutions and can help connect you with lending partners for your land purchase.",
      },
      {
        question:
          "Can you help me with the legal documentation when buying land?",
        answer:
          "Yes, we handle all the legal aspects, including documentation and contract preparation, ensuring a smooth and transparent transaction.",
      },
    ],
  },
  {
    category: "For House Development Service Clients",
    questions: [
      {
        question: "What’s the process for developing a house on my land?",
        answer:
          "Our team guides you through every step—from assessing your land’s suitability for development, obtaining planning permissions, designing the property, to managing construction. We handle all the necessary documentation and legal approvals.",
      },
      {
        question:
          "Do you help with getting planning permission for house development?",
        answer:
          "Absolutely. We have in-depth knowledge of local zoning laws and work directly with local authorities to secure the necessary permissions for your development.",
      },
      {
        question:
          "How long does it take to develop a house from start to finish?",
        answer:
          "The timeline varies depending on factors like land size, design complexity, and regulatory approvals, but typically, the development process can take several months to a year. We ensure timely progress throughout.",
      },
      {
        question: "What documents are required for house development?",
        answer:
          "We handle all necessary documents, including land surveys, planning applications, building permits, and environmental assessments, ensuring everything is in place for a smooth development process.",
      },
      {
        question: "Will you assist in the construction process?",
        answer:
          "Yes! We oversee every stage of the construction process, from site preparation to completion, ensuring high-quality results and compliance with all building regulations.",
      },
    ],
  },
];

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
              {faqData.map((categoryItem, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="acc_title">{categoryItem.category}</h3>
                  {categoryItem.questions.map((questionItem, questionIndex) => (
                    <div className="accordion-item" key={questionIndex}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${categoryIndex}${questionIndex}`}
                          aria-expanded="false"
                          aria-controls={`collapse${categoryIndex}${questionIndex}`}
                        >
                          {questionItem.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${categoryIndex}${questionIndex}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{questionItem.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
