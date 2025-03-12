"use client"

import Image from "next/image";
import { useState } from "react";

export default function PortfolioItem({ product }) {

  const [image, setImage] = useState(null)

  const handlePreview = (img) => {
    console.log(img)
    setImage(img);
  };

  return (
    <>
      <div
        className="modal fade"
        id={product.title.split(" ").join("-")}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen h-100 overflow-hidden">
          <div className="modal-content bg-transparent">
            <button
              type="button"
              className="btn-close mt-3 ms-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="d-flex mx-auto justify-content-center align-items-center h-100 w-50">
              <figure>
                <Image
                  src={product.image}
                  id="image"
                  alt="Project 1"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card relative">
        <Image
          src={product.image}
          alt="Project 1"
          style={{
            objectFit: "cover",
          }}
          fill
        />
        <div className="project-info align-items-start text-start">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <button
            data-bs-toggle="modal"
            data-bs-target={`#${product.title.split(" ").join("-")}`}
            className="view-project-btn"

          >
            View Project
          </button>
        </div>
      </div>
    </>

  )
}