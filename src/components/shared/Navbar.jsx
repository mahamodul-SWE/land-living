import logo from "@/assets/images/logo.png"
import Image from "next/image"
export default function Navbar() {

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image src={logo} alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav mx-auto flex-1 my-1 my-lg-0 navbar-nav-scroll"
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html"
                >Home</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="development.html">Developments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="howWork.html">How We Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="reviews.html">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="faq.html">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="contact.html">Contact Us</a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="ll-btn-primary" type="submit">Call now</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}