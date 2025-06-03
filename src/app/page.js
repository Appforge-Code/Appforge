'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { Button } from "@heroui/react";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <div className="px-40 py-5 max-md:px-0">
        <Hero />
        <Services />
        <Technologies />
        <Contact />
      </div>
    </main>
  );
}
