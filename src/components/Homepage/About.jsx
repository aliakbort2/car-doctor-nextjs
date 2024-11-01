import parts from "../../../public/assets/images/about_us/parts.jpg";
import person from "../../../public/assets/images/about_us/person.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="hero md:min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <Image
            src={person}
            alt="about image"
            className="w-3/4 lg:h-96 rounded-lg shadow-2xl"
          />
          <Image
            src={parts}
            alt="about image"
            className="w-1/2 absolute right-5 lg:right-16 top-1/2 lg:top-[60%] max-w-sm rounded-lg shadow-2xl border-8 border-white object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:p-4 pt-16 md:mt-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-orange-500 font-bold">
            About US
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-3 sm:pb-4 md:pb-5 lg:pb-8">
            We are qualified & of experience in this field
          </h1>
          <p className="pb-2 sm:pb-3.5 md:pb-5 leading-7 md:leading-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="pb-3 sm:pb-5 md:pb-8 lg:pb-10 leading-7 md:leading-8">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
