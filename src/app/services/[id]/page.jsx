import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getServicesDetails } from "@/services/getServices";
import detailsImage from "../../../../public/assets/images/banner/details-image.png";

export const metadata = {
  title: "Service Details",
  description: "Service Details Page",
};

// export const getMetadata = () => {};

const ServicesDetailsPage = async ({ params }) => {
  // const services =

  const details = await getServicesDetails(params.id);
  const { title, img, price, description, facility } = details.service;

  return (
    <div className="px-2 sm:px-2.5 md:px-3 lg:px-3">
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
            Services Details
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
              Service Details
            </Link>
          </p>
        </div>
      </div>

      <div className="md:flex gap-5 max-w-screen-xl mx-auto mt-12 sm:mt-16 md:mt-20 mb-10">
        <div className="md:w-[70%]">
          <Image
            src={img}
            className="w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-xl object-cover"
            alt="image"
            height={400}
            width={800}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-5">
            {title}
          </h1>
          <p className="text-[#737373]">{description}</p>

          <div className="grid grid-cols-2 gap-5 mt-5 md:mt-8">
            {facility.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F3F3F3] rounded-t-lg border-t-2 border-primary p-4 sm:p-6 md:p-8"
              >
                <h3 className="sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">
                  {item?.name}
                </h3>
                <p className="text-[#737373] text-sm sm:text-base">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-400 border flex-1 mt-8 md:mt-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            odit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsPage;
