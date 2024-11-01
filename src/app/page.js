import About from "@/components/Homepage/About";
import Banner from "@/components/Homepage/Banner";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <h1>Hi, this is home page</h1>
      <button className="btn btn-primary text-white">Home button</button>
    </div>
  );
}
