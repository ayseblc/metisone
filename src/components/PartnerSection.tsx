"use client";

const partners = [
  { name: "DRAWLIE" },
  { name: "aitch.systems" },
  { name: "Flowers" },
  { name: "Skrime" },
];

export default function PartnerSection() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-gray-500 text-xl font-medium mb-2">Wir vertrauen auf</h2>
      <p className="text-5xl md:text-6xl font-bold text-black mb-12">Unsere Partner</p>

      <div className="flex justify-center items-center space-x-16 flex-wrap">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
