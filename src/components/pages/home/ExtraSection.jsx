
import left1 from "@/assets/images/left1.png";
import left2 from "@/assets/images/left2.png";
import left3 from "@/assets/images/left3.png";
import right1 from "@/assets/images/right1.png";
import right2 from "@/assets/images/right2.png";
import right3 from "@/assets/images/right3.png";
import Image from "next/image";

export default function ExtraSection() {

  return (
    <div className="additional-sections container">
      <Image src={left1} alt="left icon 1" />
      <Image src={left2} alt="left icon 2" />
      <Image src={left3} alt="left icon 3" />
      <Image src={right1} alt="right icon 1" />
      <Image src={right2} alt="right icon 2" />
      <Image src={right3} alt="right icon 3"/>
    </div>
  )
}