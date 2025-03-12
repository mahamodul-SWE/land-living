import logo from "@/assets/images/land_Living_yellow_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="row g-4 pb-4">
          <div className="col-lg-4">
            <div className="footer-left">
              <Image src={logo} alt="Logo" className="logo" />
              <h3 className="footer-title mb-0">Unlock the Hidden Value of Your Land. </h3>
              <p className="footer-text">
                we specialize in maximizing the potential of your land, ensuring you receive the best value for your property. Whether you're selling land, looking for development opportunities, or seeking planning approvals, our expert team is here to guide you through a seamless process.

              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-middle">
              <h3 className="footer-title">contact us</h3>
              <ul className="footer-address">
                <li className="phone">
                  <span className="hl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </span>
                  <address className="text text-start">Hatch Gate Inn,The Hatch, Burghfield, Reading, Berkshire, RG30 3TH.
                  </address>
                </li>
                <li className="phone">
                  <span className="hl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg> </span>
                  <Link href="call:+447738940597">
                    <span className="text">+447738940597</span>
                  </Link>
                </li>
                <li className="phone">
                  <span className="hl">
                    <>
                      {/*?xml version="1.0" encoding="utf-8"?*/}
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 122.9 98.9"
                        style={{ enableBackground: "new 0 0 122.9 98.9" }}
                        xmlSpace="preserve"
                        width={20}
                        height={20}
                        fill="red"
                      >
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html: ".st0{fill-rule:evenodd;clip-rule:evenodd;}"
                          }}
                        />
                        <g>
                          <path
                            className="st0"
                            d="M109,98.9H13.7v-14c0.5-16.3,14.9-28.7,23.6-42.8V29.7h14.5v8.9h19.5v-8.9h14.5v12.4 C95.2,57.2,109,67,109,84.7V98.9L109,98.9z M122.5,42.1c0-2.2,0.4-4.4,0.1-6.8c-10.7,3.5-21.1,2.5-31.3-3.1 c-0.4,3.8,0.2,7.2,1.6,10.4C96.5,50.6,122.2,53.3,122.5,42.1L122.5,42.1z M0.3,42.1c0-2.2-0.4-4.4-0.1-6.8 c10.7,3.5,21.1,2.5,31.3-3.1c0.4,3.8-0.2,7.2-1.6,10.4C26.3,50.6,0.5,53.3,0.3,42.1L0.3,42.1z M0,31.9C8.6-8.2,115.4-13,122.9,32 c-10.4,2.9-21,1.2-31.6-3.6c0.3-2.1-0.2-3.8-1.3-5.2c-6.3-7.9-51.4-8.2-57.2,0.3c-0.9,1.3-1.3,2.9-1.2,4.7 C21.1,34.6,10.5,36.1,0,31.9L0,31.9z M47.2,47.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C43,49.7,44.9,47.7,47.2,47.7L47.2,47.7z M74.8,71.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C70.5,73.7,72.4,71.7,74.8,71.7L74.8,71.7z M61,71.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C56.7,73.7,58.6,71.7,61,71.7L61,71.7z M47.2,71.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C43,73.7,44.9,71.7,47.2,71.7L47.2,71.7z M74.8,59.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C70.5,61.7,72.4,59.7,74.8,59.7L74.8,59.7z M61,59.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C56.7,61.7,58.6,59.7,61,59.7L61,59.7z M47.2,59.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C43,61.7,44.9,59.7,47.2,59.7L47.2,59.7z M74.8,47.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C70.5,49.7,72.4,47.7,74.8,47.7L74.8,47.7z M61,47.7c2.4,0,4.3,1.9,4.3,4.3c0,2.4-1.9,4.3-4.3,4.3c-2.4,0-4.3-1.9-4.3-4.3 C56.7,49.7,58.6,47.7,61,47.7L61,47.7z"
                          />
                        </g>
                      </svg>
                    </>

                  </span>
                  <Link href="call:+441183483304">
                    <span className="text">+441183483304</span>
                  </Link>
                </li>
                <li className="email">
                  <span className="hl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                    </svg>
                  </span><Link href="mailto:info@Landandbuild.uk"
                  ><span className="text">info@Landandbuild.uk </span></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right">

              <div className="mb-4">
                <h3 className="footer-title">follow us on</h3>
                <div className="socials">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/people/Land-and-Build/61573853589191/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                      ></path>
                    </svg>
                  </Link>
                  <a target="_blank" href="https://www.instagram.com/"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="#"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="footer-title mb-3">Have more query?</h3>
                <ul className="footer-address">
                  <li className="phone">
                    <span className="hl">
                      <i className="bi bi-question-circle"></i>
                    </span>
                    <Link href="/faq" className="text text-start"> FAQ</Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-wrapper">
            <p>© All rights reserved by Land and Build {new Date().getFullYear()}</p>

          </div>
        </div>
      </div>
    </footer>
  )
}