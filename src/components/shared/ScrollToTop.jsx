"use client"

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function showHide() {
      if (this.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    window.addEventListener("scroll", showHide);

    return () => {
      window.removeEventListener("scroll", showHide);
    };
  }, [])


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button onClick={scrollToTop} className={`scroll-to-top ${show ? "show" : null}`}>
      <i className="bi bi-arrow-up-short fs-4"></i>
    </button>
  )
}