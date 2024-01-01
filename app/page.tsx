import Connect from "@/components/Connect";
import End from "@/components/End";
import Hero from "@/components/Hero";
import LatestWork from "@/components/LatestWork";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <LatestWork />
      <Testimonials />
      <Review />
      <Connect />
      <End />
    </main>
  );
}
