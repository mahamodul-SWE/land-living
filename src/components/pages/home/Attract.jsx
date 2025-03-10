import bg from "@//assets/images/secbg.png"
import Image from "next/image"
import Link from "next/link"
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
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF914D] to-[#FFC099] opacity-80"></div>

      <div className="container">
        <div className="wrapper-att">
          <div className="content">
            <h2 className="section-title">We are here for you</h2>
            <p>
              At Land & Build, we fulfill your land's desired values, Whether you're a landowner or investor.
            </p>
            <p>
              We also specialize in developing homes, ensuring a seamless process from city approvals to construction, delivering quality and compliance at every step.
            </p>
          </div>
          <div className="text-end">
            <Link href="/contact" className="ll-btn-primary">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}