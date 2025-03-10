import ContactForm from "@/components/pages/contact/ContactForm";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "Contact Us || Land Living",
  description:
    "Contact Land Living for any inquiries, questions, or concerns. We're here to help you find the perfect solution for your dream home.",
};

export default function Contact() {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <main>
        <div className="container contact-wrapper">
          <div className="row gap-2 flex-column-reverse flex-lg-row flex-lg-nowrap">
            <div className="col-lg-6">
              <ContactForm />
            </div>
            <div className="col-lg-6">
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
                    <p className="text text-start">
                      123, Road No. 10, Dhanmondi, Dhaka-1209
                    </p>
                  </div>
                  <div className="contact-item">
                    <span className="icon">
                      <i className="bi bi-envelope-at"></i>
                    </span>
                    <h4 className="title">subject address</h4>
                    <span className="text text-start">
                      <a href="mailto:lorem@gmail.com">yourname@email.com </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="icon">
                      <i className="bi bi-telephone-outbound"></i>
                    </span>
                    <h4 className="title">Call us</h4>
                    <span className="text text-start">
                      <a href="call:+8801753674485">+8801753674485</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- map --> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.97303532383!2d90.33728800877181!3d23.78081863542279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1737796722221!5m2!1sen!2sbd"
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
