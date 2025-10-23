"use client";

import { useState, useEffect, useRef } from "react";

export default function GlobalReachSection() {
  const [count, setCount] = useState(0);
  const target = 293; // Zielzahl
  const duration = 2000; // 2 Sekunden
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let start = 0;
    let interval: number; 

    if (sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const fps = 60;
            const totalFrames = (duration / 1000) * fps;
            const increment = target / totalFrames;

            interval = window.setInterval(() => { // <-- window.setInterval
              start += increment;
              if (start >= target) {
                start = target;
                window.clearInterval(interval); // <-- window.clearInterval
              }
              setCount(Math.floor(start));
            }, 1000 / fps);

            observer.disconnect(); // Nur einmal starten
          }
        },
        { threshold: 0.5 } // Start wenn die Hälfte sichtbar
      );

      observer.observe(sectionRef.current);
    }

    return () => {
      if (interval) window.clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[600px] md:h-[700px] my-32">
      <img
        src="/images/rolltreppe.jpg"
        alt="Globale Reichweite"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 text-white max-w-md">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Unsere Globalität
        </h2>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          Erfahren Sie, wie unsere globale Reichweite und lokale Expertise Ihr
          Unternehmen weltweit erfolgreich machen können.
        </p>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          Wir verbinden internationale Perspektiven mit lokaler Marktkenntnis,
          um maßgeschneiderte Lösungen zu bieten.
        </p>
        <div className="mt-6 flex items-baseline space-x-2">
          <p className="text-3xl md:text-4xl font-bold">{count}</p>
          <span className="text-2xl md:text-3xl font-semibold">Millionen</span>
        </div>
        <p className="text-lg md:text-xl">Reichweite unserer Kunden pro Monat</p>
      </div>
    </section>
  );
}
