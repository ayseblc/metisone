"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16">
      
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Verbinde dich mit uns auf Social Media
        </h2>
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/metisorigins/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/metisorigins"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mb-12"></div>

      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
          {/* Über uns */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Über uns</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/ueber-uns"
                  className="hover:text-gray-400 transition-colors"
                >
                  Unsere Geschichte
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/impressum"
                  className="hover:text-gray-400 transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="hover:text-gray-400 transition-colors"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="/agb"
                  className="hover:text-gray-400 transition-colors"
                >
                  AGB
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/kontakt"
                  className="hover:text-gray-400 transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
