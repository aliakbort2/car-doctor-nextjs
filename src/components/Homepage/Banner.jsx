import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="carousel w-full font-inter h-[350px] md:h-[600px] overflow-hidden rounded-lg">
        <div
          id="slide1"
          className="carousel-item relative w-full overflow-hidden"
        >
          <Image
            src={"https://i.ibb.co/hYy6MVw/banner-1.jpg"}
            className="w-full h-full rounded-lg"
            alt="banner image"
            height={500}
            width={1000}
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-3 md:pl-16">
            <div>
              <h2 className="text-3xl md:text-6xl text-white font-bold md:w-4/5 lg:w-1/2">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-3 md:my-7 md:w-1/2 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Discover More
                </button>
                <button className="border border-white text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 -bottom-2 md:pr-10">
            <a href="#slide6" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="https://i.ibb.co/yqVCBMr/banner-2.jpg"
            className="w-full h-full"
            alt="banner image"
            height={500}
            width={1000}
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-3 md:pl-16">
            <div>
              <h2 className="text-3xl md:text-6xl text-white font-bold md:w-4/5 lg:w-1/2">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-3 md:my-7 md:w-1/2 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Discover More
                </button>
                <button className="border border-white text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="https://i.ibb.co/B2TTLJ8/banner-3.jpg"
            className="w-full h-full"
            alt="banner image"
            height={500}
            width={1000}
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-3 md:pl-16">
            <div>
              <h2 className="text-3xl md:text-6xl text-white font-bold md:w-4/5 lg:w-1/2">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-3 md:my-7 md:w-1/2 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Discover More
                </button>
                <button className="border border-white text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="https://i.ibb.co/njfrrcc/banner-4.jpg"
            className="w-full h-full"
            alt="banner image"
            height={500}
            width={1000}
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-3 md:pl-16">
            <div>
              <h2 className="text-3xl md:text-6xl text-white font-bold md:w-4/5 lg:w-1/2">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-3 md:my-7 md:w-1/2 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Discover More
                </button>
                <button className="border border-white text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <Image
            src="https://i.ibb.co/Lkb0F08/banner-5.jpg"
            className="w-full h-full"
            alt="banner image"
            height={500}
            width={1000}
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-3 md:pl-16">
            <div>
              <h2 className="text-3xl md:text-6xl text-white font-bold md:w-4/5 lg:w-1/2">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-3 md:my-7 md:w-1/2 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Discover More
                </button>
                <button className="border border-white text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <Image
            src="https://images.pexels.com/photos/8478274/pexels-photo-8478274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full"
            alt="banner image"
            height={500}
            width={1000}
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-3 md:pl-16">
            <div>
              <h2 className="text-3xl md:text-6xl text-white font-bold md:w-4/5 lg:w-1/2">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white my-3 md:my-7 md:w-1/2 ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Discover More
                </button>
                <button className="border border-white text-white py-2 px-4 rounded font-semibold hover:border hover:border-primary hover:bg-transparent hover:text-primary cursor-pointer hover:ease-in hover:duration-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
