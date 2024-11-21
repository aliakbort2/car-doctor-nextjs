import Image from "next/image";
import Link from "next/link";
import React from "react";
import detailsImage from "../../../public/assets/images/banner/details-image.png";

const SmallHeader = ({ title, text }) => {
  return (
    <div className="h-36 sm:h-48 md:h-60 lg:h-72 bg-green-600 max-w-screen-xl mx-auto rounded-xl relative">
      <Image
        src={detailsImage}
        className="w-full h-full rounded-xl"
        alt="details image"
        height={300}
        width={1280}
      />
      {/* Overlay div with pointer-events-none */}
      <div className="absolute inset-0 bg-black opacity-70 pointer-events-none rounded-xl"></div>

      {/* Text inside the image */}
      <div className="absolute inset-0 flex items-center justify-start left-5 sm:left-8 md:left-14 lg:left-16">
        {/* Center the text inside the image */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h2>
      </div>

      <div className="absolute inset-0 flex items-end justify-center">
        <p
          className="flex bg-primary px-2.5 md:px-5 py-1.5 md:py-3 text-white text-xs sm:text-sm md:text-base"
          style={{
            clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)", // Triangle effect
          }}
        >
          <Link href={"/"}>Home</Link> /{" "}
          <Link href={""} className="cursor-text">
            {text}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SmallHeader;
