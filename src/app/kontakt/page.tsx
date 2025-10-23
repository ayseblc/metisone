"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
});

const supportSections = [
  {
    title: "Kunden Support",
    description: "Haben Sie Fragen oder benötigen Sie Unterstützung? Unser Kundensupport-Team ist hier, um Ihnen zu helfen und Ihre Anliegen schnell zu klären.",
    email: "hello@metisorigins.com"
  },
  {
    title: "Technischer Support",
    description: "Bei technischen Problemen oder Fragen zu unseren Dienstleistungen steht Ihnen unser Technischer Support mit kompetenter Hilfe zur Seite.",
    email: "technic@metisorigins.com"
  },
  {
    title: "Hosting Support",
    description: "Für alle Anliegen rund um unsere Hosting-Dienste steht Ihnen unser Hosting-Support bereit. Kontaktieren Sie uns bei Fragen oder Problemen.",
    email: "hosting@metisorigins.com"
  },
  {
    title: "Designberatung",
    description: "Benötigen Sie professionelle Designberatung? Unser Team bietet Ihnen maßgeschneiderte Lösungen, um Ihre Marke und Ihr Design zu optimieren.",
    email: "design@metisorigins.com"
  },
  {
    title: "Projektmanagement",
    description: "Erfahren Sie mehr über unsere Projektmanagement-Dienstleistungen und wie wir Ihre Projekte effizient und erfolgreich umsetzen können.",
    email: "pm@metisorigins.com"
  },
  {
    title: "After-Sales Support",
    description: "Unsere Unterstützung endet nicht mit dem Verkauf. Unser After-Sales-Support-Team ist hier, um Ihnen nach dem Kauf weiterzuhelfen.",
    email: "support@metisorigins.com"
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/stadt.jpg"
          alt="Kontakt"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 ${poppins.className}`}>
          <motion.h1
            className="text-[4.5rem] md:text-[6rem] font-extralight tracking-[0.3em] text-white/90 uppercase mb-6"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Kontakt
          </motion.h1>

          <motion.div
            className="mt-4 text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <h2 className="text-2xl font-light mb-3 tracking-wide">Behind the Scenes</h2>
            <p className="text-sm leading-relaxed font-light">
              Erhalten Sie exklusive Einblicke in unsere Arbeitsweise und Projekte.<br />
              Begleiten Sie uns hinter die Kulissen und erleben Sie, wie unsere kreativen Lösungen entstehen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SUPPORT BEREICHE */}
      <section className="bg-gray-50 py-24 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportSections.map((section, index) => (
            <div
              key={section.title}
              className={`pb-6 md:pb-0 md:pr-6 ${(index % 3 !== 2) ? "border-r border-gray-300" : ""}`}
            >
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600 mb-2">{section.description}</p>
              <a href={`mailto:${section.email}`} className="text-black-600 underline">{section.email}</a>
            </div>
          ))}
        </div>
      </section>

{/* KONTAKTFORMULAR und ÖFFNUNGSZEITEN */}
<section className="bg-gray-50 py-24 px-6 md:px-24">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-12 flex flex-col md:flex-row gap-12">

    {/* Kontaktformular */}
    <div className="md:w-2/3">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Support & Kontakt</h2>
      <p className="text-gray-600 mb-6">
        Deine Fragen wurden noch nicht beantwortet? Kontaktiere uns direkt über das Formular.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {['Design', 'Hosting', 'Entwicklung', 'Anfragen', 'Preis', 'Sonstiges'].map((topic) => (
          <button
            key={topic}
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            {topic}
          </button>
        ))}
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="firstname" placeholder="Vorname" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" name="lastname" placeholder="Nachname" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" name="email" placeholder="E-Mail Adresse" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="tel" name="phone" placeholder="Telefonnummer" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <textarea name="message" rows={6} placeholder="Nachricht" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 md:col-span-2" />

        {/* Datenschutz */}
        <div className="flex items-center md:col-span-2">
          <input type="checkbox" name="privacy" className="mr-2 w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-400 rounded" />
          <label className="text-gray-700 text-sm">
            Ich habe die <a href="/datenschutz" className="text-blue-600 underline">Datenschutzerklärung</a> gelesen und akzeptiere diese.
          </label>
        </div>

        <div className="md:col-span-2 text-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Senden
          </button>
        </div>
      </form>
    </div>

    {/* Öffnungszeiten */}
    <div className="md:w-1/3 p-6 rounded-xl shadow-inner bg-gray-100 flex flex-col">
      <h3 className="text-2xl font-semibold mb-4 text-black">Öffnungszeiten</h3>
      <ul className="text-black space-y-2">
        <li><span className="font-medium">Montag:</span> 08:00 - 18:00 Uhr</li>
        <li><span className="font-medium">Dienstag:</span> 08:00 - 18:00 Uhr</li>
        <li><span className="font-medium">Mittwoch:</span> 08:00 - 18:00 Uhr</li>
        <li><span className="font-medium">Donnerstag:</span> 08:00 - 18:00 Uhr</li>
        <li><span className="font-medium">Freitag:</span> 08:00 - 14:00 Uhr</li>
        <li><span className="font-medium">Samstag:</span> geschlossen</li>
        <li><span className="font-medium">Sonntag:</span> geschlossen</li>
      </ul>
    </div>

  </div>
</section>
<section className="bg-gray-50 py-16 px-6 md:px-24">
  <div className="max-w-4xl mx-auto flex flex-col items-center">

 
    <p className="text-lg md:text-xl text-gray-500 uppercase tracking-wide mb-2">
      Komm gerne vorbei
    </p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">
      Treffe uns Vorort
    </h2>

    {/* Adresse */}
    <div className="bg-white rounded-3xl shadow-xl p-12 flex flex-col items-center text-center space-y-6 md:space-y-8 w-full">
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        Hauptniederlassung Deutschland:<br /><br />
        Leibniz-Campus 9<br />
        89520 Heidenheim<br />
        Deutschland
      </p>

      {/* Google Maps */}
      <a
        href="https://www.google.com/maps/place/metisOrigins/@48.685769,10.1550777,17z/data=!3m1!4b1!4m6!3m5!1s0x4799412ac54ac78b:0x54931476df0a2f9e!8m2!3d48.685769!4d10.1576526!16s%2Fg%2F11t_rs49sd?entry=tts&g_ep=EgoyMDI0MDcyNC4wKgBIAVAD"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-lg"
      >
        Google Maps öffnen
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</section>
<section className="bg-gray-50 py-16 px-6 md:px-24">
  <div className="max-w-6xl mx-auto space-y-8">

    {/* Überschrift */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-8">
      Weitere Möglichkeiten zur Kontaktaufnahme
    </h2>

    {/* Grid für 3 Bereiche */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Partnerschaften */}
      <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-6">
        <h3 className="text-2xl font-semibold mb-2">Partnerschaften</h3>
        <p className="text-gray-600 mb-2">
          Interessieren Sie sich für eine Partnerschaft mit uns? Kontaktieren Sie uns, um mehr über Kooperationsmöglichkeiten und gemeinsame Projekte zu erfahren.
        </p>
        <a href="mailto:partnership@metisorigins.com" className="text-black-600 underline">
          partnership@metisorigins.com
        </a>
      </div>

      {/* Presseanfragen */}
      <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-6">
        <h3 className="text-2xl font-semibold mb-2">Presseanfragen</h3>
        <p className="text-gray-600 mb-2">
          Für Medienanfragen und Pressemitteilungen stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns für Interviews und weitere Informationen.
        </p>
        <a href="mailto:press@metisorigins.com" className="text-black-600 underline">
          press@metisorigins.com
        </a>
      </div>

      {/* Karrierechancen */}
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-2">Karrierechancen</h3>
        <p className="text-gray-600 mb-2">
          Werden Sie Teil unseres Teams! Informieren Sie sich über offene Stellen und wie Sie Ihre Karriere in unserem Unternehmen vorantreiben können.
        </p>
        <a href="mailto:career@metisorigins.com" className="text-black-600 underline">
          career@metisorigins.com
        </a>
      </div>

    </div>
  </div>
</section>






      <Footer />
    </>
  );
}
