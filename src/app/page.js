import About from "@/components/Homepage/About";
import Banner from "@/components/Homepage/Banner";
import Services from "@/components/Homepage/Services";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <Services />
      <h1>Hi, this is home page</h1>
      <button className="btn btn-primary text-white">Home button</button>
    </div>
  );
}
