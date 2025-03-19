import ContactForm from "@/components/pages/contact/ContactForm";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Contact Us || Land & Build",
  description:
    "Contact Land & Build for any inquiries, questions, or concerns. We're here to help you find the perfect solution for your dream home.",
};

export default function Contact() {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <main>
        <div className="container contact-wrapper">
          <div className="row gap-5 flex-column-reverse flex-lg-row flex-lg-nowrap">
            <div className="col">
              <ContactForm />
            </div>
            <div className="col">
              <div className="contact-info">
                <h3 className="section-title">Get in touch</h3>
                <p className="contact-info-text">
                  Reach out to us for any inquiries or collaboration ideas.
                </p>
                <div className="contact-list">
                  <div className="contact-item">
                    <span className="icon">
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <h4 className="title">Our main office</h4>
                    <address className="text text-start">
                      Hatch Gate Inn,The Hatch, Burghfield, Reading, Berkshire,
                      RG30 3TH.
                    </address>
                  </div>
                  <div className="contact-item">
                    <span className="icon">
                      <i className="bi bi-envelope-at"></i>
                    </span>
                    <h4 className="title">Email Us</h4>
                    <span className="text text-start">
                      <Link href="mailto:info@landandbuild.uk">
                        info@landandbuild.uk
                      </Link>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="icon">
                      <i className="bi bi-telephone-outbound"></i>
                    </span>
                    <h4 className="title">Call us</h4>
                    <div className="d-flex flex-wrap justify-content-center  gap-3">
                      <span className="text text-start">
                        Phone:{" "}
                        <Link href="tel:+447738940597">+447738940597</Link>
                      </span>
                      <span className="text text-start">
                        Telephone:{" "}
                        <Link href="tel:+441183483304">+441183483304</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- map --> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5260098091735!2d-1.0414587000000002!3d51.4117634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769ea73aefc08b%3A0xfb3c7001b821f0b5!2sThe%20Hatch%20Gate%20Inn!5e0!3m2!1sen!2sbd!4v1741641472981!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </>
  );
}
