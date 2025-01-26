"use client"
import logo from "@/assets/images/logo.png"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Development",
    href: "/development",
  },
  {
    title: "How We Work",
    href: "/how-we-work",
  },
  {
    title: "Reviews",
    href: "/reviews",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },

  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
]
export default function Navbar() {
  const pathname = usePathname()
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
              {
                navLinks.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <Link className={`nav-link ${pathname?.startsWith(link.href) ? "active" : null}`} aria-current="page" href={link.href}>{link.title}</Link>
                  </li>
                ))
              }
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