"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
});

export default function AboutPage() {
  const [counters, setCounters] = useState({ customers: 0, employees: 0, year: 0 });

  useEffect(() => {
    const duration = 5000;
    const target = { customers: 1200, employees: 16, year: 2025 };
    const interval = 50;
    const steps = duration / interval;

    const increment = {
      customers: target.customers / steps,
      employees: target.employees / steps,
      year: target.year / steps,
    };

    let current = { ...counters };
    const timer = setInterval(() => {
      current = {
        customers: Math.min(target.customers, current.customers + increment.customers),
        employees: Math.min(target.employees, current.employees + increment.employees),
        year: Math.min(target.year, current.year + increment.year),
      };
      setCounters({
        customers: Math.floor(current.customers),
        employees: Math.floor(current.employees),
        year: Math.floor(current.year),
      });
      if (
        current.customers >= target.customers &&
        current.employees >= target.employees &&
        current.year >= target.year
      )
        clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/hh.jpg"
          alt="Über uns"
          fill
          className="object-cover brightness-30"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div
          className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 ${poppins.className}`}
        >
          {/* Das sind wir */}
          <motion.h1
            className="text-[4.5rem] md:text-[6rem] font-extralight tracking-[0.3em] text-white/90 uppercase"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Das sind wir
          </motion.h1>

          {/* Unsere Geschichte */}
          <motion.div
            className="mt-8 text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <h2 className="text-2xl font-medium mb-3 tracking-wide">
              Unsere Geschichte
            </h2>
            <p className="text-base leading-relaxed font-light">
              Unsere Geschichte begann in einem Kinderzimmer und geht<br /> nun weiter
              mit mehreren Standorten weltweit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HINTER DEN KULISSEN */}
      <motion.section
        className="bg-white w-full py-24 px-6 md:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 ${poppins.className}`}
        >
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light mb-6 tracking-wide">
              Hinter den Kulissen
            </h2>
            <p className="text-lg mb-6 font-light leading-relaxed">
              Hier erhalten Sie einen Einblick in die kreative Arbeit und den Innovationsgeist,
              die hinter unseren Projekten stecken. Jedes Ergebnis entsteht durch Teamarbeit
              und Leidenschaft – von der Idee bis zur Umsetzung.
            </p>
          </div>

          <div className="md:w-1/2 relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/buro2.jpg"
              alt="Hinter den Kulissen"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* STATISTIKEN + GESCHICHTE + BEWERTUNGEN */}
      <section className={`bg-white py-24 ${poppins.className}`}>
        <div className="max-w-6xl mx-auto bg-[#faf7f2] rounded-2xl p-12 flex flex-col md:flex-row gap-12 shadow-sm">
          
          {/* Geschichte & Werte */}
          <div className="md:w-1/3 space-y-6">
            <h3 className="text-2xl font-light tracking-wide">Unsere Geschichte</h3>
            <p className="text-[15px] leading-relaxed text-gray-700">
              metisOrigins wurde 2016 gegründet, zunächst mit einem Schwerpunkt auf Designprojekten. 
              Unser Gründer, der von Anfang an eine Leidenschaft für kreative Lösungen hatte, erweiterte 
              2020 das Angebot um den Videoschnitt für YouTuber.<br /><br />
              Im Jahr 2021 folgte die Entwicklung von Softwarelösungen, um den wachsenden Anforderungen 
              unserer Kunden gerecht zu werden. Heute bieten wir ein breites Spektrum an Dienstleistungen 
              an – von Hosting und Entwicklung bis hin zu modernem Design und Branding.
            </p>

            <h3 className="text-2xl font-light tracking-wide mt-8">Unsere Werte</h3>
            <p className="text-[15px] leading-relaxed text-gray-700">
              Bei metisOrigins stehen Innovation, Teamarbeit und kontinuierliches Lernen im Mittelpunkt. 
              Wir glauben daran, dass die besten Ergebnisse durch enge Zusammenarbeit entstehen – deshalb 
              legen wir großen Wert auf offene Kommunikation und partnerschaftliche Arbeit mit unseren Kunden.
            </p>
          </div>

          {/* Statistiken */}
          <div className="md:w-1/3 flex flex-col justify-center items-center text-center">
            <h3 className="text-lg font-medium mb-12 uppercase tracking-wide text-gray-700">
              Ein paar Statistiken über metisOrigins
            </h3>
            <div className="flex flex-col items-center justify-center space-y-16 w-full">
              <div className="flex flex-col items-center">
                <p className="text-5xl font-light text-black">{counters.customers}+</p>
                <p className="text-sm font-light text-gray-600">Registrierte Kunden</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-light text-black">{counters.employees}</p>
                <p className="text-sm font-light text-gray-600">Angestellte & Freelancer</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-light text-black">{counters.year}</p>
                <p className="text-sm font-light text-gray-600">Gegründet</p>
              </div>
            </div>
          </div>

          {/* Kundenbewertungen */}
          <div className="md:w-1/3 flex flex-col justify-center gap-12 relative">
            {/* Erste Bewertung */}
            <div className="relative p-4">
              <span className="absolute -top-6 left-4 text-6xl text-gray-300 select-none">“</span>
              <p className="text-[15px] italic text-gray-700 leading-relaxed">
                Ich kann dieses Unternehmen nur empfehlen. Die Website ist zwar noch im Aufbau, 
                aber hat durch Social Media viel Aufmerksamkeit bekommen – darunter auch meine. 
                <br /><br />Absolut empfehlenswert, faire Preise und eine tolle Zusammenarbeit. Danke!
              </p>
            </div>

            {/* Zweite Bewertung */}
            <div className="relative p-4">
              <span className="absolute -top-6 left-4 text-6xl text-gray-300 select-none">“</span>
              <p className="text-[15px] italic text-gray-700 leading-relaxed">
                Ich hatte das Vergnügen, mit metisOrigins an der Neugestaltung unserer Firmenwebsite zu arbeiten 
                und könnte nicht zufriedener sein! <br /><br />Das Team war professionell, engagiert und der 
                gesamte Prozess verlief reibungslos und gut organisiert.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
