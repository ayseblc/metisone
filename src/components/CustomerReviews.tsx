"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    quote:
      "Ich kann diese Firma bzw. dieses Unternehmen nur Empfehlen. Die Website ist zwar schon seit einigen Monaten im Aufbau, hat aber durch Social Media viel Aufmerksamkeit bekommen, darunter auch meine.\n\nAbsolut zu empfehlen und Preise sind auch fair. Auf eine weiterhin gute Zusammenarbeit. Danke!",
    name: "Sedrix L.",
    role: "Privatperson",
    image: "/images/lap1.jpg",
    avatar: "/images/rev1.jpg",
    googleMapsLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURSai1tanBBRRAB!2m1!1s0x0:0x54931476df0a2f9e!3m1!1s2@1:CIHM0ogKEICAgIDRj-mjpAE%7CCgsIpp3ZogYQ-Ovqcw%7C?hl=de&entry=tts&g_ep=EgoyMDI0MDcyNC4wKgBIAVAD",
  },
  {
    quote:
      "Ich hatte das Vergnügen, mit Metis Origins an der Neugestaltung unserer Firmenwebsite zu arbeiten und ich könnte nicht zufriedener sein! Herr Barth und sein Team haben von Anfang an einen professionellen und engagierten Eindruck hinterlassen.\n\nDer gesamte Prozess war reibungslos und gut organisiert….",
    name: "Tobias H.",
    role: "CEO",
    image: "/images/lap3.jpg",
    avatar: "/images/rev2.jpg",
    googleMapsLink: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUN6djVqcE93EAE!2m1!1s0x0:0x54931476df0a2f9e!3m1!1s2@1:CIHM0ogKEICAgICzv5jpOw%7CCgwI6J6HswYQ0Iyf8AE%7C?hl=de&entry=tts&g_ep=EgoyMDI0MDcyNC4wKgBIAVAD",
  },
];

export default function FullPageReviewsIllustration() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 md:px-16 space-y-16">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">
          Bewertungen unserer Kunden
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Sie vertrauen uns!
        </h2>
      </div>

      {/* Reviews */}
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-stretch gap-8 max-w-6xl mx-auto ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Review */}
          <div className="md:w-1/2 bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between">
            <div className="text-7xl text-gray-200 mb-6 select-none">“</div>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400 mr-1" />
              ))}
            </div>

            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6 whitespace-pre-line">
              {review.quote}
            </p>

            <div className="flex flex-col items-start gap-2 mt-6">
              {/* Moderner Link „Zur Bewertung“ */}
              <a
                href={review.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-900 font-semibold text-sm hover:translate-x-1 transition-transform duration-200"
              >
                Zur Bewertung <span className="ml-2 text-gray-500">→</span>
              </a>

              {/* Name & Rolle */}
              <div className="flex items-center gap-4 mt-2">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-md flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-xl min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-gray-100">
            <Image
              src={review.image}
              alt="Illustration"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
