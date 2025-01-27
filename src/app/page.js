import About from "@/components/pages/home/About";
import Attract from "@/components/pages/home/Attract";
import ExtraSection from "@/components/pages/home/ExtraSection";
import FreeServices from "@/components/pages/home/FreeServices";
import Hero from "@/components/pages/home/Hero";
import OurServices from "@/components/pages/home/OurServices";
import ShortReviews from "@/components/pages/home/ShortReviews";
import WhyUs from "@/components/pages/home/WhyUs";

export const metadata = {
  title: "Home || Land Living",
  description:
    "Welcome to Land Living, a dynamic, innovative, and dedicated agency that specializes in providing the best possible solutions to our clients real estate needs. Our team is made up of experts in various fields, including architecture, interior design, and property management.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Attract />
      <OurServices />
      <FreeServices />
      <ExtraSection />
      <WhyUs />
      <ShortReviews />
    </>
  );
}
