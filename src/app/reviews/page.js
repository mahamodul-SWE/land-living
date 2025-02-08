// import avatar from "@/assets/images/";
import r1 from "@/assets/images/r-1.jpeg";
import review from "@/assets/images/review.jpg";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

export const metadata = {
  title: "Review || Land Living",
  description:
    "We are a dynamic, innovative, and dedicated agency that specializes in providing the best possible solutions to our clients real estate needs. Our team is made up of experts in various fields, including architecture, interior design, and property management.",
};

const reviews = [
  {
    name: "James R.",
    title: "– Smooth & Profitable Experience",
    image: review,
    review: `Selling my land to Land Profits was a seamless
            experience. Their team handled everything with transparency
            and professionalism, ensuring I got the best value for my
            property. The entire process was stress-free, and I felt
            confident in every step. Highly recommend!`,
  },
  {
    name: "Sarah L.",
    title: "– Exceptional Service & Fair Pricing",
    image: r1,
    review: `I was unsure about selling my land, but Land Profits guided me through the process with expert advice and market insights. They offered a fair price and took care of all the paperwork, making the transaction quick and hassle-free. A truly outstanding team!`,
  },
  {
    name: "John M.",
    title: "– Smooth Land Sale Experience",
    image: r1,
    review: `Selling my land to Land & Living was a fantastic experience. Their team provided a fair offer, and the entire process was smooth and transparent. I was kept informed every step of the way, and I received payment much quicker than I expected. Highly recommend their services!`,
  },
  {
    name: " Emily R.",
    title: "– Exceptional Development Service",
    image: r1,
    review: `Land & Living helped turn my land into a thriving residential development. From planning and design to construction, they handled everything with professionalism and attention to detail. The end result exceeded my expectations, and I couldn’t be happier with the quality of the development. A truly top-notch team!" Also, they hand over the project in the promised time.`,
  },
  {
    name: " Michael D",
    title: "– Effortless and Transparent Process",
    image: r1,
    review: `I was impressed by the smooth and efficient process  Land & Living offered. They took care of all the paperwork and approvals without any hassle, making the entire transaction stress-free. Their team is not only professional but also very transparent, which made the experience enjoyable. Great service all around!`,
  },
];

export default function Reviews() {
  return (
    <>
      <Breadcrumb title="Review" bgImage={review} />
      <main className="mt-5 mb-4">
        {reviews.map(({ name, image, review, title }, index) => (
          <section key={{ index }} className="testimonial">
            <div className="">
              <div
                className={`row ${index % 2 === 1 && "flex-lg-row-reverse"}`}
              >
                <div className="col-lg-6">
                  <figure className="testimonial-thumb">
                    <Image src={image} alt="testimonial left" />
                  </figure>
                </div>
                <div className="col-lg-6 p-5">
                  {/* <!-- Swiper slider container --> */}
                  <div className="single-testimonial text-center">
                    <h3 className="text-center mx-auto">{title}</h3>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-quote"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                      </svg>
                    </span>
                    <p className="text">&quot;{review}&quot;</p>
                    <p className="name">{name}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
