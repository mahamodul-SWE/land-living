import logo from "@/assets/images/logo.png"
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {

  return (
    <header id="header">
      <nav id="navbar" className="navbar navbar-expand-xl p-0 py-lg-1">
        <div className="container">
          <Link className="logo" href="/#hero">
            <Image
              src={logo}
              alt="Land  and Living"
            />
          </Link>

          <div
            className="offcanvas flex-1 offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close me-4"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >

              </button>
            </div>

            <div className="offcanvas-body ">
              <div className="d-flex justify-content-between w-100">
                <ul className="navbar-nav mx-auto mb-2 mt-lg-2">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" href="/#hero"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#services">Services</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/#portfolio">Portfolio </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/#faq">FAQ</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/#testimonials">Testimonials</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#contact">Contact</Link>
                  </li>
                </ul>
              </div>
             
            </div>

          </div>

          {/* call to action */}
          <button className="ll-btn-primary">Call now</button>
        </div>
      </nav>
    </header>
  )
}