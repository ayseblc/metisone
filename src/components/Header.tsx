"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Startseite", href: "/" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 transition-all duration-300
        ${scrolled ? "bg-black bg-opacity-95 shadow-lg" : "bg-transparent"}`}
    >
      {/* Logo */}
      <Link href="/">
        <div className="text-2xl font-bold text-white tracking-wide cursor-pointer">
          metisorigins
        </div>
      </Link>

      {/* Menüleiste */}
      <nav className="flex items-center space-x-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`
              px-4 py-2 rounded-md font-medium transition-all duration-300
              ${pathname === item.href
                ? "bg-white text-black shadow-lg"
                : "text-white hover:bg-white hover:text-black"}
            `}
          >
            {item.name}
          </Link>
        ))}

       
        <div className="flex space-x-4 ml-6">
          <a
            href="https://www.instagram.com/metisorigins/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/metisorigins/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>
    </header>
  );
}
