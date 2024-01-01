import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomCarousel } from "./CustomCarousel";

const LatestWork = () => {
  return (
    <div className="bg-[#03001E] h-screen flex flex-col items-center justify-center place-content-center">
      <p className="text-white mb-7 font-style-4 text-center xl:text-center  flex flex-col items-center justify-center font-semibold text-5xl mt-24">
        Live Projects
      </p>

      <CustomCarousel />
    </div>
  );
};

export default LatestWork;
