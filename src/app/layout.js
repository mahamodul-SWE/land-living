import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ScrollToTop from "@/components/shared/ScrollToTop";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Kanit, Playball } from "next/font/google";
import Script from "next/script";
import "../assets/css/style.min.css";

const geistSans = Kanit({
  variable: "--font-kanit-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const playball = Playball({
  variable: "--font-playball",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Land Living",
  description:
    "Land Living is a unique, modern, and sustainable development project that aims to create a beautiful, harmonious, and peaceful living environment for residents in the city of Dhaka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playball.variable}`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
