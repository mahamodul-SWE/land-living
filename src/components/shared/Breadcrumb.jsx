import bgImageAlt from "@/assets/images/testimonial-banner-min.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Breadcrumb({ title, bgImage }) {

  return (
    <div className="breadcrumb-wrapper">
      <Image
        alt={title}
        src={bgImage || bgImageAlt}
        className="breadcrumb-bg"
        placeholder="blur"
        priority
        quality={70}
        style={{
          zIndex: -1,
          objectFit: "cover",
        }}
        fill
      />
      <div className="container">
        <h1 className="breadcrumb-title">{title}</h1>
        <nav aria-label="breadcrumb" style={{ "--bs-breadcrumb-divider": ">" }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              &gt;
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>

  )
}