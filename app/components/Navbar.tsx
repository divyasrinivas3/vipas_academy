"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/", sectionId: "home" },
    { name: "About", path: "/", sectionId: "about" },
    { name: "Courses", path: "/courses" },
    { name: "Why Choose Us", path: "/", sectionId: "study" },
    { name: "Testimonials", path: "/", sectionId: "testimonials" },
  ];

  const goToSection = (path: string, sectionId?: string) => {
    setIsOpen(false);
    if (pathname !== path) {
      router.push(path);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPage = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-sora text-md bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-150">
          {/* ✅ Logo Section */}
          <div
            className="flex items-center space-x-3 cursor-pointer pl-20"
            onClick={() => goToPage("/")}
          >
            <div className="relative w-24 h-24">
              <Image
                src="/vipas-logo.png"
                alt="Vipas Academy Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.sectionId ? (
                <button
                  key={link.name}
                  onClick={() => goToSection(link.path, link.sectionId)}
                  className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </button>
              ) : (
                <button
                  key={link.name}
                  onClick={() => goToPage(link.path)}
                  className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </button>
              )
            )}
            <button
              onClick={() => goToPage("/contact")}
              className="bg-gradient-to-r from-blue-900 to-blue-900 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) =>
              link.sectionId ? (
                <button
                  key={link.name}
                  onClick={() => goToSection(link.path, link.sectionId)}
                  className="block w-full text-left py-3 text-gray-700 hover:text-blue-900 transition-colors duration-300"
                >
                  {link.name}
                </button>
              ) : (
                <button
                  key={link.name}
                  onClick={() => goToPage(link.path)}
                  className="block w-full text-left py-3 text-gray-700 hover:text-blue-900 transition-colors duration-300"
                >
                  {link.name}
                </button>
              )
            )}
            <button
              onClick={() => goToPage("/contact")}
              className="w-full mt-3 bg-gradient-to-r from-blue-900 to-blue-900 text-white px-6 py-2.5 rounded-full font-medium"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
