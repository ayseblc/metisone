"use client";

export default function MissionSection() {
  return (

<section className="py-32 bg-white text-center px-4 md:px-0">
  {/* Mission Text */}
  <p className="text-3xl md:text-4xl font-semibold text-black mb-12 max-w-4xl mx-auto leading-relaxed">
    Unsere Mission ist es, weltweit inspirierende und effektive Werbekampagnen zu schaffen.
    Mit unserer globalen Reichweite und tiefgehenden lokalen Expertise setzen wir uns dafür ein,
    Ihr Unternehmen erfolgreich zu machen. Lassen Sie uns gemeinsam Großartiges erreichen.
  </p>

  {/* Name */}
  <p className="text-2xl md:text-3xl font-semibold text-black mb-2">
    Marcel Richter
  </p>

  {/* Titel */}
  <p className="text-gray-600 text-lg md:text-xl mb-16">
    Founder & CEO
  </p>

  {/* Drei Paragrafen nebeneinander */}
  <div className="flex flex-col md:flex-row justify-center items-start md:space-x-16 gap-12">
    {/* Professional Hosting */}
    <div className="flex-1 text-left">
      <div className="border-t border-gray-400 mb-2 w-full"></div>
      <h3 className="text-2xl font-bold mb-4">Professional Hosting</h3>
      <p className="text-gray-700 leading-relaxed text-lg">
        Unser managed/unmanaged Hosting bietet Ihnen weltweit zuverlässige und sichere Lösungen, 
        damit Ihre Online-Präsenz jederzeit optimal performt.
      </p>
    </div>

    {/* Globale Entwicklung */}
    <div className="flex-1 text-left">
      <div className="border-t border-gray-400 mb-2 w-full"></div>
      <h3 className="text-2xl font-bold mb-4">Globale Entwicklung</h3>
      <p className="text-gray-700 leading-relaxed text-lg">
        Wir bieten umfassende Entwicklungsdienstleistungen, die alle Arten von Projekten abdecken, 
        um Ihre individuellen Anforderungen präzise und effizient umzusetzen.
      </p>
    </div>

    {/* Branding & Design */}
    <div className="flex-1 text-left">
      <div className="border-t border-gray-400 mb-2 w-full"></div>
      <h3 className="text-2xl font-bold mb-4">Branding & Design</h3>
      <p className="text-gray-700 leading-relaxed text-lg">
        Unsere modernen Designs und Brandings machen Ihre Marke einzigartig und ansprechend, 
        um Ihre Zielgruppe optimal zu erreichen und zu begeistern.
      </p>
    </div>
  </div>
</section>


  );
}
