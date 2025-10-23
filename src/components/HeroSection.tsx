"use client";

import Header from "../components/Header";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="w-full min-h-screen font-poppins">
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video-Hintergrund */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/metisVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col h-full text-white">
          <Header />

          <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-8xl md:text-9xl font-light tracking-widest uppercase">
              metis
            </h1>
          </div>

          <div className="absolute bottom-24 left-12 max-w-xl text-left">
            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-md">
              <span className="font-bold">Wir stehen für Globalität</span> <br />
              Wir sind eine weltweit agierende Werbeagentur, die globale
              Perspektiven und lokale Expertise vereint.
            </p>

            
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-3 text-lg border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Erfahre mehr
              <FaArrowRight className="mt-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
