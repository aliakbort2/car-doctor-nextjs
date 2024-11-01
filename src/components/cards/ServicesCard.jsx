import Link from "next/link";
import Image from "next/image";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="bg-base-100 shadow hover:border hover:transition-all hover:duration-700 hover:rounded">
      <div className="px-10 pt-10">
        <Image
          src={img}
          alt="Shoes"
          width={600}
          height={600}
          className="rounded-xl h-full w-full"
        />
      </div>
      <div className="px-10 my-5">
        <h2>{title}</h2>
        <p className="text-xl text-primary my-1 sm:my-2 md:my-3">
          Price: ${price}
        </p>
        <div>
          <Link href={`/book/${_id}`}>
            <button className="btn btn-primary text-white">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
