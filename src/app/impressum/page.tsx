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

export default function ImpressumPage() {
  return (
    <>
      <Header />

   
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/images/office.jpg" 
          alt="Impressum"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 ${poppins.className}`}>
          <motion.h1
            className="text-[4rem] md:text-[5.5rem] font-extralight tracking-[0.3em] text-white/90 uppercase"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Impressum
          </motion.h1>
        </div>
      </section>

     
      <section className="bg-gray-50 py-24 px-6 md:px-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 space-y-8 md:space-y-10">

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Angaben gemäß §5 TMG:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              metisOrigins UG (haftungsbeschränkt)<br />
              Leibniz-Campus 9<br />
              89520 Heidenheim an der Brenz
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Handelsregister:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              HRB 750021<br />
              Registergericht: Amtsgericht Ulm
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Geschäftsführer:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">Marcel Richter</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Kontakt:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Telefon: +49 176 97780664<br />
              E-Mail: <a href="mailto:hello@metisorigins.com" className="underline text-blue-600">hello@metisorigins.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Umsatzsteuer:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: BEANTRAGT
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Rechtliche Hinweise:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>EU-Streitschlichtung:</strong><br />
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.<br />
              <a href="https://consumer-redress.ec.europa.eu/site-relocation_en" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                Zur Plattform der Europäischen Kommission
              </a>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-2">
              <strong>Haftung für Inhalte & Links:</strong><br />
              Wir übernehmen keine Haftung für die Inhalte externer Links. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-2">
              <strong>Urheberrecht:</strong><br />
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            </p>
          </div>

          <p className="text-gray-500 text-sm text-center mt-6">
            © 2024 metisOrigins – Alle Rechte vorbehalten
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
