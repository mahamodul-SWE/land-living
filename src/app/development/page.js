import development from "@/assets/images/development.jpg";
import DevelopmentPage from "@/components/pages/development/Development";
import HouseDevelopmentProcess from "@/components/pages/development/HouseDevelopmentProcess";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "Development || Land Living",
  description:
    "Discover our latest developments, including commercial, residential, and commercial land projects.",
};

export default function Development() {
  return (
    <div>
      <Breadcrumb title="Development" bgImage={development} />
      <HouseDevelopmentProcess />
      <DevelopmentPage />
    </div>
  );
}
