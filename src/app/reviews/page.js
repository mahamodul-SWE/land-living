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

export default function Reviews() {
  return (
    <>
      <Breadcrumb title="Review" />
      <main className="">
        <section className="testimonial">
          <div className="">
            <div className="row">
              <div className="col-lg-6">
                <figure className="testimonial-thumb">
                  <Image src={review} alt="testimonial left" />
                </figure>
              </div>
              <div className="col-lg-6 pe-5">
                {/* <!-- Swiper slider container --> */}
                <div className="single-testimonial text-center">
                  <h3 className="text-center mx-auto">Review</h3>
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
                  <p className="text">
                    Our first time with Cooking Station and a good way to try
                    when on special offer.Varied choice of meals. Surprisingly
                    the portions were a good size.
                  </p>
                  <p className="name">Kawsar Ahmed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial">
          <div className="">
            <div className="row">
              <div className="col-lg-6 ps-5">
                {/* <!-- Swiper slider container --> */}
                <div className="single-testimonial text-center">
                  <h3 className="text-center mx-auto">Review</h3>
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
                  <p className="text">
                    Our first time with Cooking Station and a good way to try
                    when on special offer.Varied choice of meals. Surprisingly
                    the portions were a good size.
                  </p>
                  <p className="name">Kawsar Ahmed</p>
                </div>
              </div>

              <div className="col-lg-6">
                <figure className="testimonial-thumb">
                  <Image src={r1} alt="testimonial left" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
