import Image from "next/image";
import React from "react";
import tv from "../../../public/croped-screen.png";
export default function FirstScreen() {
  return (
    <section className="bg-[#5fb5c4] ">
      <Image
        src={tv}
        width={800}
        height={500}
        alt="this is a tv image for home screen"
      />
    </section>
  );
}
