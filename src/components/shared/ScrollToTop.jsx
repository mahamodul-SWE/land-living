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
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
      </svg>
    </button>
  )
}