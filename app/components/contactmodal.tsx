"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import ContactForm from "@/app/components/expertguidence";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-blue-900 to-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Expert Guidance
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl w-[30%] max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 animate-fade-in">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <ContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
