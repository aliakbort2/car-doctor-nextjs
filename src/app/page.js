import About from "@/components/Homepage/About";
import Banner from "@/components/Homepage/Banner";
import Schedule from "@/components/Homepage/Schedule";
import Services from "@/components/Homepage/Services";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <Services />
      <Schedule />
    </div>
  );
}
