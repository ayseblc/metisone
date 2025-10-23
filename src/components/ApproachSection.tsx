"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ServerStackIcon, PencilSquareIcon, ComputerDesktopIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid';

export default function ApproachPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  const locations = [
    {
      name: "Heidenheim, Germany",
      description:
        "Unsere Hauptniederlassung in Heidenheim ist das Herzstück unseres Unternehmens. Hier koordinieren wir unsere globalen Aktivitäten und bieten umfassenden Support in Deutsch und Englisch.",
    },
    {
      name: "Frankfurt, Germany",
      description:
        "Unser Hauptserver in Frankfurt dient als zentraler Knotenpunkt für Europa. Er gewährleistet schnelle und zuverlässige Verbindungen und bietet erstklassige Performance für unsere europäischen Kunden.",
    },
    {
      name: "Sydney, Australia",
      description:
        "Unser Standort in Sydney beherbergt einen unserer leistungsstarken Server. Unsere Ansprechpartner vor Ort stehen Ihnen sowohl in Deutsch als auch in Englisch zur Verfügung, um Ihnen bestmöglichen Support zu bieten.",
    },
  ];

  const iconColor = "text-cyan-500"; // Einheitliche Icon-Farbe

  return (
    <div className="bg-white">
      {/* Timeline + Bild rechts */}
      <section className="relative py-24 px-6 md:px-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-500 text-sm uppercase tracking-widest mb-2 relative z-20"
        >
          Das ist unser Vorgehen
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 relative z-20"
        >
          Erfahre mehr über uns
        </motion.h2>

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Timeline */}
          <div className="relative flex-[2] z-0">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200"></div>
            <div className="space-y-24">
              {locations.map((loc, index) => (
                <motion.div
                  key={loc.name}
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  onMouseEnter={() => setHovered(loc.name)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Icon mit Farbverlauf */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-2 border-white shadow-lg z-10
                    bg-gradient-to-r from-cyan-400 to-cyan-500"></div>

                  <div
                    className={`mt-8 md:mt-0 md:w-1/2 px-6 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-semibold mb-2 ${
                        hovered === loc.name ? "text-cyan-500" : "text-gray-900"
                      }`}
                    >
                      {loc.name}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{loc.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bild + Text rechts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-[1] flex flex-col items-center text-left"
          >
            <div className="relative w-full max-w-md h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
              <Image
                src="/images/bib.jpg"
                alt="Unser Vorgehen"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Unser Vorgehen</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Unser Ansatz ist strukturiert und zielgerichtet, um Ihre Anforderungen optimal zu erfüllen.
              Wir beginnen mit einer ausführlichen Analyse Ihrer Bedürfnisse, gefolgt von einer
              maßgeschneiderten Strategieentwicklung. Unsere Experten setzen die Lösungen effizient um
              und begleiten Sie kontinuierlich, um den Erfolg langfristig zu sichern.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Unsere Services</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Wir bieten umfassende Lösungen, die Ihr Unternehmen optimal unterstützen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          {/* Hosting / Managed Hosting */}
          <div className="flex flex-col items-center md:items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <ServerStackIcon className={`w-12 h-12 mb-4 ${iconColor}`} />
            <h3 className="text-xl font-semibold mb-2">Hosting / Managed Hosting</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Unser Managed Hosting bietet weltweit zuverlässige und sichere Lösungen mit lokalem Support in verschiedenen Sprachen. Wir gewährleisten hohe Performance, Sicherheit und Verfügbarkeit Ihrer Online-Präsenz. Unser Service umfasst die vollständige Verwaltung Ihres Hostings, einschließlich Updates, Sicherheit, Backups und technischem Support.
            </p>
          </div>

          {/* Design */}
          <div className="flex flex-col items-center md:items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <PencilSquareIcon className={`w-12 h-12 mb-4 ${iconColor}`} />
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Unser Design-Service umfasst die Erstellung von Logos, Markenidentitäten, Webdesign und grafischen Elementen für Print- und Online-Medien. Wir legen großen Wert auf modernes und ansprechendes Design, das Ihre Marke optimal repräsentiert. Unsere Referenzen und Fallstudien belegen die Zufriedenheit unserer Kunden und den Erfolg unserer Designprojekte.
            </p>
          </div>

          {/* Entwicklung */}
          <div className="flex flex-col items-center md:items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <ComputerDesktopIcon className={`w-12 h-12 mb-4 ${iconColor}`} />
            <h3 className="text-xl font-semibold mb-2">Entwicklung</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Unser Entwicklungs-Service bietet weltweit zuverlässige und sichere Lösungen mit lokalem Support in verschiedenen Sprachen. Wir gewährleisten hohe Performance, Sicherheit und Verfügbarkeit Ihrer Online-Präsenz. Unser Service umfasst die vollständige Verwaltung Ihrer Softwareprojekte, einschließlich Updates, Sicherheit, Backups und technischem Support.
            </p>
          </div>

          {/* Startups & Branding */}
          <div className="flex flex-col items-center md:items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <BuildingOffice2Icon className={`w-12 h-12 mb-4 ${iconColor}`} />
            <h3 className="text-xl font-semibold mb-2">Startups & Branding</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Wir bieten umfassende Branding-Dienstleistungen, die Startups helfen, starke Markenidentitäten zu entwickeln. Dazu gehören Logo-Design, Markenstrategie und visuelle Kommunikation, um Ihre Marke im Markt herausragen zu lassen. Unsere Dienstleistungen schaffen eine konsistente Identität, die Vertrauen und Wiedererkennung fördert.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
