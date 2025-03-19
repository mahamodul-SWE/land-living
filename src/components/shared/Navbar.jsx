"use client"
import logo from "@/assets/images/land_Living_yellow_logo.png"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef } from "react"
const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
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
];
export default function Navbar() {
  const pathname = usePathname()
  const toggleButton = useRef(null)

  const handleClick = () => {
    let timeout;
    timeout = setTimeout(() => {
      window.innerWidth < 1200 && toggleButton.current.click()
      clearTimeout(timeout)
    }, 500)
  }

  return (
    <header>
      <nav className="navbar navbar-expand-xl bg-body-tertiary py-0">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="Logo" className="logo" />
          </Link>
          <div className="d-flex d-xl-none" role="search">
            <CallNow />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={toggleButton}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse pb-3 p-xl-0" id="navbarScroll">
            <ul
              className="navbar-nav mx-auto flex-1 my-1 my-xl-0 navbar-nav-scroll"
            >
              {
                navLinks.map((link) => (
                  <li className="nav-item" key={link.href}>
                    <Link onClick={handleClick} className={`nav-link ${pathname == link.href ? "active" : null}`} aria-current="page" href={link.href}>{link.title}</Link>
                  </li>
                ))
              }
            </ul>
            <div className="d-none d-xl-flex" role="search">
              <CallNow />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const CallNow = () => (
  <Link href="call:+447738940597" className="ll-btn-primary" >Call now</Link>
)