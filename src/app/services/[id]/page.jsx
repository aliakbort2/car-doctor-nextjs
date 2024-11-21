import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getServicesDetails } from "@/services/getServices";
import { FaRegFileLines } from "react-icons/fa6";
import SmallHeader from "@/components/shared/SmallHeader";

export const metadata = {
  title: "Service Details",
  description: "Service Details Page",
};

// export const getMetadata = () => {};

const ServicesDetailsPage = async ({ params }) => {
  const details = await getServicesDetails(params.id);
  const { _id, title, img, price, description, facility } = details.service;

  return (
    <div className="px-2 sm:px-2.5 md:px-3 lg:px-3">
      <SmallHeader title={"Services Details"} text={"Service Details"} />

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
        <div className="flex-1 mt-8 md:mt-0 min-h-fit">
          <div className="p-5 bg-[#F3F3F3] rounded">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-5 lg:mb-8">
              Services
            </h2>
            <div className="flex flex-col gap-5 ">
              <div className="bg-white px-2 md:px-4 py-1.5 md:py-3 rounded flex justify-between items-center hover:bg-primary hover:text-white hover:transition-all cursor-pointer">
                <h2 className="text-xl font-semibold">Full Car Repair</h2>
                <FaArrowRight className="text-lg md:text-xl" />
              </div>
              <div className="bg-white px-2 md:px-4 py-1.5 md:py-3 rounded flex justify-between items-center hover:bg-primary hover:text-white hover:transition-all cursor-pointer">
                <h2 className="text-xl font-semibold">Automatic Services</h2>
                <FaArrowRight className="text-lg md:text-xl" />
              </div>
              <div className="bg-white px-2 md:px-4 py-1.5 md:py-3 rounded flex justify-between items-center hover:bg-primary hover:text-white hover:transition-all cursor-pointer">
                <h2 className="text-xl font-semibold">Engine Oil Change</h2>
                <FaArrowRight className="text-lg md:text-xl" />
              </div>
              <div className="bg-white px-2 md:px-4 py-1.5 md:py-3 rounded flex justify-between items-center hover:bg-primary hover:text-white hover:transition-all cursor-pointer">
                <h2 className="text-xl font-semibold">Battery Charge</h2>
                <FaArrowRight className="text-lg md:text-xl" />
              </div>
            </div>
          </div>
          <div className="p-5 bg-[#151515] mt-8 rounded">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-5 lg:mb-8">
              Download
            </h2>
            <div className="flex flex-col gap-5">
              <div className="px-2 md:px-4 py-1.5 md:py-3 rounded flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-3">
                  <FaRegFileLines className="text-2xl md:text-xl text-white" />
                  <div>
                    <h2 className="font-semibold text-white">Our Brochure</h2>
                    <p className="text-gray-400">Download</p>
                  </div>
                </div>
                <p className="bg-primary p-2 rounded">
                  <FaArrowRight className="md:text-xl text-white" />
                </p>
              </div>

              <div className="px-2 md:px-4 py-1.5 md:py-3 rounded flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-3">
                  <FaRegFileLines className="text-2xl md:text-xl text-white" />
                  <div>
                    <h2 className="font-semibold text-white">
                      Company Details
                    </h2>
                    <p className="text-gray-400">Download</p>
                  </div>
                </div>
                <p className="bg-primary p-2 rounded">
                  <FaArrowRight className="md:text-xl text-white" />
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 p-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Price: {price}
            </h2>
            <Link href={`/checkout/${_id}`}>
              <button className="btn btn-primary text-white w-full mt-4">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsPage;
