"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import PhoneSlider from "./components/PhoneSlider";

export default function Home() {
  return (
    <main className="font-sans">
      <div className="px-40 py-5 max-md:px-0">
        <Hero />
       
        <PhoneSlider />
        <Services />
        <Technologies />
        <Contact />
      </div>
    </main>
  );
}
