import r1 from "@/assets/images/r-1.jpeg";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

export const metadata = {
  title: "Review || Land Living",
  description:
    "We are a dynamic, innovative, and dedicated agency that specializes in providing the best possible solutions to our clients real estate needs. Our team is made up of experts in various fields, including architecture, interior design, and property management.",
};

export default function Reviews() {
  return (
    <>
      <Breadcrumb title="Review" />
      <main className="container mt-5">
        <div className="testimonial-card row gap-3 gap-md-0">
          <div className="col-md-7">
            <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <h5 className="mb-3">Mrs D Parry</h5>
            <p className="testimonial-text">
              Land Professionals came to my attention through a letter, I had
              previously spoken to many developers, as I was aware my garden had
              value. I found Phil & Ella to be personable and patient, which
              suited me best. I never felt pushed and was overjoyed at the
              amount I was offered. The transaction went smoothly and within the
              agreed time frame.
            </p>
          </div>
          <div className="col-md-5">
            <Image src={r1} alt="Testimonial" className="testimonial-image" />
          </div>
        </div>
        <div className="testimonial-card row gap-3 gap-md-0">
          <div className="col-md-7">
            <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <h5 className="mb-3">Mrs D Parry</h5>
            <p className="testimonial-text">
              Land Professionals came to my attention through a letter, I had
              previously spoken to many developers, as I was aware my garden had
              value. I found Phil & Ella to be personable and patient, which
              suited me best. I never felt pushed and was overjoyed at the
              amount I was offered. The transaction went smoothly and within the
              agreed time frame.
            </p>
          </div>
          <div className="col-md-5">
            <Image src={r1} alt="Testimonial" className="testimonial-image" />
          </div>
        </div>
        <div className="testimonial-card row gap-3 gap-md-0">
          <div className="col-md-7">
            <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <h5 className="mb-3">Mrs D Parry</h5>
            <p className="testimonial-text">
              Land Professionals came to my attention through a letter, I had
              previously spoken to many developers, as I was aware my garden had
              value. I found Phil & Ella to be personable and patient, which
              suited me best. I never felt pushed and was overjoyed at the
              amount I was offered. The transaction went smoothly and within the
              agreed time frame.
            </p>
          </div>
          <div className="col-md-5">
            <Image src={r1} alt="Testimonial" className="testimonial-image" />
          </div>
        </div>
      </main>
    </>
  );
}
