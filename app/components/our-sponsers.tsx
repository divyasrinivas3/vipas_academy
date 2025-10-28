"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = [
  "/vipastechno.png",
//   "/SAVICC.png",
  "/YASH.png",
    "/vipastechno.png",
];

export default function OurSponsors() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* ---------- LEFT SIDE TEXT ---------- */}
        <div>
          <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Our Sponsor
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mt-3 leading-snug">
            Get in touch with the companies who
            Collaboration with us
          </h2>
        </div>

        {/* ---------- RIGHT SIDE SCROLLING LOGOS ---------- */}
        <div className="overflow-hidden relative">
          {/* Continuous Scrolling Animation */}
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 12, // speed (lower = faster)
              ease: "linear",
            }}
          >
            {/* Duplicate logos twice to create loop effect */}
            {[...sponsors, ...sponsors].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 relative"
              >
                <Image
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
