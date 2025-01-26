import bg from "@//assets/images/secbg.png"
import Image from "next/image"
const bgImage = {
  height: "100%",
  zIndex: 0,
}

export default function Attract() {

  return (
    <section className="attract-sec">
      <Image
        alt="background"
        src={bg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1
        }}
      />
      <div className="container">
        <div className="wrapper-att">
          <div className="content">
            <h2 className="section-title">Attractive Properties</h2>
            <p>
              We've found a property that stands out. Our team has gathered some
              of the best photos and details to help you make an informed
              decision.
            </p>
          </div>
          <div className="text-end">
            <button className="ll-btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  )
}